const AnotherFunction = () => {
     for (var i  = 0; i < 10; i++) {
         setTimeout(() => {
             console.log(i);
         }, 4000);
     };
};


AnotherFunction();