function Income() {
  var it = parseInt(document.getElementById("its").value);
  var tax = 0;

  if (it <= 250000) tax = 0;
  else if (it <= 400000) tax = 0.2 * (it - 250000);
  else if (it <= 800000) tax = 0.25 * (it - 400000) + 30000;
  else if (it <= 2000000) tax = 0.3 * (it - 800000) + 130000;
  else if (it <= 8000000) tax = 0.32 * (it - 2000000) + 490000;
  else tax = 0.35 * (it - 8000000) + 2410000;

  document.getElementById("taxresult").innerHTML = tax;
}
