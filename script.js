/*let counter = 0
let interval = setInterval(function(){
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)*/
/*
function greet() {
    console.log('Privet - ')
}

const arrow = (name, age) => {
    console.log('Privet - ', name, age)
}

const arrow2 = name => console.log('Privet -', name)

arrow2('Vladelin')

const pow2 = num => num ** 2

console.log(pow2(5))

const sum = (a = 40, b =a * 2) => a + b

console.log(sum(41, 2))
console.log(sum())

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}
const res = sumAll(1, 2, 3, 4, 5)
console.log(res)*/



$(document).ready(function(){
    let txtarea = $("#txtarea"),
        txtarea1 = $("#txtarea1"),
        escapeButton = $("#escapeButton"),
        unescapeButton = $("#unescapeButton"),
        clas1 = $(".second"),
        one = $(".one"),
        two = $(".two");
        

   clas1.hide();
   one.hide();
   
   two.click(function(){
       one.hide();
   });

   
   escapeButton.click(function(){
       if(txtarea.val().trim() === ""){
            clas1.hide();
            one.show();
       }else{
            clas1.show();
            one.hide();
            txtarea1.val(JSON.stringify(txtarea.val()).replaceAll('"', ''));
       }
    });

       unescapeButton.click(function(){
            if(txtarea1.val().trim() === ""){
            clas1.hide();
            one.show();
            } else {
                clas1.show();
            one.hide();
            txtarea1.val(JSON.parse('"' + txtarea.val() + '"'));
            }
       });
   });

