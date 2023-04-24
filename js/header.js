window.addEventListener("load",()=>{
  //main.js
const li =document.querySelectorAll("nav.gnb>ul>li");
const div = document.querySelectorAll("nav.gnb>ul>li>div");
const headerWrap = document.querySelector("div.header_wrap");

const srchbtn = document.querySelector("div.btn_srch")
const btnBox = document.querySelector("div.srch_wrap")
const srchCloes = document.querySelector("a.btn_srch_close")


//주메뉴
for(let i=0; i<li.length; i++){
  li[i].addEventListener("mouseover",e=>{
    e.currentTarget.classList.add("on");
    var hh = e.currentTarget.children[1].offsetHeight;
    headerWrap.style.height = `${70+hh}px`;
  })
  li[i].addEventListener("mouseleave",e=>{
    e.currentTarget.classList.remove("on");
    headerWrap.style.height = "70px";
  })

  li[i].children[0].addEventListener("focus",e =>{
    e.currentTarget.parentElement.classList.add("on");
    var hh = e.currentTarget.nextElementSibling.offsetHeight;
    headerWrap.style.height = `${70+hh}px`;
  })
}

// 검색박스
srchbtn.addEventListener("click",e=>{
  e.preventDefault();
  btnBox.classList.add("on")
})
srchCloes.addEventListener("click",e=>{
  e.preventDefault();
  btnBox.classList.remove("on")
})


const topBtn = document.querySelector(".btn_top")
const museumBtn = document.querySelector(".btn_museum")
//탑버튼

topBtn.addEventListener("click",e=>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  })
})

window.addEventListener("scroll" ,e=>{
  let scroll = document.querySelector("html").scrollTop;

  if(scroll <= 0){
    topBtn.classList.remove("on" , "ab")
    museumBtn.classList.remove("on" , "ab")
  }
  else if(scroll>3000){
    topBtn.classList.add("on")
    topBtn.classList.add("ab")

    museumBtn.classList.add("on")
    museumBtn.classList.add("ab")
  }

  else{
    topBtn.classList.remove("ab");
    topBtn.classList.add("on")

    museumBtn.classList.remove("ab");
    museumBtn.classList.add("on")
  }
})


});