//1 ham ko co tham so va return
function hello(){
    console.log("Hello")
}
hello()
//2 ham co tham so va ko co return
function sum(a, b){
    console.log("a + b")
}
sum(20, 30)
//3 ham khong co tham so va co return
function years(){
    return 2022
}
console.log(`Current year is`, years());
//4 ham co tham so va return
var output
function sayHi(name, age){
    output = ("Hello " + name + ".You are " + age + " years old.");
    return output;
}
function sayHello(name, age){
    return output;
}
console.log(sayHi("Trung", 20))
console.log(sayHello("Cong", 20))
// var: pham vi tac dung toan bo file code
// let: pham vi tac dung chi trong 1 doan code