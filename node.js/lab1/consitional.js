var grade = 7.5
if(grade >= 5) console.log("Pass")
else console.log("Failed")

let point = 8.5
if (point >= 8.0 && point < 10.0) console.log("Distinction")
else if (point >= 7.0 && point < 8.0) console.log("Merit")
else if (point >= 5.0 && point < 7.0) console.log("Pass")
else if (point >= 0.0 && point < 5.0) console.log("Failed")
else console.log("Invalid choice")

let gender = 'm'
if(gender == 'm' || gender == 'M') console.log("You are male")
else if (gender == 'f' || gender == 'F') console.log("You are female")

var menu = 1
switch (menu) {
    case 1: console.log("You have selected menu 1") 
    break
    case 2: console.log("You have selected menu 2")
    break
    case 3: console.log("You have selected menu 3")
    break
    default: console.log("Invalid menu") 
    break
}