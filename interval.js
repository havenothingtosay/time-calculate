class Interval{
	constructor(){
		this.constSecond={
      'D':24*60*60*1000,
      'h':60*60*1000,
      'm':60*1000,
      's':1000
    };
	}

	// 间隔->时间戳
	parse(interval){
		let time=0;
		if (typeof interval=='string') {
			let reg=/(\d+)([Dhms])/g;
			let tmp;
			while(tmp=reg.exec(interval)){
				time+=tmp[1]*this.constSecond[tmp[2]];
			}
		}else if (typeof interval=='object') {
			for (let key in interval) {
				time+=interval[key]*this.constSecond[key]
			}		
		}
		else{
			throw new Error('格式错误');
		}
		console.log(time);
		return time;
	}

	// 时间戳->间隔
	format(time,format='{D} days {h} hours {m} minutes {s} seconds'){
		for (let key in this.constSecond) {
			if (format.indexOf('{'+key+'}')==-1) {
				continue;
			}else{
				format=format.replace('{'+key+'}',parseInt(time/this.constSecond[key]));
				time=time%this.constSecond[key];
			}
		}
		return format;
	}
}

// module.exports=Interval;