let string="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=== "="){
        string=eval(string);
        document.querySelector('.h2').innerHTML= string
    }
    else if(e.target.innerHTML=== "AC"){
        string="";
        document.querySelector('.h1').innerHTML= 0;
        document.querySelector('.h2').innerHTML= string;
    }
    else{
    string=string+e.target.innerHTML;
    document.querySelector('.h1').innerHTML= string;}
})
});