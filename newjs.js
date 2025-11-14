// class myname {
//     constructor(name, email) {
//         this.name = name,
//             this.email = email
//     }
// }

// const mynametwo = class {
//     printname(name, email) {
//     }
// }



// function printname(name, age) {
//     this.name = name,
//         this.age = age

//     console.log(this.name, this.age - 1);

//     function output() {
//         if (this.age > 20) {
//             console.log(this.name, this.age + 1)
//         }
//         else {
//             console.log(this.name, this.age)

//         }
//     }

//     return output;

// }
// printname.prototype.adharcard = function () {
//     if (this.age >= 18) {
//         console.log("you are eligable for adhar card")
//     }
//     else {
//         console.log(" sorry...   you are not eligable for adhar card")


//     }
// }



// // const myname = class myname{
// //     constructor(name, email){
// //         this.name=name,
// //         this.email=email
// //     }
// // }

// // console.log(printname)


// const heet = new printname("heet", 52)
// // printname("heet", 22)
// console.log(heet);



// let m = 5;
// for (let i = 1; i <= m; i++) {

//     for (let j = m; j >=i; j--) {
//         process.stdout.write(' ')
//     }

//     for (let k = i*2; k<=i*2; k++) {
//         process.stdout.write('*')
//     }
//     console.log();
// }



let buttons = document.querySelectorAll(".but")
let rstbtn = document.querySelector("#reset")
console.log(reset)
let ifvalue = true





const winPatterns = [
    [0, 3, 6],
    [0, 4, 8],
    [0, 1, 2],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let count = 0
const resetGame = () => {
    for (let buttton of buttons) {
        buttton.disabled = false;
        buttton.innerHTML = "";
    }
    count = 0;

};
buttons.forEach((buttton) => {
    buttton.addEventListener("click", () => {
        if (ifvalue) {

            buttton.innerHTML = "0";
            ifvalue = false;
        }

        else {
            buttton.innerHTML = "x"
            ifvalue = true;
        }
        count++;
        const isWinner = chekWinner();
        console.log(isWinner)
        if (isWinner) {
            for (const buttton of buttons) {
                buttton.disabled = true
            }

        }
        buttton.disabled = true;
        if (count === 9 && !isWinner) {
            console.log("game is draw");
        }

    })

});
const chekWinner = () => {
    for (let pettern of winPatterns) {

        let petone = buttons[pettern[0]].innerHTML
        let pettwo = buttons[pettern[1]].innerHTML
        let petthree = buttons[pettern[2]].innerHTML

        if (petone != "" && pettwo != "" && petthree != "") {

            if (petone === pettwo && pettwo === petthree) {
                console.log(`winner is ${petone}`);
                return true;

            }

        }

    }
}
rstbtn.addEventListener("click", resetGame);

// function chai() {
//     let chaie = "masala";
//     console.log(chaie);
// }

// const coffe = () => {
//     let ccoffe = "sweet"
//     console.log(ccoffe);
// }
// chai()
// coffe()

// for (let index = 0; index < 5; index++) {
//     for (let j = 5; j > index; j--) {
//         process.stdout.write(" ");

//     }
//     for (let k = 0; k <= (index * 2); k++) {
//         if (k === 0 || k === index * 2) {


//             process.stdout.write("*");
//         }
//         else {

//             process.stdout.write(" ");


//         }
//         console.log();



//     }

// }