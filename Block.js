const Fruits = () => {


    if (true) {
        var Fruits1 = 'Apple';
        var Fruits2 = 'Banana';
        var Fruits3 = 'Kiwi';
        console.log(Fruits2);
        console.log(Fruits3);
    }

    console.log(Fruits1);




}




Fruits();



let x = 1;

{
    let x = 2
    console.log(x);
}
console.log(x);






const AnoTherFunction = () => {
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);

    }
}
AnoTherFunction()