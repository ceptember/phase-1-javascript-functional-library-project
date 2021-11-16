//HELPERS FOR TESTING 
let testObj = {
    A: 1,
    B: 2,
    C: 3,
}

let testArray = [1, 2, 3]

function testCallback(currentAcc, currentElement, array){
    return currentAcc + currentElement; 
}

function logIt(item){
    // Less annoying than alert 
    console.log(`Callback has received ${item}!`);
}


// COLLECTION FUNCTIONS FOR OBJECTS & ARRAYS

function myEach(collection, callback){
    let array = collection; 
    if (!Array.isArray(array)){
        array = Object.values(collection);
    };
   for (let i=0; i<array.length; i++){
       callback(array[i]);
   }
    return collection; 
}

function myMap(collection, callback){
    let array = collection; 
    if (!Array.isArray(array)){
        array = Object.values(collection);
    };
    let newArray = []
    let newIndex = 0; 
    for (let i = 0; i < array.length; i++){
        newArray[newIndex] = callback(array[i]);
        newIndex++; 
    }
    return newArray; 
}

function myReduce(collection, callback, acc){
    let array = collection; 
    let newAcc;
    let startIndex = 0; 
    if (!Array.isArray(array)){
        array = Object.values(collection);
    };

    if (acc || acc === 0){
        newAcc = acc; 
    }    
    else {
        newAcc = array[0]; 
        startIndex = 1; 
    }

    for (let i = startIndex; i < array.length; i++){
        //console.log("test loop " + i)
        newAcc = callback(newAcc, array[i], array);
    }
    return newAcc; 
};

function myFind(collection, predicate){
    let array = collection; 
    if (!Array.isArray(array)){
        array = Object.values(collection);
    };
    for (let i = 0; i < array.length; i++){
        if (predicate(array[i])){
            return array[i]
        }
    }
}

function myFilter(collection, predicate){
    let newArray = []
    let array = collection; 
    if (!Array.isArray(array)){
        array = Object.values(collection);
    };
    for (let i = 0; i < array.length; i++){
        if (predicate(array[i])){
            newArray.push(array[i])
        }
    }
    return newArray; 
}

function mySize(collection){
    let array = collection; 
    if (!Array.isArray(array)){
        array = Object.values(collection);
    }

    let i = 0; 
    let size = 0; 
    if (!array[0]){
        return 0; 
    }
    else {
        size = 1; 
        while (array[i+1]){
            size++; 
            i++;
        }
    }
    return size; 
}

// ARRAY FUNCTIONS

function myFirst(array, n){
    let num; 
    if (!n){
        return array[0];
    }
    else {
        let newArray = [];
        let newIndex = 0; 
        for (let i = 0; i < n; i++){
            newArray[newIndex] = array[i];
            newIndex++;
        }
        return newArray; 
    }
}

function myLast(array, n){
    let myLength = mySize(array); 
    if (!n){
        return array[myLength - 1];
    }
    else {
        let newArray = []; 
        let newIndex = 0; 
        for (let i = (myLength - n ); i < myLength; i++ ){
            newArray[newIndex] = array[i];
            newIndex++;
        }
        return newArray; 
    }
} 

// OBJECT FUNCTIONS 

function myKeys(object){
    let keys = []; 
    let i = 0; 
    for (let x in object){
        keys[i] = x; 
        i++; 
    }
    return keys; 
};

function myValues(object) {
    let values = []; 
    let i = 0; 
    for (let x in object){
        values[i] = object[x];
        i++; 
    }
    return values; 
};


//MY TESTS 

//myEach(testObj, logIt);
//console.log(myMap({one: 10, two: 20, three: 30}, function(num){ return num * 3}));
//console.log(myReduce([1,2,3,4], testCallback, 10 ));
//console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; }))
//console.log(myFilter({one: 1, three: 3, five: 5, two: 2}, function(num){ return num % 2 == 0; }))
//console.log(mySize([1,2,3]))
//console.log(myFirst([1,2,3,4,5],3));
//console.log(myLast([10,20,30, 40, 50],2));
//console.log(myKeys({one: 1, two: 2, three: 3}))
//console.log(myValues({one: 1, two: 2, three: 3}))
