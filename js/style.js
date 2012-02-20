window.onload = function(){
	
	var obj = document.getElementById('nav'); 
	var obj_a = obj.getElementsByTagName('a');
	var con = document.getElementById('menu_con');
	var con_div = con.getElementsByTagName('div');

	var len = obj_a.length;
	//加载时都显示为默认none
	for(var i=0;i<len;i++){

		obj_a[i].index = i;
		obj_a[i].className = 'nav_off';
		obj_a[i].onclick = function(){clickMenu(this)};

		con_div[i].index = i;
		con_div[i].style.display="none";
		con_div[i].onclick = function(){clickMenu(this)};
	}
	//alert('layer1=='+getCookie("layer1"));
	//alert('layer2=='+getCookie("layer2"));
	if (getCookie("layer1") != null && getCookie("layer2") != null) {
				
		obj_a[getCookie("layer1")].className="nav_on";
		con_div[getCookie("layer2")].style.display="block";
	}
	else{
		
	    obj_a[0].className="nav_on";
		con_div[0].style.display="block";
	}	

function clickMenu(o){
	
	delCookie("layer1");
	delCookie("layer2");
	var obj = document.getElementById('nav'); 
	var obj_a = obj.getElementsByTagName('a');
	var con = document.getElementById('menu_con');
	var con_div = con.getElementsByTagName('div');
	var len = obj_a.length;
	for(var i=0;i<len;i++){
		obj_a[i].className = 'nav_off';
		con_div[i].style.display="none";
	}
	
	//alert(o.index);
	setCookie('layer1',o.index,1);
	setCookie('layer2',o.index,1);
	
	obj_a[getCookie("layer1")].className="nav_on";
	con_div[getCookie("layer2")].style.display="block";
	
	
}
	

//--- 存储cookie
//expireHours:到期时间
function setCookie(sName,sValue,expireHours){
	var Days = 30;//此cookie将被保存30天
	var exp = new Date();//new Date("December 31, 9998");
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = sName + "=" + escape(sValue) + ";expires=" + exp.toGMTString() +";path=/";
}

//--- 获取cookie
function getCookie(sName){
	var arr = document.cookie.match(new RegExp("(^| )"+sName+"=([^;]*)(;|$)"));
	if(arr != null) return unescape(arr[2]); return null;
}

//--- 删除cookie
function delCookie(sName){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(sName);
	if(cval!=null) document.cookie=sName +"=;expires="+exp.toGMTString();
	}
}