var myImage=document.querySelector('img');
myImage.onclick=function()
{
  var mySource=myImage.getAttribute('src');
  if(mySource=='images/Dresden1.jpg')
  {
    myImage.setAttribute('src','images/Dresden2.jpg');
  }
  else{
    myImage.setAttribute('src','images/Dresden1.jpg');
  }
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');


function setUserName()
{
var myName=prompt('Please enter your name!');
localStorage.setItem('name',myName);
myHeading.textContent= 'Dresden is cool, ' + myName;
}

if(!localStorage.getItem('name')){
  setUserName();
}
else{
  var storedName=localStorage.getItem('name');
  myHeading.textContent='Dresden is cool, ' +storedName;
}


myButton.onclick = function(){
  setUserName();
}
