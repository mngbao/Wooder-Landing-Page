//1
let a = 4;
let b = 12;
console.log(a+b);
console.log(b/a);
console.log(b%a);

//2
let lastname = "Mai";
let midname = "Ngoc Gia";
let firstname = "Bao";
console.log(lastname+' '+midname+' '+firstname);

//3
let str1 = "happy new year";
console.log(str1.length);
console.log(str1.indexOf('y'));
console.log(str1.lastIndexOf('y'));
console.log(str1.replace('happy','i like'));


//4
let num = 2;
if (num % 2 == 1)
    console.log(false);
else console.log(true);

//5
let total = 0;
for (i = 0; i < 10; i++)
    total += i;
console.log(total);

// 6
for (i = 0; i <= 20; i++)
    if (i % 2 == 0)
        console.log("so chan "+i);

//7


//8 
let arr = [1,2,3,4,5];
console.log(arr.splice(0,3));

//9
// function printTime(){    
//     let date = new Date();
//     let hour = date.getHours()
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     document.body.innerHTML = (`${hour}:${min}:${sec}`);
// }
//     setInterval(() => {
//         printTime();
//     },1000);

//10

let theA = document.querySelector('#cfd');
let href = theA.getAttribute('href');
console.log(href);
theA.addEventListener('click',function(e){
    e.preventDefault();
});

//12

let check =  document.querySelector('#check');
let value = check.getAttribute("value");
check.addEventListener("click",function(){
    console.log(value);
});
//13
let checkbtn =  document.querySelector('#checkbtn');
checkbtn.addEventListener("click",function(){
    let input = document.querySelectorAll("input[type=checkbox]");
    input.forEach(function(value,key){
        value.checked = true;
    })
});











