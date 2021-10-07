const firstBtn = document.querySelector('.first-btn');
const secondBtn = document.querySelector('.second-btn');
const thirdBtn = document.querySelector('.third-btn');

let ftrHdl = document.querySelector('.right-headline');
let ftrTxt = document.querySelector('.right-txt');
let ftrImg = document.querySelector('.content-img');

const questions = document.querySelectorAll(".question-content");

const email = document.querySelector('.email');
const emailBtn = document.querySelector('.form-btn');
const errMsg = document.querySelector('.err-msg');
const errImg = document.querySelector('.err-img');

const hamubrgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const modalList = document.querySelector('.modal-list');

firstBtn.addEventListener('click', function(e){
    e.preventDefault();
    ftrHdl.textContent = "Bookmark in one click"
    ftrTxt.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    ftrImg.src="./images/illustration-features-tab-1.svg" ;
    firstBtn.style.borderBottom = "4px solid #FA5959";
    secondBtn.style.border = "none"
    thirdBtn.style.border = "none"
});
secondBtn.addEventListener('click', function(e){
    e.preventDefault();
    ftrHdl.textContent = "Intelligent search"
    ftrTxt.textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    ftrImg.src="./images/illustration-features-tab-2.svg" ;
    secondBtn.style.borderBottom = "4px solid #FA5959";
    firstBtn.style.border = "none"
    thirdBtn.style.border = "none"
});
thirdBtn.addEventListener('click', function(e){
    e.preventDefault();
    ftrHdl.textContent = "Share your bookmarks"
    ftrTxt.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    ftrImg.src="./images/illustration-features-tab-3.svg" ;
    secondBtn.style.border = "none";
    firstBtn.style.border = "none"
    thirdBtn.style.borderBottom = "4px solid #FA5959";
});

questions.forEach((question) => {
    question.addEventListener("click", function() {

    if(question.parentNode.classList.contains("active")){
        question.parentNode.classList.toggle("active")
    }
    else{
        questions.forEach(question => question.parentNode.classList.remove("active"))
        question.parentNode.classList.add("active")
        }
    })
})

emailBtn.addEventListener('click',function(){
    const re = /\S+@\S+\.\S+/;
    if(re.test(email.value)){
        return      
    }else{
        errImg.style.display = "block";
        errMsg.style.display = "block";
        email.style.border = '1px solid #FA5959';
        email.value = 'email@example/com';
    }  
})

hamubrgerBtn.addEventListener('click', function(){
    modal.style.display = "block"
})

closeBtn.addEventListener('click', function(){
    modal.style.display = "none"
})

modalList.addEventListener('click' ,function(){
    modal.style.display = "none";
})