function infiniteLoop(): never{
    while (true){}
}

//Never - function never returns (throws or Infinite

function throwError(message:string):never{
    throw new Error(message);
}