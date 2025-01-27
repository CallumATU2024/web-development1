
//This does both kinds of counts 
function countBothChar(value: string, checker?: boolean):number
{


    let num:number;

    if (checker)
    {
        //Checks number of chars but counts all chars in it
        return value.length;
    }
    else 
    {
        //checks number of chars but does not count starting spaces
        num=value.trim().length;
    }

    return num
}

//No input for bool just counts it as the tre state
console.log(countBothChar("  TEST1  "));

//Count as true means bool is true making it do the normal non trimmed check
console.log(countBothChar("  TEST2  ", true))

//Input false means the bool is false making it trim
console.log(countBothChar("  TEST3  ", false))


