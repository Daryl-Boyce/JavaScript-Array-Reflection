let email = [];
let btnAdd = document.querySelector('button');
let input = document.querySelector('input');
let cat = [];
const pic__box = document.getElementById('main__pic');
const url = "https://picsum.photos/";

// function refresh__image(){
//  let cat =  document.getElementById('main__pic').src="https://picsum.photos/" + calc__num();
//  return cat;
// }
// refresh__image()

function addemail(){
    
    
    let template = email.map(email => `<div><h3>${email}</h3> <img id=${email} src = ""></div>`).join('\n');
    document.getElementById('try').innerHTML = template;

    document.getElementById(email).innerHTML = pic__box;
    // document.getElementById(${email});

    // document.getElementById(email).lastChild.setAttribute('src', main__pic.src);

    

    
}


//Creates random number with no decimal place and asigns it to 'calc__num'
function calc__num() {
    let r = Math.floor(Math.random() * (200 - 250) + 250);
    pic__box.src= url + r;
  }
  calc__num();


submit.addEventListener( 'click',() => { 
    if (input.value.length == "") {
        console.log("yes mate");
    } else if (email.includes(input.value)){
        console.log("yes email mate");
    }
    else {
        email.push(input.value);
        cat.push(main__pic.src);
        addemail();
        input.value = '';
        
        
        
        
        
    }
});

//Listens for click of the button labeled 'new__image' and assigns a new image to the main__pic
new__image.addEventListener('click',calc__num);

console.log(email);


// //Watches for button click and exicutes code to add all data to array and display it.
// btnAdd.addEventListener('click', () =>{
//    if (input.value.length == "") {
//     document.getElementById('main__pic').value = ("https://picsum.photos/200") + calc__num;
//    }
//    else {
//     email.push(input.value);
//     input.value = '';
//     addemail();
    
    
//    }
// });






