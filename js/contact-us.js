window.onload=function(){
    var username=document.getElementById("user");
    var corporation=document.getElementById("copy");
    var eMill=document.getElementById("e-mill");
    var phone=document.getElementById("phone");
    var address=document.getElementById("address");
    var textarea=document.getElementById("textarea");
    var submit=document.getElementById("submit");
    var reset=document.getElementById("reset");
    var text=document.getElementsByTagName("em");

    for(var i in text){
        text[i].innerHTML="";
    };
    username.onblur=function(){
        var nameValue=username.value;
        if (nameValue.length<=1) {
            text[0].innerHTML="至少两个哦";
        }else{text[0].innerHTML="";};

    };
    corporation.onblur=function(){
        regexp=/[a-zA-Z\u4e00-\u9fa5]+/;
        var result= regexp.test(corporation.value);
        if (result) {
            text[1].innerHTML="";
        }else{
            text[1].innerHTML="请输入正确的公司名"
        };
    };
    eMill.onblur=function(){
        regexp=/[0-9a-zA-Z]+@163.com$/;
        var result= regexp.test(eMill.value);
        if (result) {
            text[2].innerHTML="";
        }else{
            text[2].innerHTML="邮箱输入有误";
        };
    };
    phone.onblur=function(){
        regexp=/^1[3,5,7,8]{1}[0-9]{9}$/;
        var result= regexp.test(phone.value);
        if (result) {
            text[3].innerHTML="";
        }else{
            text[3].innerHTML="号码输入有误";
        };
    };
    address.onblur=function(){
        regexp=/[a-zA-Z\u4e00-\u9fa5]+/;
        var result= regexp.test(address.value);
        if (result) {
            text[4].innerHTML="";
        }else{
            text[4].innerHTML="地址输入有误";
        };
    };
    submit.onclick=function(){
        var judge=1;
        for(var i in text)
        {
            if (text[i].innerHTML!="") {
                judge=0;
                console.log(text[i].innerHTML());
            }else if (username.value==corporation.value==eMill.value==phone.value==address.value=="") {
                judge=0;
            }else{judge=1};
        }
            if (judge==0){
                alert("请输入有效信息");
            }
            if (judge==1){
                alert("信息已提交");
            }
    };
    reset.onclick=function(){
        for(var i in text)
        {
            text[i].innerHTML="";
        }
    };
};
