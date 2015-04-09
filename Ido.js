// function getId(id){
// 	return document.getElementById(id);
// }
// var Ido={
// 	getId: function(id){
// 		return document.getElementById(id)
// 	},
// 	getName :function(name){
// 		return document.getElementsByName(name)
// 	},
// 	getTagName :function(tag){
// 		return document.getElementsByTagName(tag);
// 	}
// };
//前台调用
var $$ = function(){
	return new Ido();
}


function Ido(){}

//创建数组
Ido.prototype.elements=[];

//获取ID节点
Ido.prototype.getId = function(id){
		this.elements.push(document.getElementById(id)) ;
		return this;
	};

//获取元素节点数组
Ido.prototype.getTagName=function(tag){
		var tags=document.getElementsByTagName(tag);
		for(var i=0;i<tags.length;i++){
			this.elements.push(tags[i]);
		}
		return this;
	};

//获取Class节点数组
Ido.prototype.getClass=function(className,idName){
	var node=null;
	if(arguments.length==2){
		node=document.getElementById(idName);
	}else{
		node=document;
	}
	var all=node.getElementsByTagName('*');
	for (var i = 0; i < all.length; i++) {
		if(all[i].className==className){
			this.elements.push(all[i]);
		}
	}
	return this;
};

//获取某一个节点
Ido.prototype.getElement=function(num){
	var element=this.elements[num];
	this.elements=[];
	this.elements[0]=element;
	return this;
};

//设置CSS
Ido.prototype.css=function(attr,value){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length==1){
			if(typeof window.getComputedStyle!='undefined'){
				return window,getComputedStyle(this.elements[i],null)[attr];
			}else if(typeof this.elements[i].currentStyle!='undefined'){
				return this.elements[i].currentStyle[attr];
			}
		}
		this.elements[i].style[attr]=value;
	}
	return this;
};   

//设置innerHTML
Ido.prototype.html=function(str){
		for(var i=0;i<this.elements.length;i++){
			if(arguments.length==0){
				return this.elements[i].innerHTML;
			}
			this.elements[i].innerHTML=str;
		}
		return this;
};

//触发点击事件
Ido.prototype.click=function(fn){
	for(var i=0;i<this.elements.length;i++){
			this.elements[i].onclick=fn;
		}
		return this;
};