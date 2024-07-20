// let func=()=>{
//     let func1=()=>{
//         console.log('movie');
//     }
//     // func1()
// }
// // func(func1)
// func()
// // func().func1()
 















// javascript curying
let a=()=>{
    console.log("Block A executed");
    let b=()=>{
        console.log("Block B executed");
        let c=(value)=>{
            console.log("Block C executed",value);
        }
        return c
    }
    return b

}
a()()("movie")