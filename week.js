var year,month,day,yearflag; //年，月，日，闰（1）平（0）年
var numcount,weekth,weekday;           //一年中的第几天，周次,周几
//每年元旦时更改num_week中的偏移量即numcount减几
//每学期开始根据周次更改weekth减几

//获取今天的日期
function today()
{
    var date = new Date();

    year = date.getFullYear();        //年 ,从 Date 对象以四位数字返回年份
    month = date.getMonth() + 1;      //月 ,从 Date 对象返回月份 (0 ~ 11) ,date.getMonth()比实际月份少 1 个月
    day = date.getDate();             //日 ,从 Date 对象返回一个月中的某一天 (1 ~ 31)

    var hours = date.getHours();          //小时 ,返回 Date 对象的小时 (0 ~ 23)
    var minutes = date.getMinutes();      //分钟 ,返回 Date 对象的分钟 (0 ~ 59)
    var seconds = date.getSeconds();      //秒 ,返回 Date 对象的秒数 (0 ~ 59)   
            
    //修改月份格式
    if (month >= 1 && month <= 9) 
    {
        month = "0" + month;
    }

    //修改日期格式
    if (day >= 0 && day <= 9)
    {
        day = "0" + day;
    }

    //修改小时格式
    if (hours >= 0 && hours <= 9) 
    {
        hours = "0" + hours;
    }

    //修改分钟格式
    if (minutes >= 0 && minutes <= 9) 
    {
        minutes = "0" + minutes;
    }

    //修改秒格式
    if (seconds >= 0 && seconds <= 9) 
    {
        seconds = "0" + seconds;
    }
    //获取当前系统时间  格式(yyyy-mm-dd hh:mm:ss)
    var currentFormatDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    document.write('<div align="center">'+currentFormatDate+ '</div>');
    // a=new array(year,month,day);
    // return a;
}

//判断闰平年
function leap(year)
{
    if(year%4==0&&year%100!=0||year%400==0)
    {
        yearflag=1;//闰年 
    }
    else 
    yearflag=0;//平年 
    document.write('<div align="center">'+"今年是"+yearflag+"年"+'</div>');
}

//计算一年中的第几天
function number_day(m,d)
{
    const a = [31,28,31,30,31,30,31,31,30,31,30,31];
    const b = [31,29,31,30,31,30,31,31,30,31,30,31];
    numcount=0;
    if(yearflag==1)
    {//闰年 
        for (i=0;i<m-1;i++)
        {
        numcount+=b[i];
        }	
        numcount=numcount+d;
    } 
    else 
    {
        for (i=0;i<m-1;i++)
        {//平年 
            numcount+=a[i];
        }	
        numcount=numcount+d;
    } 
    document.write('<div align="center">'+"第"+numcount+"天"+'</div>');
}

//计算第几周
function num_week()
{
    weekth=Math.trunc((numcount-3)/7+1)-35;
    document.write('<div align="center">'+"第"+weekth+"周"+'</div>');
}

//计算周几
function whatday(year,month,day)
{
    var m = month;
    var d = day;
    // 根据月份对年份和月份进行调整
    if(m <= 2)
    {
        year -= 1;
        m += 12;
    }
    var c = Math.trunc(year / 100); // 年份前两位
    var y = year % 100; // 年份后两位
    // 根据泰勒公式计算星期
    var w = (c/4) - 2*c + y + (y/4)+ (13*(m+1)/5) + d - 1;
    weekday=Math.trunc(w%7);
    document.write('<div align="center">'+"周"+weekday+'</div>');
}

//执行程序
function main()
{
    today();
    // leap();
    //number_day(month,day);
    num_week(numcount);
    whatday(year,month,day);
}
main();
