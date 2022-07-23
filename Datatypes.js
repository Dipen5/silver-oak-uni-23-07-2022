

var Num=050;
var Str="Dipen vaghasiya";
var BooleanVar=true;


document.write("<br/>",Num);
document.write("<br/>",Str);
document.write("<br/>",BooleanVar);


document.write("<br/>",typeof(BooleanVar));



var obj = new Object();
document.write("<br/>"+typeof(obj));
document.write("<br/>"+obj.FirstName+" "+obj.LastName);


var car = {
    modal: "mustang Gt",
    color: "red",
    doors: 6
}
document.write("<br/>"+car.modal+" "+car.color+" "+car.doors);


var cars = ["mastang-gt", "challenger", "kalseen"];
document.write("<br/>"+cars[0]);
document.write("<br/>"+cars[1]);
document.write("<br/>"+cars[2]);



var Demo = function(){ 
    return "Hello World!"; 
}
document.write("<br/>"+typeof(Demo));
document.write("<br/>"+Demo());



