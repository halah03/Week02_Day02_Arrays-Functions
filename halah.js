/*  1  */


for (let i=0;i<marks.length;i++){
    if(marks[i]%2 != 0){
    marks[i]=marks[i]*2;
    }
} console.log(marks);



let marks= [4,2,5,6,8,9,3];
function odd(marks) {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] % 2 != 0) {
            marks[i]=marks[i]*2;}}
    return marks;}
console.log(odd(marks));


/*  2  */
let marks=[4,3,6,5,8,9,2];
for (let i=0;i<marks.length;i++){
    if(marks[i]%2 == 0){
    marks[i]=marks[i]*2;}


let marks= [4,2,5,6,8,9,3];
function even(marks) {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] % 2 == 0) {
            marks[i]=marks[i]*2;}}
    return marks;}
console.log(even(marks));




/*  3  */
let myColor=['red','blue','green','black'];
for (let i = 0; i < myColor.length; i++) {
    console.log(myColor[i]);
} 


let myColor=['red','blue','green','black'];
function color(myColor){
for (let i = 0; i < myColor.length; i++) {
    console.log("My #",i+1+" choice is " + myColor[i])
}}
color(myColor);



/*  4  */
let arr = [2, 3, 4];
arr.unshift(1)
arr.push(5,6,7)
console.log(arr);


let arr = [2, 3, 4];
function array(arr){
arr.unshift(1)
arr.push(5,6,7)
console.log(arr);}
array(arr);



/*  5  */
let arr1 = [ 1, 2, 3, 7, 5, 4 ];
    let arr2 = [ 0, 7, 4, 3, 2, 1 ];
    
    let x = 7;
    for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++)
        if (arr1[i] && arr2[j] == x)
            console.log("true");
        }  


let arr1 = [ 1, 2, 3, 7, 5, 4 ];
let key = 1;
function exist(key, arr1) {
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] == key) {
            console.log('true');
        }
        else {
            console.log('none');
        }}}
exist(key, arr1)



/*  6  */
let arr1 = [ 1, 2, 3, 7, 5, 4 ];
    let arr2 = [ 0, 7, 4, 3, 2, 1 ]; 
    let x = 7;
    for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++)
        if (arr1[i] + arr2[j] == x)
        console.log(arr1[i] + " " + arr2[j]);}


let arr1 = [ 1, 2, 3, 7, 5, 4 ];
let key = 5;
function pairs(arr1,key){
for(i = 0 ; i<arr1.length ; i++ ){
        for( j=i+1 ; j<arr1.length ; j++ ){
            if( arr1[i] + arr1[j] == key){
                console.log(arr1[i] + " " + arr1[j]);}
            }}}
pairs(arr1,key);









