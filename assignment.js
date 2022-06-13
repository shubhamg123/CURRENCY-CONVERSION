
function handleclick()
{
var label=document.querySelector('label')
label.style.fontSize=10;
label.style.color='blue';
let x=document.querySelector('.input')
let y=document.querySelector('#inp')
let z= document.querySelector('label')
console.log(x.style);
  x.style.borderBottom="2px solid rgba(95, 15, 245, 0.932)"
  x.style.backgroundColor='rgb(98, 115, 122)'
  y.style.backgroundColor='rgb(98, 115, 122)'
  z.style.backgroundColor='rgb(98, 115, 122)'
  function myMove() {
    let id = null;
    let pos = 29;
    clearInterval(id);
    id = setInterval(frame, 250);
    function frame() {
      if (pos == 18) {
        clearInterval(id);
      } else {
        pos--;
        elem.style.top = pos + '%';
      }
    }
}
  console.log(x.style.backgroundColor)
}
function handleout()
{   console.log(event.target.value)
    if(event.target.value==='')
    {var label=document.querySelector('label')
    label.style.fontSize=15;
    console.log(label);
    let x=document.querySelector('.input')
    let y=document.querySelector('#inp')
   let z= document.querySelector('label')
   console.log(x.style);
      x.style.borderBottom="1.2px solid rgba(245, 88, 15, 0.932)"
      x.style.backgroundColor='rgb(225, 228, 231)'
      y.style.backgroundColor='rgb(225, 228, 231)'
      z.style.backgroundColor='rgb(225, 228, 231)'
      function myMove() {
        let id = null;
        let pos = 18;
        clearInterval(id);
        id = setInterval(frame, 250);
        function frame() {
          if (pos == 29) {
            clearInterval(id);
          } else {
            pos++;
            elem.style.top = pos + '%';
          }
        }}
label.style.color='rgba(7, 72, 77, 0.521)';
}else{
    let x=document.querySelector('.input')
    let y=document.querySelector('#inp')
   let z= document.querySelector('label')
   console.log(x.style);
      //x.style.backgroundColor='rgb(98, 115, 122)'
      //y.style.backgroundColor='rgb(98, 115, 122)'
     // z.style.backgroundColor='rgb(98, 115, 122)'
      

}}
function mouseover()
{
    let x=document.querySelector('.input')
    let y=document.querySelector('#inp')
   let z= document.querySelector('label')
   x.style.backgroundColor='rgb(142, 150, 163)'
   y.style.backgroundColor='rgb(142, 150, 163)'
   z.style.backgroundColor='rgb(142, 150, 163)'

}
function mouseout()
{
    let x=document.querySelector('.input')
    let y=document.querySelector('#inp')
   let z= document.querySelector('label')
   x.style.backgroundColor='rgb(225, 228, 231)'
   y.style.backgroundColor='rgb(225, 228, 231)'
   z.style.backgroundColor='rgb(225, 228, 231)'


}
var x=true;
function dos()
{ 
  if(this.x)
{console.log(this.x)
var x2=document.querySelector('.img')
x2.style.transform='rotate(180deg)'
this.x=false
}
else{
  console.log(this.x)
   this.x=true
   var x2=document.querySelector('.img')
   x2.style.transform='rotate(360deg)'
}

}
var t={'name':false}
function callapi()
{
    
    var e = document.getElementById("currencies");
    var strUser = e.value;
    var e1 = document.getElementById("inp");
  if(e1!=null)
  { console.log(strUser)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ff38b2e680msh965ba51f20f9359p17d3aajsn7b206fa9c89e',
            'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
        }
    };
    
    fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/USD', options)
        .then(response => response.json())
        .then(response =>{ return response.rates[strUser]})
        .then((response,err) => {
             
             var x=(e1.value)/response;
             var f=x.toFixed(2)
             console.log(x+'ll')
             console.log(typeof(x))
             if(isNaN(x))
             {
              var f='failure';
              var a5 =document.querySelector('#mess')
              a5.innerHTML=f.toUpperCase();
              var y=document.getElementById('value')
              y.innerText='get value'

             }else{
              var f1='success';
              var a4 =document.querySelector('#mess')
              a4.innerHTML=f1.toUpperCase();
              var y=document.getElementById('value')
              y.innerText=f
             }
                     

             
        })
        .catch(err => {console.error(err+'ff')
        var f='failure';
        var a5 =document.querySelector('#mess')
        a5.innerHTML=f.toUpperCase();
        var y=document.getElementById('value')
        y.innerText='servererror'
})}
else{

  var f='failure';
              var a5 =document.querySelector('#mess')
              a5.innerHTML=f.toUpperCase();
              var y=document.getElementById('value')
              y.innerText='null'

}}