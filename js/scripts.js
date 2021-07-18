function Order(){
  self.price = 0;
  self.priceDict = {
    "small": 10,
    "medium": 12,
    "large": 15,
    "topping": 2,
    "side": 5,
    "none": 0
    };
}


function orderParser (orderType, orderId)
{
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


let order = new Order;

$(document).ready(function(event) {
  $("#order").submit(function(event) { 
    let pizzaOrder = orderParser("pizza", parseInt($("#pizza-size").val()));
    let toppingOrder = orderParser("topping", parseInt($("#topping").val()));
    let sideOrder = orderParser("side", parseInt($("#side").val()));
    alert ("you ordered a " + pizzaOrder + " " + toppingOrder + " " + sideOrder);

  });
});