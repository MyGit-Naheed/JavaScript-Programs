class Student{
    static collegeName ="PlayWRIGHT AI Batch";
    constructor(name,score){
        this.name = name;
        this.score= score;
    }
    static display(){
        console.log(this.name+"are part of the",Student.collegeName + score)
    }
    nsf(){
        console.log(this.name);
    }
}
let amar = new Student("Amar",90);
let akbar=new Student("Akbar",90);
let anthony = new Student("Anthony",80);
let amarindar=new Student("Amarinder",80);
console.log(Student.collegeName);
console.log(amar.name,amar.score);
console.log(akbar.name,akbar.score);
console.log(anthony.name,anthony.score);
console.log(amarindar.name,amarindar.score);
