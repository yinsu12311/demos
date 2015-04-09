window.onload=function(){
	// alert(document.getElementById('box').innerHTML);
	// alert(document.getElementsByName('sex')[0].value);
	// alert(document.getElementsByTagName('p')[0].innerHTML);
	// alert(getId('box').innerHTML);
	// alert(Ido.getId('box').innerHTML);
	// alert(Ido.getName('sex')[0].value);
	// alert(Ido.getTagName('p')[0].innerHTML);

	//var Ido = new Ido();
	//alert(Ido.getId('box').elements.length); 
	//alert(Ido.getTagName('p').elements.length); 

	//获取节点，css样式设置 
	// $$().getId('box').css('color','red').css('backgroundColor','black');
	// $$().getTagName('p').css('color','green').html('标题').click(function(){
	// 	alert('a');
	// }).css('backgroundColor','pink');

	// $$().getId('box').html('pox').css('color','red');
	// alert($$().getId('box').html()) ;
	// alert($$().getId('box').css('color'));
	// alert($$().getId('box').css('color','green'));
	// alert($$().getId('box').css('fontSize'));

	//获取class节点
	// alert($$().getClass('red','aaa').elements.length);
	// alert($$().getClass('red','bbb').elements.length);
	// $$().getClass('red','aaa').css('color','green'); 
	// alert($$().getClass('red','aaa').elements.length);
	// alert($$().getClass('red','bbb').elements.length);
	// alert($$().getClass('red').getElement[2].elements.length);
	$$().getClass('red').getElement(2).css('color','green');
	$$().getClass('red','bbb').css('color','red');
};