// for loop
for (var i = 1; i <= 10; i++) console.log(i)
//  in ra day so tu 1 den 10 dung lai 5
for (var i = 1; i <= 10; i++) {
    console.log(i)
    if(i == 5)
    break
}
// in ra day so tu 1 den 10 bo qua 5
for (var i = 1; i <= 10; i++){
    if(i == 5)
    continue
    console.log(i)
}

// do while: chay code trong "do" it nhat 1 lan moi check dieu kien trong while
let h = 1
do {
    console.log(h)
    h++
}while (h <= 10)

//while: chi chay code trong "while" neu thoa an dieu kien
let j = 1
while (j <= 10){
    console.log(j)
    j++
}

var x = 10
//post-fix operator
var y = x++
//pre-fix operator
var z = ++x
console.log("x = " + x)
console.log("y = " + y)
console.log("z = " + z)