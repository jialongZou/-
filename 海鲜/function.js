	function getDate(){
		//定义一个名叫weeks的集合
		var weeks = ["日","一","二","三","四","五","六"];
		//定义一个变量now获取当前的时间对象
		var now = new Date();

		//获取日期的各部分值
		var year = now.getFullYear();//获取年份
		var month = now.getMonth()+1;//获取月份
		var day = now.getDate();//获取天数
		var hours = now.getHours();//获取小时
		var minutes = now.getMinutes();//获取分钟
		var seconds = now.getSeconds();//获取秒
		var weekIndex = now.getDay();//获取星期对应的数字
		topDiv.innerText = year+"年"+month+"月"+day+"日 "+hours+"点"+minutes+"分"+seconds+"秒  星期"+weeks[weekIndex];//topDiv.innerText代表着对应标签里面要显示的东西，所以把年月日那些拼起来，最后星期是用集合对应的下标来取里面的值。
	}
	//这个是窗体加载的方法，用窗体windows的计时器setinterval方法设置，就可以让时间是动起来的效果
	window.onload=function(){
		window.setInterval(getDate,1000);
	}