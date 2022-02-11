
let btnAdd = document.querySelector('button');
let input = document.querySelector('input');
let pic__source = [];
let pic__box__2 = new Image(200, 200);
const pic__box = document.getElementById('main__pic');
const url = "https://picsum.photos/";
let user__data = [
    // { name:"", url:""}
];
let obj;
let i = 0;
let new__user = true;
let profile__name = [];
//
//
//Listens for click of the button labeled 'new__image' and assigns a new image to the main__pic
new__image.addEventListener('click',calc__num);
//
//
//Creates random number with no decimal place and asigns it to 'calc__num'
function calc__num() {
    let r = Math.floor(Math.random() * (200 - 250) + 250);
    pic__box.src= url + r;
  }
// 
// 
// 
function store__user__data(){

 let profile = [input.value, pic__box.src];
 
    user__data.push(profile);
    profile__name.push(input.value);

    console.log(user__data);
}
// 
// 
// 
function find__user__data(){

    let obj = user__data.find(user__data => user__data['name'] === input.value);

    console.log(user__data);
    document.getElementById('main__display').innerHTML =  `<div id=${obj['name']} ><h3>${obj['name']}</h3><img src=${obj['url']} ></div>`;

}
// 
// 
// 
function additional__image(){

    user__data[i].push(pic__box.src);
}
// 
// 
// Watches for click on button with value of 'submit' , runs checks for empty input value, checks for
// matching email and then exicutes addemail function above if sucessful
submit.addEventListener( 'click',() => { 
    if (input.value.length == "") {
        console.log("yes mate");
    }
    else{
        for ( let i = 0; i < profile__name.length; i++){

            if (profile__name.indexOf(input.value) === i){
                new__user = false;
                user__data[i].push(pic__box.src);
                console.log(" Value exists!");
            }
        }

        if(new__user == true) {
            store__user__data();
            input.value = '';
            obj = "";
            
        }
        new__user = true;
        
    }    
    } 
)














// user__data.find(user__data => user__data['name'] === input.value)