// snb1.js

const step1 = document.querySelectorAll(".step1>ul>li>a");
console.log(step1);

for(let i=0; i<step1.length; i++){
  step1[i].addEventListener("click", e=>{
    e.preventDefault();
    for(let k=0; k<step1.length; k++){
      step1[k].style.color = "#000"
      step1[k].style.background = `#fff url(images/ico_inquiry_0${k+1}.png)no-repeat 50% 35%`;
    }
    e.currentTarget.style.background = 
    `#043285 url(images/ico_inquiry_on_0${i+1}.png)no-repeat 50% 35%`;
    e.currentTarget.style.color = "#fff"
  })
}


