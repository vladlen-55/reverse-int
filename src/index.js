module.exports = function reverse (n) {
  let rev = String(n).split("").reverse().join("");
  rev = parseInt(rev)
  return rev;
}
