/**
 * ImbasKomp AI — Backend Google Apps Script
 * Simpan markah kuiz ke Google Sheets & pulangkan papan pendahulu.
 *
 * Cara pasang:
 * 1. Buat Google Sheets baharu > Extensions > Apps Script.
 * 2. Tampal kod ini, Save.
 * 3. Deploy > New deployment > Web app
 *      Execute as: Me
 *      Who has access: Anyone
 * 4. Salin URL (berakhir /exec) ke CONFIG.SCRIPT_URL dalam index.html.
 */

const SHEET_NAME = 'Markah';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['Tarikh', 'Nama', 'Kelas', 'Markah', 'Betul', 'Jumlah Soalan', 'Masa (s)', 'Topik']);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, 8).setFontWeight('bold').setBackground('#dbeafe');
  }
  return sh;
}

function clean_(v, n) {
  // elak formula injection & hadkan panjang
  return String(v == null ? '' : v).replace(/^[=+\-@]/, "'$&").slice(0, n);
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    getSheet_().appendRow([
      new Date(),
      clean_(d.nama, 40),
      clean_(d.kelas, 20),
      Number(d.markah) || 0,
      Number(d.betul) || 0,
      Number(d.jumlah) || 0,
      Number(d.masa) || 0,
      clean_(d.mod, 20)
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'top';
  if (action === 'top') {
    const mod = (e && e.parameter && e.parameter.mod) || '';
    const values = getSheet_().getDataRange().getValues().slice(1)
      .filter(r => !mod || String(r[7]) === mod);
    const rows = values
      .map(r => ({ nama: r[1], kelas: r[2], markah: Number(r[3]) || 0, betul: r[4], jumlah: r[5], masa: Number(r[6]) || 0, topik: r[7] }))
      .sort((a, b) => b.markah - a.markah || a.masa - b.masa)
      .slice(0, 10);
    return json_({ ok: true, rows: rows });
  }
  return json_({ ok: false, error: 'Tindakan tidak dikenali' });
}
