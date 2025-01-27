//number(Used for numbers usually in maths )
var numType = 2;
console.log("Data type for int is the number " + numType);
//String(Used for words)
var stringType = ("String").toLocaleString();
console.log("Data type for String is the word " + stringType);
//Boolean(Used for either true or false statements)
var type3 = true;
console.log("Data type for boolean is " + type3);
//any(generic used when unsure what value will be)
var anyType = "HELLOSDHODHOWHSHSAREOYOYYOU";
console.log("Data type for any is " + anyType);
//array(Used for multiple inputs)
var arrayType = [1, 2, 3, 4, 5];
for (var i = 0; i < arrayType.length; i++) {
    console.log("Data type for array " + i + " is the number " + arrayType[i]);
}
/*arrayType.forEach((val)=>{
    console.log("Value is: "+val);
});*/ 
