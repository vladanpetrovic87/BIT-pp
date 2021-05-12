/* 1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4] */

(
    function replaces() {
        var x = [4, 5, 11, 9];
        var y = [];
        for (var i = 0; i < x.length; i++) {
            
        }
    } 
)();


function multiply(a, b) {

    var mResult = a * b;
    
    return function (a, b) {
    
    return mResult + a + b;
    
    }
    
    }
    
    var output = multiply(3, 4);
    
    console.log(output);


    function multiply(a, b) {

        var mResult = a * b;
        
        return function (a, b) {
        
        return mResult + a + b;
        
        }
        
        }
        
        var output = multiply(3, 4)(5, 5);
        
        console.log(output);


        print("This might work or not?");

        var print = (function () {

        return console.log;

        })();


        var print = (function () {

            return console.log;
            
            })();
            
            print("This might work or not?");


            var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]

            var output = transformArray(input, function (param) {
            
            return param + "";
            
            });
            
            console.log(output);
            
            function transformArray(array, action) {
            
            var result = [];
            
            for (var index = 0; index < array.length; index++) {
            
            var element = array[index];
            
            result[index] = action(element);
            
            }
            
            return result;
            
            }


            var PI = 3.1;

function circleSurface(radius) {

var result = radius * radius * PI;

var PI = 3.14159;

return result;

}

var output = circleSurface(5);

console.log(output);


function circleCalc(radius, calculation) {

    var result = calculation(radius);
    
    return result;
    
    }
    
    var output = circleCalc(7, function (r) {
    
    var PI = 3.14159;
    
    return 2 * r * PI;
    
    });
    
    console.log(output);


var input = ["one", "1e3", "10e-3", "32", "a15", "12,1"]

function transformArray(array, action) {

var result = [];

for (var index = 0; index < array.length; index++) {

var element = array[index];

result[index] = action(element);

}

return result;

}

var output = transformArray(input, parseFloat);

console.log(output);

output = transformArray(input, parseInt);

console.log(output);


var cubeVolume = function (a) {

    return a * a * a;
    
    }
    
    function cubeCalculation(a, calc) {
    
    return calc(a);
    
    }
    
    output = cubeCalculation(10, cubeVolume(6))
    
    console.log(output);



    function cubeCalculation(a, calc) {

        return calc(a);
        
        }
        
        var output = cubeCalculation(10, function (a) {
        
        6 * a * a;
        
        })
        
        console.log(output);


        function cubeCalculation(a, calc) {

            return calc(a);
            
            }
            
            var output = cubeCalculation(10, function (a) {
            
            return 6 * a * a;
            
            })
            
            console.log(output);



            function saySomething(msg1) {

                return function (msg2) {
                
                var output = msg1 + " " + msg2;
                
                return function () {
                
                output += "!"
                
                console.log(output);
                
                }
                
                }
                
                }
                
                saySomething("Hi")("there");


                var myArr = [];

var hi = function () {

return "Hi";

};

myArr[0] = hi;

myArr[0]();

var firstElement = myArr[0];

typeof firstElement;

firstElement();