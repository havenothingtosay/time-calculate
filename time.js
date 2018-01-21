class Time{
	add(date,interval){
		console.log(new Date(date.getTime()+new Interval().parse(interval)));
	}

	sub(date,interval){
		console.log(new Date(date.getTime()-new Interval().parse(interval)));
	}

	diff(first,second,format){
		let time=Math.abs(first.getTime()-second.getTime());
		console.log(time);
		console.log(new Interval().format(time,format));
	}
}

// module.exports=Time;