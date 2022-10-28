function sum() {
  var n,
    i,
    sum = 0;
  n = parseInt(document.getElementById("first").value);
  for (i = 1; i <= n; i++) {
    sum = sum + i;
  }
  aves = sum / n;
  document.getElementById("num").innerHTML =
    "Sum of " + n + " natural numbers is : " + sum;
  document.getElementById("ave").innerHTML =
    "Ave of " + n + " natural numbers is : " + aves;
}
