const fs = require('fs');
const assert = require('assert');
const source = fs.readFileSync('ultimate-werewolf-setup.html', 'utf8');
const css = source.match(/<style>([\s\S]*?)<\/style>/i)[1];

for (const token of ['--cream:#ffe9ce', '--paper:#ffffff', '--ink:#000000', '--violet:#8a53ff', '--coral:#fd4b38', '--yellow:#ffd80c', '--lime:#3ccb09', '--indigo:#0500a3']) {
  assert(css.includes(token), `missing Gathr token ${token}`);
}
assert(!css.includes('gradient'), 'Gathr UI must not use gradients');
assert(!css.match(/box-shadow:\s*(?!var\(--ring\))/), 'Gathr UI must use the yellow ring only');
assert(css.includes('.role-card-evil,.role-card-village,.role-card-neutral,.role-card-vampire{background:var(--paper)'), 'role card alignment classes must share one neutral background');
for (const id of ['modBtn', 'playerBtn', 'modTab', 'playerTab', 'modView', 'playerView']) {
  assert(source.includes(`id="${id}"`), `missing stable selector ${id}`);
}
assert(css.includes('@media (prefers-reduced-motion:reduce)'), 'reduced motion rule is required');
console.log('DESIGN_SYSTEM_STATIC_OK tokens=8 no-gradients no-alignment-backgrounds stable-ids=6');
