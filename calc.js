function writeMe(me){
$("itxt").innerHTML = addCommas(remCommas($("itxt").innerHTML + me.innerHTML));
if (me.className.search("op") == 0)
{
disableOp();
}
else 
{
enableOp();
}
};
function clearT(){
$("itxt").innerHTML = " ";
};
function calcIt(){
$("itxt").innerHTML = addCommas(eval(remCommas($("itxt").innerHTML)));
$("i=").disabled = true;
loadXMLDoc();
};
function disableOp(){
$("i/").disabled = true;
$("i-").disabled = true;
$("i*").disabled = true;
$("i+").disabled = true;
$("i=").disabled = true;
$("i.").disabled = true;
};
function enableOp(){
$("i/").disabled = false;
$("i-").disabled = false;
$("i*").disabled = false;
$("i+").disabled = false;
$("i=").disabled = false;
$("i.").disabled = false;
};
function $(id){return document.getElementById(id);};
function addCommas(nStr){
nStr += '';
x = nStr.split('.');
x1 = x[0];
x2 = x.length > 1 ? '.' + x[1] : '';
var rgx = /(\d+)(\d{3})/;
 while (rgx.test(x1)) {
	x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
return x1 + x2;
}
function remCommas(nStr){
str2 = nStr.split(',').join("");
return str2;
}
function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","http://www.google.com/ig/calculator",true);
xmlhttp.send();
}
