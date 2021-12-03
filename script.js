// 1. Define base and height for all triangles
// 2. Calculate area
// 3. Calculate which one is bigger
//4. Print area for each triangle and the result of which one is bigger

//Case one
console.log("Case one")
//define base and height
let triangleOneBase = 10;
let triangleOneHeight = 13;

let triangleTwoBase = 16.5;
let triangleTwoHeight = 20.3;

//calculate area
let triangleOneArea = (triangleOneBase * triangleOneHeight) / 2;
let triangleTwoArea = (triangleTwoBase * triangleTwoHeight) / 2;

//log area
console.log(`The area of triangle one is ${triangleOneArea} cm3`)
console.log(`The area of triangle two is ${triangleTwoArea} cm3`)

// compare area
if (triangleOneArea > triangleTwoArea) {
    console.log("Triangle one has the biggest area.");
} else if (triangleOneArea < triangleTwoArea) {
    console.log("Triangle two has the biggest area.");
}

// Case two
console.log("Case two")

//define base and height
let triangleThreeBase = 16.5;
let triangleThreeHeight = 20.3;

let triangleFourBase = 20.3;
let triangleFourHeight = 16.5;

//calculate area
let triangleThreeArea = (triangleThreeBase * triangleThreeHeight) / 2;
let triangleFourArea = (triangleFourBase * triangleFourHeight) / 2;

//log area 
console.log(`The area of triangle three is ${triangleThreeArea} cm3`);
console.log(`The area of triangle four is ${triangleFourArea} cm3`);

//compare area
if (triangleThreeArea > triangleFourArea) {
    console.log("Triangle three has the biggest area.");
}
else if (triangleThreeArea < triangleFourArea) {
    console.log("Triangle four has the biggest area");
}
// why do I get an error if I put "else" on the last alternative instead of "else if?"
else if (triangleThreeArea = triangleFourArea) {
    console.log("Triangle three and triangle four have the same area.")
}

// Case three
console.log("Case three")
//define base and height
let triangleFiveBase = 7.8;
let triangleFiveHeight = 5.6;

let triangleSixBase = 9.3;
let triangleSixHeight = 12.4;
//calculate area
let triangleFiveArea = (triangleFiveBase * triangleFiveHeight) / 2;
let triangleSixArea = (triangleSixBase * triangleSixHeight) / 2;
//log area
console.log(`The area of triangle five is ${triangleFiveArea} cm3`);
console.log(`The area of triagle six is ${triangleSixArea} cm3`)
//compare area
if (triangleFiveArea > triangleSixArea) {
    console.log("Triangle five has the biggest area");
}
else if (triangleFiveArea < triangleSixArea) {
    console.log("Triangle six has the biggest area");
}

// JS needs the parentheses because of multiplication has the same value of operator precedence as division and we want the 
// multiplication to be handled first to get the area.
