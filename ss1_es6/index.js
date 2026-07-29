console.log("hello");
// các cách khai ba 1 funtion trong js?
// hàm tính tổng => có return
// c1: declare function
// const sum2 = (a,b) => a+b;
// console.log(sum(10,20)); // ok
// console.log(sum2(40,50)); // không ok
//
function sum(a,b=10){
    return a+b;
}

console.log(sum(20))
// // C2: express function
//
// const sum1 = function (a,b){
//     return a+b;
// }
// // Arrow function (không có cơ chế hoisting) => sử dụng trước khai báo sau.
//
// const sum3 = a => a+10;
// // callback function: truyền một hàm 1 vào tham số cho hàm2 khác khác => hàm1 gọi là callBack


let array = [10,5,25,46,67,77];

// function compare1 (a,b){
//     return b-a;
// }
// array.sort( compare1);
// console.log(array);

// foreach();
// duyệt mảng trong js => sử dụng vòng lặp for (for in, for-of), while, do-while

// for (let i = 0; i <array.length ; i++) {
//     // console.log(i + ": " + array[i])
//     console.log(`${i} : ${array[i]}`)
// }
// gọn hơn => foreach();
// array.forEach( (e,i)=>{
//     console.log(`${i} :${e}`);
// })

// map => tạo 1 mảng mới dựa trên mảng cũ
// const newArray = array.map(e=>e*10)
// console.log(newArray);

// const resultArray = array.filter(e =>e%2===0);
// console.log(resultArray);

//Destructuring, spread operator, rest param.

// let e0 = array[0];
// let e1 = array[1];
// let[e0,e1,...array1] = array; // destructuring, rest : gom cac pt # spread : trải ra
// console.log(e0,e1);
// console.log(array1);
// toạ mảng array 3 chưa tất cả các pt mảng arry có thêm  2 pt 100 và 200 ở đầu mảng
// let array3 = [100,200,...array]; // spread operator
// console.log(array3);

// const student = {
//     id: 1,
//     name:"chánh",
//     address: "DN"
// }
//
// // let name = student.name;
// // let id = student.id;
//
// let {id,name} = student;
// console.log(id,name);
// const  newStudent = {
//     ...student,
//     score: 10,
//     className: "C07"
// }
// console.log(newStudent)