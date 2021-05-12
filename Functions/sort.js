//Selection sort

var array = [3, 1, 65, 7, 9, 2, 103];

function sortAssc(arr) {
    
    for (var i = 0; i < arr.length; i++) {
        var min = arr[i];
        var indexOfMin = i;
        var temp = array[i];
        var element = arr[i];
        for (var j = i; j < arr.length; j++) {
            var element = arr[j];
            if(element < min) {
                min = element;
                indexOfMin = j;
            }
        }
        arr[i] = min;
        arr[indexOfMin] = temp;
        console.log(i + ': ' + arr);
    }
       
    return arr;
}

console.log(sortAssc(array));


//Bubble sort

var array = [3, 1, 65, 7, 9, 2, 103];

function sortAssc(arr) {
    
    for (var j = i; j < arr.length; j++) {
        for (var i = 0; i < arr.length; i++) {
            var element = arr[i];
            var next = arr[i + 1];
    
            if(element > next) {
                arr[i] = next;
                arr[i + 1] = element;
            }
        }
    }
    return arr;
}



console.log(sortAssc(array));
    