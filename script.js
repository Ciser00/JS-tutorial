var head1 = document.getElementById('title');
var halfnum = document.getElementById('half-input');
var halfbut = document.getElementById('half-button');
var numout = document.getElementById('num_output_para');



halfbut.addEventListener("click", half_func);

function half_func(){
  var new_num = halfnum.value;
  new_num = new_num/2;
  alert(new_num)
}
//this is what I had orignally
//I cant get the value to pass into the function
var number = halfnum.value;

function half_funcx(number){  // I don't get why it is passing my number in as a mouse event
  alert(number/2)
}


var fortin = document.getElementById('fortune-input');
var fortbut = document.getElementById('fortune-button');
var fortout = document.getElementById('fortune-output');


var name = fortin.value
fortbut.addEventListener("click", fortunex);
function fortunex() {
  var fortunes =["will have a truly rich life contains love and art in abundance.",
   "has a soft voice may be awfully persuasive.",
   "a pleasant surprise is waiting for you.",
   "a light heart carries you through all the hard times."
 ];
 var randomfort = fortunes[Math.floor(Math.random()*fortunes.length)]
  var name = fortin.value;
  fortout.innerText =" " + name + " " + randomfort;
}









var changebtn = document.getElementById('txtchange');

changebtn.addEventListener("click", restyle);
//function restyle(){
//  var randosize =  ["25px","30px", "70px", "35px", "62px"];
//  var newfontsize = randosize[Math.floor(Math.random()*randosize.length)];
//  fortout.style.size = newfontsize;
//}
function restyle() {
  fortout.style.color = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
  fortout.style.fontSize = "90px";
  fortout.style.backgroundColor = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
}
