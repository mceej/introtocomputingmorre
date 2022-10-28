function initcart() {
  cart = [];

  document.getElementById("items").value = cart.length;

  document.getElementById("cart").innerHTML = "";
}

// Clear Cart

function clearcart() {
  var toclear;

  toclear = confirm("Delete all item(s) from cart ?");

  if (toclear) {
    initcart();
  }
}

// Add item to cart

function addtocart() {
  var cartitem = {
    item: "1",

    price: 0,

    qty: 1,

    deduction: 1,

    itemamount: function itemamount() {
      return Math.round(this.price * this.qty);
    },

    netpay: function netpay() {
      return Math.round(this.itemamount() - this.deduction);
    },
  };

  cartitem.item = document.getElementById("itemdesc").value;

  cartitem.qty = document.getElementById("qty").value;

  cartitem.price = document.getElementById("price").value;

  cartitem.deduction = document.getElementById("deduction").value;

  console.log(cartitem.item);

  console.log(cartitem.qty);

  console.log(cartitem.price);

  console.log(cartitem.deduction);

  cart.push(cartitem);

  //cart[cart.length]=cartitem;

  console.log(cart.length);

  document.getElementById("items").value = cart.length;

  showcart();
}

// Compute Amount per Item

function computeamount() {
  var q, p, q;

  q = document.getElementById("qty").value * 1;

  p = document.getElementById("price").value * 1;

  a = Math.round(q * p);

  console.log(a);

  document.getElementById("deduction").value = a;
}

// Delete item from chart

function deleteitem() {
  var todelete;

  var itemno;

  itemno = document.getElementById("delitem").value;

  todelete = confirm("Delete item no. " + itemno + "?");

  if (todelete) {
    cart.splice(itemno - 1, 1);

    document.getElementById("items").value = cart.length;

    showcart();
  }
}

// Show the contents of the cart

function showcart() {
  var i, l, carttext, totalamount, ln;

  var theader, tbody, tb, tfooter;

  // Generate table header;

  theader = "<thead>";

  theader += "<tr>";

  theader += "<th>No.</th>";

  theader += '<th style="text-align:left" >Employee Name</th>';

  theader += "<th>Days Worked</th>";

  theader += '<th style="text-align:right">Daily Rate</th>';

  theader += "<th>Gross Pay</th>";

  theader += "<th>Deduction</th>";

  theader += "<th>Net Pay</th>";

  theader += "</tr>";

  theader += "</thead>";

  // Generate Table Body

  l = cart.length;

  //  for (i=0,totalamount=0,carttext="",tbody='<tbody id="cart">';i<l;i++){

  for (i = 0, totalamount = 0, carttext = "", tbody = ""; i < l; i++) {
    ln = i + 1;

    tbody +=
      "<tr>" +
      "<td>" +
      ln +
      " </td>" +
      "<td>" +
      cart[i].item +
      " </td>" +
      '<td style="text-align:right">' +
      cart[i].qty +
      "</td>" +
      '<td style="text-align:right">' +
      cart[i].price +
      "</td>" +
      '<td style="text-align:right">' +
      cart[i].itemamount() +
      "</td>" +
      '<td style="text-align:right">' +
      cart[i].deduction +
      "</td>" +
      '<td style="text-align:right">' +
      cart[i].netpay() +
      "</td>" +
      "</tr>";

    totalamount += cart[i].itemamount();
  }

  // tbody += "</tbody>";

  console.log(theader + tbody + tfooter);

  document.getElementById("cart").innerHTML =
    "<table>" + theader + tbody + tfooter + "</table>";
}

// Global variable

var cart = [];
