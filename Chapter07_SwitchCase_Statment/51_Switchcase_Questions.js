// what happens if Break statement is not applied

let day =4;
switch(day)
{
    case 1:
        console.log("Today is Monday");
        // no break
    case 2:
        console.log("Today is Tuesday");
        let a = 10;
        let b = 20;
        console.log(a+b);
        // no break
    case 3:
        console.log("Today is Wednesday");
        // no break;
    case 4:
        console.log("Today is Thursday");
        // no break;
    case 5:
        console.log("Today is Friday");
        let a1 = 10;
        let b1 = 30;
        console.log(a1+b1);
        // no break;
    case 6:
        console.log("Today is Saturday");
       // no break;
    default:
        console.log("Dont Know which day?");

}