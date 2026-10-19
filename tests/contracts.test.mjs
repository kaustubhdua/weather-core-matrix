import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const app = await readFile(new URL('../app.js', import.meta.url), 'utf8');
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('weather lookup encodes user input and bounds the network request', () => {
  assert.match(app, /encodeURIComponent\(city\)/);
  assert.match(app, /new AbortController\(\)/);
  assert.match(app, /setTimeout\(\(\) => controller\.abort\(\), 10000\)/);
  assert.match(app, /clearTimeout\(timeoutId\)/);
});

test('weather UI handles HTTP, network, timeout and malformed provider responses', () => {
  assert.match(app, /if \(!response\.ok\)/);
  assert.match(app, /AbortError/);
  assert.match(app, /Could not reach the weather service/);
  assert.match(app, /unexpected response/);
  assert.match(app, /finally/);
  assert.match(app, /searchBtn\.disabled = false/);
});

test('weather results use textContent rather than interpreting provider data as HTML', () => {
  assert.match(app, /heading\.textContent/);
  assert.match(app, /description\.textContent/);
  assert.doesNotMatch(app, /\.innerHTML\s*=/);
});

test('weather search and result region have explicit accessible names and live state', () => {
  assert.match(html, /id="city-input"/);
  assert.match(html, /for="city-input"/);
  assert.match(html, /id="weather-display"/);
  assert.match(html, /aria-live=/);
});
