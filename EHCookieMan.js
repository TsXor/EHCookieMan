// ==UserScript==
// @name         EHCoookieMan
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       TsXor
// @match        https://exhentai.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires + "; SameSite=None; Domain=.exhentai.org";
}
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
function delCookie(cname)
{
  setCookie(cname,"",-1)
}
delCookie('yay')
document.body.innerHTML=
    '<span id="memberid">ipb_member_id='+getCookie('ipb_member_id')+'</span><br>'+
    '<span id="passhash">ipb_pass_hash='+getCookie('ipb_pass_hash')+'</span><br>'+
    '<span id="igneous">igneous='+getCookie('igneous')+'</span><br>'+
    '<span id="iptmemberid">ipb_member_id=</span><input id="input1" type="text"/><br>'+
    '<span id="iptpasshash">ipb_pass_hash=</span><input id="input2" type="text"/><br>'+
    '<span id="iptigneous">igneous=</span><input id="input3" type="text"/><br>'+
    '<button onclick="submit()">修改cookie</button>'
var iscript='function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toGMTString();document.cookie=cname+"="+cvalue+"; "+expires+"; SameSite=None; Domain=.exhentai.org"}function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(\';\');for(var i=0;i<ca.length;i++){var c=ca[i].trim();if(c.indexOf(name)==0)return c.substring(name.length,c.length)}return""}function delCookie(cname){setCookie(cname,"",-1)}var ipt1=document.getElementById("input1");var ipt2=document.getElementById("input2");var ipt3=document.getElementById("input3");submit=function (){delCookie(\'ipb_member_id\');delCookie(\'ipb_pass_hash\');delCookie(\'igneous\');setCookie(\'ipb_member_id\',ipt1.value,10000);setCookie(\'ipb_pass_hash\',ipt2.value,10000);setCookie(\'igneous\',ipt3.value,10000)}'
var thescript = document.createElement("script");
thescript.type = "text/javascript";
thescript.appendChild(document.createTextNode(iscript));
document.body.appendChild(thescript);
