var today = new Date();
var gio = today.getHours();
function dongho() {
    var today = new Date();
    var gio = today.getHours();
    var phut = today.getMinutes();
    var giay = today.getSeconds();
    if(giay<10){
        giay = "0"+giay;
    }if(phut<10){
        phut = "0"+phut;
    }if(gio<10){
        gio = "0"+gio;
    }
    document.getElementById("time").innerHTML = gio +":"+ phut +":"+ giay;
    setTimeout("dongho()",1000);
}
function feedback(){
    var thongbao="";
    if (gio<12){
        thongbao="Chào buổi sáng"
    }
    else if (gio<17){
        thongbao="Chào buổi chiều"
    }
    else{
        thongbao="Chào buổi tối"
    }

    document.getElementById("thongbao").innerHTML=thongbao;
}
feedback();
dongho();



