/* Array */
// .at() this will take an index from an array and the return it to us.
var atTest = ["1" , "2" , "3" , "4" , "5"];
var x = atTest.at(2);
console.log(x);

// .concat() this will coalesce 2 array with eachother
var concatTest1 = ["1" , "2" , "3" , "4" , "5"];
var concatTest2 = ["a" , "b" , "c" , "d" , "e"];
var y = concatTest1.concat(concatTest2);
console.log(y);

// .copywithin(x,y) this means, copy index number y and put it in number x
// it should be copyWithin not copywithin (the w should be in upper case)
var copyWithinTest = ["cwt0" , "cwt1" , "cwt2" , "cwt3" , "cwt4"];
var z = copyWithinTest.copyWithin(2,0);
console.log(z);

// .fill() this will replace a given data with all of the indexes in our array
var Test = ["1" , "2" , "2" , "4" , "5"];
Test.fill("hi");
console.log(Test);

// .filter() this will take our first array and do a defined filter on it and after that it will return the new array to us.
var filterTest = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10];
function evenCheck(filterTest){
    if(filterTest % 2 == 0)
        return true
    else
        return false; 
}
var filterTestEven = filterTest.filter(evenCheck);
console.log(filterTestEven);

// .find() this will return us the first index that satisfy given function
var findTest = [133 , 257 , 355 , 47 , 59 , 611 , 71 , 87 , 967 ,100]
function findEvenTest(findTest){
    return findTest % 2 == 0
}
var findTestEven = findTest.filter(findEvenTest);
console.log(findTestEven);

// .flat() this will reduce the dimension of our array. for example it can turn a 4D array to 2D
var flatTest = [1 , 2 , [3 , [4 , 5 , [6 , 7]]]];
var flatTestFinal = flatTest.flat(2);
console.log(flatTestFinal);

// .from() this can make array from a given string
// *no matter what is the character, it will separate them 1 by 1
var fromTest = Array.from("12345(2+2)");
console.log(fromTest);

// .includes() this will check if our array includes a specific index or not
var includesTest = ["apple" , "1" , "a"];
var includesTestCheck = includesTest.includes("a");
var includesTestCheck2 = includesTest.includes("A");
console.log(includesTestCheck);
console.log(includesTestCheck2);

// .reverse this will change the order of our array
var reverseTest = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10];
var reverseTestFinal = reverseTest.reverse();
console.log(reverseTestFinal);


/* string */
// .charAt() this will return us the x number character in a string
var charAtTest = "0123456789";
var charAtTestResult = charAtTest.charAt(3);
console.log(charAtTestResult);

// .codePointAt() this will give us the unicode of the character
var codePointAtTest = "0123456789";
var codePointAtTestResult = codePointAtTest.codePointAt(3);
console.log(codePointAtTestResult);

// .concat()
var concatTestString = "";
var concatTestStringResult = concatTestString.concat("hello", "guys")
console.log(concatTestStringResult);

// .endsWith() this will check if our string ends with a specific character or not
var endsWithTest = "This is an example sentence for testing endsWith";
var endsWithTestResult = endsWithTest.endsWith("endsWith");
var endsWithTestResult2 = endsWithTest.endsWith("endswith");
console.log(endsWithTestResult);
console.log(endsWithTestResult2);

// .fromCharCode() this will assemble a string by making use of unicodes
var fromCharCodeTest = String.fromCharCode(48 , 49 , 50 , 51);
console.log("This is the first 4 number in java " + fromCharCodeTest);

// .includes() this will check if our stirng includes a specific index or not
var includesTestString = "This is a example for testing .includes() in strings";
var includesTestStringResult = includesTestString.includes("is");
console.log(includesTestStringResult);

// .indexOf() this will tell us key number of the first time of a specific given substring
// for example in this string "test string", if we want the .indexOf() of "st" it will be the key of "s", which is 2
var indexOfTest = "example sentence";
var indexOfTestResult = indexOfTest.indexOf("ce");
console.log(indexOfTestResult);

// .lastIndexOf() this is completely likes .indexOf() but it will returns the last occurance of the given substring
var lastIndexOfTest = "example example";
var lastIndexOfTestResult = lastIndexOfTest.lastIndexOf("l");
console.log(lastIndexOfTestResult);

// .padEnd() this will add the given character to the end of the string, and the number shows untill which key it should continue
// it always continue until the x-1 key that we give. For example if we say continue until 8 character it will ccontinue until 8-1
var padEndTest = "example ";
var padEndTestResult = padEndTest.padEnd(28,"hello");
console.log(padEndTestResult);

// .padStart() 
var padStartTest = " example";
var padStartTestResult = padStartTest.padStart(28,"hello");
console.log(padStartTestResult);

/* console */
// .assert() for this method, we need 2 argument. First on is a defined condition and the second one is an optional phrase that will pop-up in case if the condition didnt satisfy.
var assertTest = 5;
console.assert(assertTest > 10, "The value should be greater than 10");

// .count() this method will count for us how many times do the console.count() have been used.
console.count();
console.count();

// .error()
console.error("not");

// .group()
console.log("This is a commonplace console.log");
console.group("This is a console.group")

// .info()
var infoTest = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10];
console.info(infoTest);

// .table() it shows us data in table.
// *IF we want only a specific column, we can define it in a separate []
var tableTest1 = {
    name: "a",
    age: "20",
    color: "red"
};
var tableTest2 = {
    name: "b",
    age: "21",
    color: "black"
};
var tableTest3 = {
    name: "c",
    age: "22",
    color: "green"
};
console.table([tableTest1 , tableTest2 , tableTest3] , ["age"]);
// .warn()
console.warn("this is a warning test")

// .clear()
// console.clear();