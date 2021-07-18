function Order(){
  self.price = 0;
  self.priceDict = {
    "small": 10,
    "medium": 13,
    "large": 15,
    "topping": 2,
    "side": 5,
    "none": 0
    };
}


Order.prototype.addItem = function(orderType, orderId) {
  let price = self.priceDict[parseItem(orderType, orderId)];
  self.price += price;
};

Order.prototype.returnPrice = function () {
  return self.price;
}


function parseItem(orderType, orderId) {
  let value = "none";
  if(orderType === "pizza")
  {
    if(orderId === 2) {
      value = "small";
    } else if(orderId === 3) {
      value = "medium";
    } else if (orderId === 4) {
      value = "large";
    }
  } else if(orderType === "side") {
    if (orderId !== 1) {
      return "side";
    } 
  } else if (orderType === "topping"){
    if (orderId !== 1) {
      return "topping";
    }
  }
  return value;
}





$(document).ready(function(event) {
  $("#order").submit(function(event) { 
    let order = new Order;
    order.addItem("pizza", parseInt($("#pizza-size").val()));
    order.addItem("topping", parseInt($("#topping").val()));
    order.addItem("side", parseInt($("#side").val()));
    $("#price").text(order.returnPrice);

    event.preventDefault();

  });
});