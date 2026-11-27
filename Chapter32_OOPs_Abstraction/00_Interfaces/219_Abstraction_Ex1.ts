interface User{
    name: string,
    age: number,
    email: string
}
const user1: User={
    name: "Pramod",
    age: 100,
    email: "abcaa@gmail.com"
}

//this below gives an error

const user2: User={
    name: "Pramod",
    email: "abcaa@gmail.com"
}