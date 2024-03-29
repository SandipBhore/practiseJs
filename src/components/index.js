// memoization
// +++++++++++++ //

/*const a=()=>{
    const cached={};
    
    return function(num){
        if(num in cached) {
            console.log('cached', cached[num])

        }else{
            console.log('not cached')
            cached[num]= num + 256;
            console.log(cached[num])
        }
        console.log(cached)
    }
}

var ab = a()*/

// currying
// +++++++++++++ //

/*const one=(num)=>{
    if(num == 0){
        return 0;
    }else{
        return num + one(num - 1);
    }
}
console.log(one(20))*/

// hoisting
// +++++++++++++ //

/*var x=10;

function getName(){
    console.log('hello')
}
console.log(x)
getName()*/

// output-->   10
//             hello

// ++++++++++ //

/*const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}*/

// output--> Uncaught SyntaxError: Identifier 'x' has already been declared

// ++++++++++ //

// if return change a bit the invocation of function changes
// function abc(){
//     let a=10;
//     function b(){
//         console.log(a)
//     }
//     return b(); // calling the function and returning the result
// }
// abc()

// output--> 10

// function abc(){
//     let a=10;
//     function b(){
//         console.log(a)
//     }
//     return b;
// }
// abc()

// output--> ƒ b(){
//                 console.log(a)
//             }

// function abc(){
//     let a=10;
//     function b(){
//         console.log(a)
//     }
//     return b; // returning just function b
// }
// abc()()

// output-->10

// function abc(params0) {
//     let a=10;
//     function ab(params) {
//         let b=11;
//         function c(params) {
//             console.log(a,b)
//         }
//         return c;
//     }
//     return ab;
// }

// abc()

// output--> ab(params) {
//             let b=11;
//             function c(params) {
//                 console.log(a,b)
//             }
//             return c;
//         }

// function abc(params0) {
//     let a=10;
//     function ab(params) {
//         let b=11;
//         function c(params) {
//             console.log(a,b)
//         }
//         return c;
//     }
//     return ab;
// }

// abc()()()

// output-->10 11

function abc(params0) {
    let a=10;
    function ab(params) {
        let b=11;
        function c(params) {
            console.log(a,b)
        }
        return c();
    }
    return ab();
}

abc()

// output--> 10 11