"use strict";
exports.__esModule = true;
exports.find = void 0;
//01. Import module.
var perf_hooks_1 = require("perf_hooks");
//02. Declare a class.
var FindMissingNumber = /** @class */ (function () {
    //04. Declare a constructor.
    function FindMissingNumber() {
        // Declare variables for colourizing the nodeJS messages for more visibility.
        this.consoleMessageColorInform = "\x1b[32m\x1b[1m";
        this.consoleMessageTimeCost = "\x1b[43m\x1b[1m";
        this.consoleMessageColorError = "\x1b[41m\x1b[1m";
        this.consoleMessageColorEnd = "\x1b[0m";
        // Create array one from 0 to 100.
        this.arrayOne = Array.from(Array(101).keys());
        // Create array two equal to array one.
        this.arrayTwo = Array.from(this.arrayOne);
        // Declare a random number from 1 to 101.
        this.randomNumber = Math.floor(Math.random() * 101);
        // this.randomNumber = 67; // Uncomment this line to provide a specific number you want to remove from the list.
        // Call the preconditioning method.
        this.precondition();
    }
    ;
    //05. Declare a preconditioning method.
    FindMissingNumber.prototype.precondition = function () {
        // Print the expected result value.
        console.log(this.consoleMessageColorInform + "Expected Result: " + this.randomNumber + this.consoleMessageColorEnd);
        // call function to verify that the selected random value contains in the array.
        this.verifyRandomNumberContainsInArray();
        // Removing the specified element from array two.
        this.arrayTwo.splice(this.randomNumber, 1);
    };
    ;
    //06. Check if the randomNumber contains in the array.
    FindMissingNumber.prototype.verifyRandomNumberContainsInArray = function () {
        if (!this.arrayOne.includes(this.randomNumber)) {
            throw new Error(this.consoleMessageColorError + "---ERROR! You need to remove one value from the array. The array contains values between " + this.arrayOne[0] + " and " + this.arrayOne[this.arrayOne.length - 1] + ". You should choose one integer value between those values." + this.consoleMessageColorEnd);
        }
        ;
    };
    ;
    //07.1 Check which is the missing number by using the filter method.
    FindMissingNumber.prototype.missingNumbersByFilterMethod = function () {
        // Declare a start counter variable.
        var startCounter = perf_hooks_1.performance.now();
        // Print the method that we used.
        console.log(this.consoleMessageColorInform + "The following result came by executing method missingNumbersByFilterMethod()." + this.consoleMessageColorEnd);
        /**
          * @description            This function shows a missing number from the sorted array with values from 0 to 100. The solution here is to use the "filter" method in JavaScript.
          * @param arrayOne         Provide the original array. This array should contain all numbers.
          * @param arrayTwo         Provide the array with the missing number.
          * @returns                Return the actual result.
          */
        function findMissingElementByUsingFilterMethod(arrayOne, arrayTwo) {
            // Return the actual result.
            return arrayOne.filter(function (element) { return !arrayTwo.includes(element); });
        }
        ;
        // Print the actual result.
        console.log(this.consoleMessageColorInform + "Actual Result: " + findMissingElementByUsingFilterMethod(this.arrayOne, this.arrayTwo) + this.consoleMessageColorEnd);
        // Declare an end counter variable.
        var endCounter = perf_hooks_1.performance.now();
        // Print the performance value.
        console.log(this.consoleMessageTimeCost + "The execution of the 'missingNumbersByFilterMethod()' method tooks " + (endCounter - startCounter) + " milliseconds." + this.consoleMessageColorEnd);
    };
    ;
    //07.2 Check which is the missing number by using the custom method.
    FindMissingNumber.prototype.missingNumberBySumEdges = function () {
        // Declare a start counter variable.
        var startCounter = perf_hooks_1.performance.now();
        // Print the method that we used.
        console.log(this.consoleMessageColorInform + "The following result came by executing method missingNumberBySumEdges()." + this.consoleMessageColorEnd);
        /**
         * @description             This function shows a missing number from the sorted array with values from 0 to 100. The method here is by summing the two edge values - the sum should be aways 100. For example, the sum of the first and last value is 100 (0+100=100), the sum of the second and the penultimate value is 100 (1+99=100), etc.
         * @param arrayOne          Provide the original array. This array should contain all numbers.
         * @param arrayTwo          Provide the array with the missing number.
         * @return                  Return the actual result.
         */
        function findMissingElementBySumOfEdgeValues(arrayOne, arrayTwo) {
            // Make a loop. The loop will start from the beginning of the first list (the original list). The loop will grow to the middle of the original list.
            for (var i = arrayOne[0]; i <= (arrayOne.length / 2); i++) {
                // Declare a local variable for the left side value of the list (for example, get the first value).
                var leftSideOfArrayOne = arrayTwo[i];
                // Declare a local variable for the right side value of the list (for example, get the last value).
                var rightSideOfArrayOne = arrayTwo[arrayTwo.length - (i + 1)];
                // Declare a local variable to provide the expected sum between left and right values.
                var expectedSumOfTwoEdges = arrayOne[i] + arrayOne[arrayOne.length - (i + 1)];
                // If the sum of the left and right side values are different from the expected sum and we are not in the middle of the array, enter that statement.
                if (leftSideOfArrayOne + rightSideOfArrayOne != expectedSumOfTwoEdges && (arrayTwo.length / 2) != i) {
                    // If the left side value is not equal to the sum of the previous value plus 1, and it is not the first iteration of the loop, enter that statement.
                    if (leftSideOfArrayOne != (arrayTwo[i - 1] + 1) && leftSideOfArrayOne != i) {
                        // Return the actual result.
                        return leftSideOfArrayOne - 1;
                    }
                    // If the right side value is not equal to the sum of the previeus value plus 1, enter that statement.
                    else if (rightSideOfArrayOne != (arrayTwo[arrayTwo.length - (i + 1)]) + 1) {
                        // Return the actual result.
                        return rightSideOfArrayOne + 1;
                    }
                    ;
                }
                // Enter that statement if the loop iteration is equal to the array's middle.
                else if ((arrayTwo.length / 2) == i) {
                    // If the array has one middle value, enter that statement.
                    if (arrayTwo.length % 2 == 1) {
                        // Return the actual result.
                        return arrayTwo[(arrayTwo.length - 1) / 2];
                        // If the array has two middle values enter that statement.
                    }
                    else {
                        // Return the actual result.
                        return (arrayTwo[(arrayTwo.length / 2)] + arrayTwo[(arrayTwo.length / 2 - 1)]) / 2;
                    }
                    ;
                }
                ;
            }
            ;
            return "The execution of the program should never cover this value. If you are reading this text, there are some strange errors. The units do not cover that. Please review the function."; // This value should be never covered.
        }
        ;
        // Print the actual result.
        console.log(this.consoleMessageColorInform + "Actual Result: " + findMissingElementBySumOfEdgeValues(this.arrayOne, this.arrayTwo) + this.consoleMessageColorEnd);
        // Declare an end counter variable.
        var endCounter = perf_hooks_1.performance.now();
        // Print the performance value.
        console.log(this.consoleMessageTimeCost + "The execution of the 'missingNumberBySumEdges()' method tooks " + (endCounter - startCounter) + " milliseconds." + this.consoleMessageColorEnd);
    };
    ;
    return FindMissingNumber;
}());
;
// Export the class.
exports.find = new FindMissingNumber();
// Execute the "missingNumbersByFilterMethod()" function.
exports.find.missingNumbersByFilterMethod();
// Execute the "missingNumberBySumEdges()" function.
exports.find.missingNumberBySumEdges();
