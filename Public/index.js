const clock=document.querySelector('.digital');
function gettime(){
    var day=new Date();
    // console.log(day);
    var hrs=day.getHours();
    // console.log(hrs);
    var min=day.getMinutes();
    // console.log(min);
    var sec=day.getSeconds();
    // console.log(sec);
    var txt="AM";
    if(hrs>12){
        hrs=hrs-12;
        txt="PM"
    }
    else if(hrs == 0){
        hrs=12;
        txt="AM";
    }
    hrs=hrs<10?"0"+hrs:hrs;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    clock.innerHTML=(`${hrs} : ${min} : ${sec} ${txt}`);
}
setInterval(gettime,1000);