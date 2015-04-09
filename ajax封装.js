function params(data){
	var arr[];
	for(var i in data){
		arr.push(encodeURIComponent(i)+'='+encodeURIComponent(data[i]));
	}
	return arr.join('&');
}
//封装ajax
function ajax(abj){
	var xhr=createXHR();
	obj.url=obj.url+'?rand='+Math.random();
	obj.data=params(obj.data);
	if(obj.method==='get'){
		obj.url+=obj.url.indexOf('?')==-1?'?'+obj.data:'&'+obj.data;
	}
	if(obj.async===true){
			xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				callback();
			}
		};
	}
	xhr.open(obj.method,obj.url,obj.async);
	if(obj.method==='post'){
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(obj.data);
	}else{
		xhr.send(null);
	}
	if(obj.async===false){
		callback();
	}
	function callback(){
		if(xhr.status==200){
					obj.success(xhr.responseText);
				}else{
					alert('获取数据失败！错误代码：'+xhr.status);
				}
	}
}