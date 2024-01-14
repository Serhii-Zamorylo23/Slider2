const container=document.querySelector('.sliderCont')
const back=document.querySelector('#backButton')
const next=document.querySelector('#nextButton')
const img=document.querySelector('#img')
let imgNow =0
const imges=['Image1.jpg','Image2.jpg','Image3.jpg']
next.addEventListener('click',()=>{
    if(imgNow==imges.length-1){
        imgNow=0
    } else{
        imgNow+=1
    };
    img.src=`/img/${imges[imgNow]}`;
});
back.addEventListener('click',()=>{
    if(imgNow==imges.length==0){
        imgNow=imges.length-1
    } else{
        imgNow-=1
    }
    img.src=`/img/${imges[imgNow]}`;
})