import {input} from './Functions/inputs/input.js'


input();


//======================================================
//  To get data from other html file
//=====================================================

// document.addEventListener('DOMContentLoaded', ()=>{
    
//     fetch('elements/text.html').then(res=> res.text()).then(el=>{
//         console.log(el)
//         let tabs = document.getElementById('tabs')
//      tabs.innerHTML = el
//     })
    
//     })


//======================================================
//  to get data bs target 
//=====================================================

// document.addEventListener('DOMContentLoaded', ()=>{

//     var data = document.querySelectorAll('.popup')
//    data.forEach(el=>{
//     el.addEventListener('click',()=>{
//         popup(el)
//     }) });
// })


// function popup(Div,event){
//     const target = Div.getAttribute('data-bs-target');
//     const targetElement = document.getElementById(`${target}`)
  
//     if(targetElement.classList.contains('popupItem')){
//         targetElement.classList.remove('popupItem')
//     } else{
//         targetElement.classList.add('popupItem')
//     }
// }

