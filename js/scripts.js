function Order(){
  self.price = 0;
  self.priceDict = {
    "small": 10;
    "medium": 12;
    "large": 15;
    "topping": 2;
    "side": 5;
    "none": 0;
    }
}


function orderParser (orderType, orderId)
{
  let value = "none";
  if(orderType === "pizza")
  {
    if(orderId === 1) {
      value = "small";
    } else if(orderId === 2) {
      value = "medium";
    } else if (orderId === 3) {
      value = "large";
    }
  } else if(orderType === "side") {
    if (orderId !== 0) {
      return "side";
    } 
  } else if (orderType === "topping"){
    if (orderId !== 0) {
      return "topping";
    }
  }
}


let order = new Order;

$(document).ready(function(event) {
  $("#order").submit(function(event) {

  });
});