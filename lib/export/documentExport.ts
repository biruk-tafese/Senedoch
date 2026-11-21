import { Document, Packer, Paragraph, TextRun } from "docx";
import { jsPDF } from "jspdf";
import mammoth from "mammoth";

export async function buildDocxBlob(title: string, content: string): Promise<Blob> {
  const lines = [title, "", ...content.split("\n")];
  const doc = new Document({
    sections: [
      {
        children: lines.map(
          (line) =>
            new Paragraph({
              spacing: { after: 140 },
              children: [
                new TextRun({
                  text: line,
                  font: "Noto Sans Ethiopic",
                  size: 24,
                }),
              ],
            })
        ),
      },
    ],
  });

  return Packer.toBlob(doc);
}

export function buildPdfBlob(title: string, content: string): Blob {
  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  const marginX = 48;
  const pageWidth = pdf.internal.pageSize.getWidth() - marginX * 2;
  const pageHeight = pdf.internal.pageSize.getHeight() - 60;

  pdf.setFontSize(13);
  const titleLines = pdf.splitTextToSize(title, pageWidth);
  let cursorY = 56;
  pdf.text(titleLines, marginX, cursorY);
  cursorY += titleLines.length * 18 + 12;

  pdf.setFontSize(11);
  const bodyLines = pdf.splitTextToSize(content, pageWidth);
  for (const line of bodyLines) {
    if (cursorY > pageHeight) {
      pdf.addPage();
      cursorY = 56;
    }
    pdf.text(line, marginX, cursorY);
    cursorY += 16;
  }

  return pdf.output("blob");
}

export function buildTxtBlob(title: string, content: string): Blob {
  const text = `${title}\n\n${content}`;
  return new Blob([text], { type: "text/plain;charset=utf-8" });
}

export async function extractTextFromUploadedFile(file: File): Promise<string> {
  const lowerName = file.name.toLowerCase();
  if (lowerName.endsWith(".docx")) {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  }
  return file.text();
}
