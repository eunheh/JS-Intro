

var squaredmax = function (n) {
  var highest = Math.max(x,y,z);
  var secondHighest = Math.max(x,y,z) && !highest;
  return Math.sqrt(highest + secondHighest);
}

function map(f,a,d) {
  var result = [Math.max(f,a,d)], // Create a new Array
      i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}


//NIGHTMARE MODE
function n(i) {
  if (i < 0)
    return;
  console.log(0 + i);
  n(i - 1);
}
n(3);
