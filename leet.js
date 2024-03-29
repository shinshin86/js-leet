/**
 * I use the characters listed on the page here.
 * URL: https://ja.wikipedia.org/wiki/Leet
 * Since it is taken from Wikipedia, the license is CC-BY-SA 3.0 only for this part (getLeetList).
 * @returns {Array<string>}
 */
const getLeetList = () => {
  A = ['A', '4', '/\\', '@', '/-\\', '^', 'aye', '(L', 'Д'];
  B = ['B', 'I3', '8', '13', '|3', 'ß', 'P>', '|:', '!3', '(3', '/3', ')3', '|-]', 'j3'];
  C = ['C', '[', '¢', '<', '(', '©'];
  D = ['D', ')', '|)', '(|', '|o', '[)', 'I>', '|>', 'T)', 'I7', 'cl', '|}', '|]'];
  E = ['E', '3', '&', '£', '€', 'ë', '[-', '|=-'];
  F = ['F', '|=', 'ƒ', '|#', 'ph', '/=', 'v'];
  G = ['G', '6', '&', '(_+', '9', 'C-', 'gee', '(?,', '[,', '{,', '<-', '(.', '₲'];
  H = ['H', '#', '/-/', '[-]', ']-[', ')-(', '(-)', ':-:', '|~|', '|-|', ']~[', '}{', '!-!', '1-1', '-/', 'I+I', '}-{'];
  I = ['I', '1', '!', '¡', '|', 'eye', '3y3', '][', ']', '/me'];
  J = ['J', '_|', '_/', '¿', '</', '_]', '(/'];
  K = ['K', 'X', '|<', '|{', ']{', '|X'];
  L = ['L', '1', '£', '7', '1_', '|', '|_', 'el', '[]_', '[_'];
  M = ['M', '|v|', '[V]', '{V}', '\\/V\\', 'em', 'AA', '|\\/|', '/\\/\\', '(u)', '(V)', '(/)', '/|\\', '^^', '/|/|', '//\\', '||\\', ']\\/['];
  N = ['N', '^/', '|\\|', '/\\/', '[\\]', '<\\>', 'en', '[]\\', '//', '[]', '/V', '1V', 'И', '^', 'ท'];
  O = ['O', '0', '()', 'oh', '[]', 'p', '<>', 'Ø'];
  P = ['P', '|*', '|o', '|º', '|^(o)', '|>', '|"', '9', '[]D', '|°', '|7'];
  Q = ['Q', '(_,)', '()_', '0_', '<|', '&'];
  R = ['R', 'I2', '|`', '|~', '|?', '/2', '|^', 'lz', '|9', '2', '12', '®', '[z', 'Я', '.-', '|2', '|-'];
  S = ['S', '5', '$', 'z', '§', 'ehs', 'es', '2'];
  T = ['T', '7', '+', '-|-', "']['", '†', '\\"|\\'];
  U = ['U', '(_)', '|_|', 'v', 'L|', 'µ', 'บ'];
  V = ['V', '\\/', '|/', '\\|'];
  W = ['W', '\\/\\/', 'vv', '\\N', "'//", "\\\\'", '\\^/', 'dubya', '(n)', '\\V/', '\\X/', '\\|/', '\\_|_/', '\\_:_/', 'Ш', 'uu', '2u', '\\\\//\\\\//', 'พ', 'ω'];
  X = ['X', '><', 'Ж', '}{', 'ecks', '×', '?', ')(', '][', '}{'];
  Y = ['Y', 'j', '`/', 'Ч', '7', '\\|/', '¥'];
  Z = ['Z', '2', '7_', '-/_', '%', '>_', 's', '~/_', '-\\_', '-|_'];

  return [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
};

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const randRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * @param {string} inputs
 * @returns {string}
 */
module.exports.getLeet = (inputs) => {
  const leetList = getLeetList();
  let leetIdxList = [];

  leetList.forEach((v) => {
    leetIdxList.push(v[0]);
  });

  let res = '';
  const li = inputs.split('');

  li.forEach((v) => {
    if (!leetIdxList.includes(v.toUpperCase())) {
      res += v;
    } else {
      const idx = leetIdxList.indexOf(v.toUpperCase());
      const n = randRange(1, leetList[idx].length - 1);
      res += leetList[idx][n];
    }
  });

  return res;
};
