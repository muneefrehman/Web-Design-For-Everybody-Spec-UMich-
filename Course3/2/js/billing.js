/*Add the JavaScript here for the function billingFunction().
It is responsible for setting and clearing the fields in Billing
Information */



function billingFunction(){
  var shipname = document.getElementById('shippingName');
  var shipzip = document.getElementById('shippingZip');
  var billname = document.getElementById('billingName');
  var billzip = document.getElementById('billingZip');

  if (document.getElementById('same').checked){
    billname.value = shipname.value;
    billzip.value = shipzip.value;
    billname.setAttribute("required", true);
    billzip.setAttribute("required", true);

  }

  else{
    billname.value = "";
    billzip.value = "";
    billname.removeAttribute("required");
    billzip.removeAttribute("required");

  }
}
