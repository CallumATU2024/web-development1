

    
    //number(Used for numbers usually in maths )
    let numType: number = 2;
    console.log("Data type for int is the number " + numType);

    //String(Used for words)
    let stringType: string = ("String").toLocaleString();
    console.log("Data type for String is the word " + stringType);

    //Boolean(Used for either true or false statements)
    let boolType: boolean= true;
    console.log("Data type for boolean is "+boolType);

    //any(generic used when unsure what value will be)
    let anyType: any ="HELLOSDHODHOWHSHSAREOYOYYOU"
    console.log("Data type for any is "+anyType);

    //array(Used for multiple inputs)
    let arrayType:number[]= [1,2,3,4,5];
    for(let i=0; i<arrayType.length; i++)
    {
        console.log("Data type for array "+ i+ " is the number "+ arrayType[i]);
    }

    /*arrayType.forEach((val)=>{
        console.log("Value is: "+val);
    });*/