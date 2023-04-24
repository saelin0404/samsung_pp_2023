window.addEventListener("load",()=>{//버튼
  const btnNext = document.querySelector("a.btn_next");
  const btnPrev = document.querySelector("a.btn_prev");
  const slide = document.querySelectorAll("li.slide");
  const slideRoll = document.querySelectorAll(".slide_roll li");
  const btnPlay = document.querySelector(".slide_roll>a.btn_play");
  
  // 오토배너 5초마다
  let bnnNum = 0;
  function activation(index,list){
    for(let el of list){
    el.classList.remove("on","active");
    }
    list[index].classList.add("on","active");
  }
  
  lastNum = document.querySelectorAll(".slide_wrap > li").length-1;
  btnNext.addEventListener("click",e=>{
    e.preventDefault();
    bnnNum++;
    if(bnnNum>lastNum)bnnNum=0;
    activation(bnnNum,slide);
    activation(bnnNum,slideRoll);
  })
  btnPrev.addEventListener("click",e=>{
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0)bnnNum=lastNum;
    activation(bnnNum,slide);
    activation(bnnNum,slideRoll);
  })
  
  function autoBanner(){
    bnnNum++;
    if(bnnNum>lastNum)bnnNum=0;
    activation(bnnNum,slide);
    activation(bnnNum,slideRoll);
    autoBnn = setTimeout(autoBanner,5000);
  }
  
  let autoBnn = setTimeout(autoBanner,5000);
  
  let flag = true;
  
  btnPlay.addEventListener("click",e=>{
    e.preventDefault();
    if(flag){//멈춤
      btnPlay.classList.add("on");
      clearTimeout(autoBnn);
      flag=false;
    }
    else{//재생
      btnPlay.classList.remove("on");
      autoBnn = setTimeout(autoBanner,5000);
      flag = true;
    }
  })
  
  for(let i=0; i<slideRoll.length; i++){
    slideRoll[i].addEventListener("click",e=>{
      e.preventDefault();
      activation(i,slide);
      activation(i,slideRoll);
    })
  }
  
  })