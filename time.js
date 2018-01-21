class Time{
	add(date,interval){
		console.log(new Date(date.getTime()+new Interval().parse(interval)));
	}

	sub(date,interval){
		console.log(new Date(date.getTime()-new Interval().parse(interval)));
	}

	diff(first,second){
		let time=Math.abs(first.getTime()-second.getTime());
		console.log(time);
		console.log(new Interval().format(time,'{D}天，{h}小时，{m}分钟，{s}秒'));
	}
}

// module.exports=Time;