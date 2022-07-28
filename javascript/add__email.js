
let btnAdd = document.querySelector('button');
let input = document.querySelector('input');
let pic__source = [];
let pic__box__2 = new Image(200, 200);
const pic__box = document.getElementById('main__pic');
const url = "https://picsum.photos/";
let user__data = [];
let obj;
let i = 0;
let new__user = true;
let profile__name = [];
let expand__details = document.getElementById ("user__expand");
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
function display__user__data(){
   
    // let wrap__button = document.createElement ("div")

    let display = document.createElement ("div");

    let display_img = document.createElement ("img");

    let element = document.getElementById ("main__display");

    let newContent = document.createElement ("p");

    let newContent__text = document.createTextNode(input.value);

    let top = document.createElement("div");

    let bottom = document.createElement("div");
    element.appendChild(display);
    display.setAttribute('class', "display__box__inner");
    display.setAttribute('id', input.value )

    display.appendChild(top);
    display.appendChild(bottom);
    top.setAttribute( 'class', "display__box__inner__top")
    bottom.setAttribute( 'class', "display__box__inner__bottom")

    top.appendChild(display_img);
    display_img.setAttribute("src", pic__box.src);


    bottom.appendChild(newContent);
    newContent.appendChild(newContent__text);
    

}
// 
// 
// 
function add__user__same() {
    let exsisting__email = document.getElementById (input.value);

    let display_img = document.createElement ("img");

    let top_e = exsisting__email.firstChild;

    top_e.appendChild(display_img);
    display_img.setAttribute("src", pic__box.src);

}
//
function same__image(){
    
} 
//
// 
// Watches for click on button with value of 'submit' , runs checks for empty input value, checks for
// matching email and then exicutes addemail function above if sucessful
submit.addEventListener( 'click',() => { 
    if(input.value.length>0 && input.value.replace(/\s/g, '').length==0) { // string has only spaces } {
        console.log("No Input");
    }
   
    else{
        for ( let i = 0; i < profile__name.length; i++){
         if (profile__name.indexOf(input.value) === i){
                new__user = false;
                add__user__same();
                console.log(" Value exists!");
            }
        }
        if(new__user == true) {
            store__user__data();
            display__user__data();
            input.value = '';
            obj = "";
        }
        new__user = true;
        }       
    } 
)













