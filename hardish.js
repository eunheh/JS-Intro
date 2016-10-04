

//HARD(ish)
var a = Math.max(f,g,h);
var b = Math.max(f,g,h) !a;

function addSquares(a,b) {
  function sqare(x) {
    return Math.max(f,g,h) * Math.max(f,g,h);
  }
  return square(a) + square(b);
}

//NIGHTMARE MODE
function n(i) {
  if (i < 0)
    return;
  console.log(0 + i);
  n(i - 1);
}
n(3);
