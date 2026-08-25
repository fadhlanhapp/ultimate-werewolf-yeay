const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const htmlPath = path.join(__dirname, '..', 'ultimate-werewolf-setup.html');
const html = fs.readFileSync(htmlPath, 'utf8');

test('moderator lobby has a dedicated QR panel and local QR encoder', () => {
  assert.match(html, /id=["']modQrPanel["']/);
  assert.match(html, /id=["']modQr["']/);
  assert.match(html, /Players:\s*scan this with your phone camera\./i);
  assert.match(html, /<script[^>]+src=["'][^"']*vendor[^"']+\.js["']/i);
  assert.doesNotMatch(html, /<script[^>]+src=["']https?:\/\//i);
});

test('QR helper renders the exact URL passed by the moderator lobby', () => {
  assert.match(html, /function\s+renderModeratorQr\s*\(\s*mount\s*,\s*url\s*\)/);
  assert.match(html, /renderModeratorQr\s*\(\s*document\.getElementById\(["']modQr["']\)\s*,\s*url\s*\)/);
  assert.match(html, /clear(?: only)?[\s\S]{0,100}modQr|mount\.replaceChildren\(\)/i);
  assert.match(html, /QRCode|qrcode/i);
  assert.match(html, /qr\.addData\s*\(\s*url\s*\)/);
});

test('QR panel is vertically centered with centered instruction copy', () => {
  const qrPanelRule = html.match(/\.qr-panel\{[^}]+\}/)?.[0];
  const qrCopyRule = html.match(/\.qr-copy\{[^}]+\}/)?.[0];
  assert.ok(qrPanelRule, 'expected a base .qr-panel CSS rule');
  assert.ok(qrCopyRule, 'expected a base .qr-copy CSS rule');
  assert.match(qrPanelRule, /flex-direction:\s*column/);
  assert.match(qrPanelRule, /align-items:\s*center/);
  assert.match(qrCopyRule, /text-align:\s*center/);
});

test('QR panel copy uses readable ink in its base styling', () => {
  const qrCopyRule = html.match(/\.qr-copy\{[^}]+\}/)?.[0];
  assert.ok(qrCopyRule, 'expected a base .qr-copy CSS rule');
  assert.match(qrCopyRule, /color:\s*var\(--ink\)/);
  assert.doesNotMatch(qrCopyRule, /color:\s*var\(--paper\)/);
});

test('existing moderator copy link remains present', () => {
  assert.match(html, /id=["']copyBtn["']/);
  assert.match(html, /copyToClipboard\s*\(\s*url\s*\)/);
});
