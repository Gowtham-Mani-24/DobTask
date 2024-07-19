var div = document.createElement("div");
div.className = "main";

var input = document.createElement("input");
input.setAttribute("type","date");
input.id = "dob";

var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Display Data";
button.addEventListener("click",date_generator);

var result1 = document.createElement("div");
    result1.className = "ans1";
    var result2 = document.createElement("div");
    result2.className = "ans2";
    var result3 = document.createElement("div");
    result3.className = "ans3";
    var result4 = document.createElement("div");
    result4.className = "ans4";
    var result5 = document.createElement("div");
    result5.className = "ans5";
    var result6 = document.createElement("div");
    result6.className = "ans6";
    var result7 = document.createElement("div");
    result7.className = "ans7";

div.append(input,button,result1,result2,result3,result4,result5,result6,result7);
document.body.append(div);


function date_generator(){
    var res = document.getElementById("dob").value;
    var input_date = new Date(res);
    var current_date = new Date();
    console.log(input_date);
    console.log(current_date);

    var millisecdiff = parseInt(current_date.getTime() - input_date.getTime());
    console.log(millisecdiff);

    var secdiff = Math.floor(millisecdiff/1000);
    console.log(secdiff);

    var mindiff = Math.floor(secdiff/60);
    console.log(mindiff);

    var hrsdiff = Math.floor(mindiff/60);
    console.log(hrsdiff);

    var daydiff = Math.floor(hrsdiff/24);
    console.log(daydiff);

    var yeardiff = (current_date.getFullYear() - input_date.getFullYear());
    console.log(yeardiff);

    var mondiff = ((yeardiff *12) + (current_date.getMonth() - input_date.getMonth()));
    console.log(mondiff);

    
    result1.getElementsByClassName("ans1");
    result1.innerHTML = "year " + yeardiff;
    result2.getElementsByClassName("ans2");
    result2.innerHTML = "month " + mondiff;
    result3.getElementsByClassName("ans3");
    result3.innerHTML = "day " + daydiff;
    result4.getElementsByClassName("ans4");
    result4.innerHTML = "hour " + hrsdiff;
    result5.getElementsByClassName("ans5");
    result5.innerHTML = "minute " + mindiff;
    result6.getElementsByClassName("ans6");
    result6.innerHTML = "second " + secdiff;
    result7.getElementsByClassName("ans7");
    result7.innerHTML = "milli second " + millisecdiff;
}