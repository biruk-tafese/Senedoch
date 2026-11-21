import assert from "node:assert/strict";
import { normalizeEthiopianPhone } from "../lib/auth/phone";
import {
  createTemplateSample,
  loginWithPhone,
  readStore,
  signupWithPhone,
} from "../lib/db/store";
import { buildDocxBlob, buildPdfBlob, buildTxtBlob } from "../lib/export/documentExport";

async function runTests() {
  // 1. Phone normalization
  assert.equal(normalizeEthiopianPhone("0911223344"), "+251911223344");
  assert.equal(normalizeEthiopianPhone("0711223344"), "+251711223344");
  assert.equal(normalizeEthiopianPhone("+251911223344"), "+251911223344");
  assert.equal(normalizeEthiopianPhone("12345"), null);

  // 2. Signup & login with name + phone number
  const created = signupWithPhone({
    fullName: "Abebe Bikila",
    phoneNumber: "0912345678",
    password: "secret",
  });
  assert.equal(created.ok, true);
  if (created.ok) {
    assert.equal(created.user.phoneNumber, "+251912345678");
    assert.equal(created.user.fullName, "Abebe Bikila");
  }

  const loggedIn = loginWithPhone({
    phoneNumber: "+251912345678",
    password: "secret",
  });
  assert.equal(loggedIn.ok, true);

  // 3. Seed data & sample upload categorization
  const initialStore = readStore();
  assert.ok(initialStore.categories.length >= 5);
  assert.ok(initialStore.templates.length >= 10);

  const sample = createTemplateSample({
    categoryId: "rent",
    titleAm: "የመጋዘን ኪራይ ውል",
    purposeAm: "መጋዘን",
    bodyAm: "የመጋዘን ኪራይ ስምምነት ጽሑፍ",
  });
  assert.equal(sample.ok, true);

  // 4. Multi-format exports (.docx, .pdf, .txt)
  const txtBlob = buildTxtBlob("ውክልና", "የውክልና ጽሑፍ");
  assert.ok(txtBlob.size > 0);

  const docxBlob = await buildDocxBlob("ውክልና", "የውክልና ጽሑፍ");
  assert.ok(docxBlob.size > 0);

  const pdfBlob = buildPdfBlob("ውክልና", "የውክልና ጽሑፍ");
  assert.ok(pdfBlob.size > 0);

  console.log("ALL SENEDOCH TESTS PASSED");
}

runTests().catch((err) => {
  console.error(err);
  process.exit(1);
});
