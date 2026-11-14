// PROBLEM STATMENT
// Score - 0 to 100;
// Scroe > 90 - Grade A
// Score between 80 to 90 - Grade B
// Score between 70 to 80 - Grade C
// Score between 60 to 70 - Grade D
// Score between 50 to 60 - Grade E
// Score < 50 -- Grade F ( FAIL)

let score = 101;
if (score>100 || score<0){
    console.log("Invalid Score Input");
} else{
    if(score > 90){
        console.log(" Grade A - Excellent");
    }
    else if(score > 80 && score <=90){
        console.log("Grade B - Very Good");
    }
    else if(score > 70 && score <=80){
        console.log("Grade C - Good")
    }
    else if(score > 60 && score <=70){
        console.log("Grade D - Average")
    }
    else if(score > 50 && score <=60){
        console.log("Grade E - Need Improvement")
    }
    else {
        console.log("Grade F - Failed")
    }
}