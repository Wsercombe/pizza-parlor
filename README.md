Describe: parseItem(orderType, 1)
Test: "It should return a 0 with any orderType and the orderId is 1 "
ExpectparseItem(orderType, 1);

Describe: parseItem("Pizza", 2);
Test: "It should return "small" if the orderType is pizza and the orderId is 2"
Expect(processNumber("pizza", 2).toEqual("small");

Describe: parseItem("pizza", 3);
Test: "It should return "medium" if the orderType is "pizza" and the orderId is 3"
Expect(processNumber("pizza", 3).toEqual("medium");

Describe: parseItem("pizza", 4);
Test: "It should return "large" if the orderType is "pizza" and the orderId is 3"
Expect(processNumber("pizza", 3).toEqual("medium");

Describe: parseItem("topping", 2);
Test: "It should return "topping" if the orderType is "topping" and the orderId is not 1"
Expect(processNumber("topping", 2).toEqual("topping");

Describe: parseItem("side", 2);
Test: "It should return "side" if the orderType is "side" and the orderId is not 1"
Expect(processNumber("side", 2).toEqual("side");

# _Pizza-Parlor_

#### _This application takes a user's order and outputs the cost_

#### By _**William Sercombe**_

## Technologies Used

* _HTML_
* _CSS_
* _GIT_
* _Java Script_
* _Visual Studio Text Editor_

## Description

* _The user inputs a pizza size, topping and size. Depending on the costs for those items it outputs the sum cost_

## Setup/Installation Requirements

* _Navigate to the gitub page to find the application_
* _Clone the application from the github address to their local computer_
* _Open the html application with a supported web browser (Chrome, FireFox, Edge, among those supported)_


## Known Bugs

* _N/A_

## License

_N/A_

## Contact Information

_William Sercombe | wsercombe@gmail.com | 503-545-9535_