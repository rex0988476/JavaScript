document.write("<p>引入</p>");
var change_line = "<br/>";
var bar_line = "<hr/>";



////基本資料型態----------------------------------------------

//字串, 單雙引號夾起來的都為字串

//數字, 不論有無小數點都可

//布林, true false


////變數----------------------------------------------
document.write(bar_line);
//創建一個容器叫做my_name, 並把"rex09_"放入此容器(變數)中
//變數命名可用英文大小寫或數字或$或_, 開頭不能是數字
//變數不管資料型態是甚麼都可以改
var my_name = "rex09_";
var my_age = 20;
var is_male = true;
//document.write(my_name,my_age,is_male);
document.write("我的名字是" + my_name + change_line);
document.write("我今年" + my_age + "歲" + change_line);
if (is_male) {
    document.write("我是男生");
} else {
    document.write("我不是男生");
}
document.write(change_line);


////字串----------------------------------------------
document.write(bar_line);
// \特殊字元

var s1="Ss1";
document.write(s1.length + change_line);//[字串].length //回傳字串長度[數字]
document.write(s1.toUpperCase() + change_line);//[字串].toUpperCase //全轉大寫回傳 //[字串]
document.write(s1.toLowerCase() + change_line);//[字串].toLowerCase //全轉小寫回傳 //[字串]
document.write(s1.charAt(1) + change_line);//[字串].charAt([數字]) //回傳 [字串]中index[數字]的字元(從0開始) //[字串(字元)]
document.write(s1.indexOf('s') + change_line);//[字串].indexOf([字元(字串)]) //回傳[字串]中[字元]所在的index, 找不到則回傳-1 //[數字]
document.write(s1.substring(0,2) + change_line);//[字串].substring([數字1],[數字2]) //回傳[字串]中第 [數字1]位 到 [數字2]位 之前 不包含[數字2]位 的字串//[字串]

////數字----------------------------------------------
document.write(bar_line);

//加+ 減- 乘* 除/ 取餘數%

var number = -1.5;
document.write(Math.abs(number) + change_line);//Math.abs([數字]) //將數字取絕對值後回傳 //[數字]
document.write(Math.max(3,2,4,5,1) + change_line);//Math.max([數字1],[數字2],...) //傳入任意數量數字後回傳最大的數字 //[數字]
document.write(Math.min(3,2,4,5,1) + change_line);//Math.min([數字1],[數字2],...) //傳入任意數量數字後回傳最小的數字 //[數字]
document.write(Math.round(number) + change_line);//Math.round([數字]) //將數字四捨五入後回傳 //[數字]
document.write(Math.pow(2,3) + change_line);//Math.pow([數字1],[數字2]) //計算[數字1]的[數字2]次方後回傳 //[數字]
document.write(Math.sqrt(36) + change_line);//Math.sqrt([數字]) //將數字開根號後回傳 //[數字]
document.write(Math.random() + change_line);//Math.random() //回傳0到1之間的隨機數 //[數字]


/*

////輸入----------------------------------------------
document.write(bar_line);

prompt("這是輸入空間");//prompt([字串]); //輸入功能, [字串]為提示字元
var input = prompt();//輸入後存入input變數中
var inputI = parseInt(prompt());//parseInt([字串]) //字串轉*整數*後回傳 //[整數(數字)] 
var inputF = parseFloat(prompt());//parseFloat([字串]) //字串轉*小數*後回傳 //[小數(數字)]
alert("此為跳出訊息(類似輸入(prompt)的視窗)");

*/

////陣列array----------------------------------------------
document.write(bar_line);

var array = [3,2,4,5,1];//var [變數名] = [[數字1],[數字2],...]; //創建陣列
document.write(array + change_line);//印出陣列
document.write(array[1] + change_line);//印出陣列中單個元素
array[2] = 8;//修改陣列的值
array[3] = "三";//同一陣列中可放不同資料型態的值
document.write(array + change_line);

document.write(array.length);//[陣列].length //回傳陣列長度 //[數字]


////函式function----------------------------------------------
document.write(bar_line);

//function [函式名稱]([傳入值1],[傳入值2],...){}
function function_name(fparameter,num1,num2){
    document.write("this is fuction." + change_line);
    document.write("\"" + fparameter + "\" " + "this is parameter." + change_line);
    return num1 + num2;//return [值]; //痾, 阿就回傳 //[值]
    document.write("this text will not appear.");
}

document.write(function_name("parameter_test",2,3));


////if----------------------------------------------
document.write(bar_line);

//大於> 小於< 大於等於>= 小於等於<= 等於== 且&& 或|| 不!
//if( [條件式] ){ [語句] }
/*
if( [條件式] ){ 
    [語句] 
}
else {
    [語句]
}
*/
/*
if( [條件式] ){ 
    [語句] 
}
else if( [條件式] ){ 
    [語句] 
}
else {
    [語句]
}
*/
var rand = Math.random();
if(rand>0.5){
    document.write("大於0.5");
}
else if(rand==0.5){
    document.write("等於0.5");
}
else{
    document.write("小於0.5");
}


////物件object----------------------------------------------
document.write(bar_line);

//類似struct
//創建物件
var obj = {
    obj_name:"rex09_",
    obj_age:20,
    obj_is_male:true,
    obj_func:function(){//[函式名稱]:function([傳入值1],[傳入值2],...){} //在物件內創建函式
        document.write("My name is " + this.obj_name + change_line);//this.[物件內的key] //取得物件內的key, 主要用途為辨識key的來源
        return "this is return.";
    }
};

/*
格式:
var [物件名稱] = {
    [key1]:[值],
    [key2]:[值],
    ...
    [keyn]:[值]
};
*/

document.write(obj.obj_name + change_line);//[物件名稱].[key] //取得物件內的key
document.write(obj.obj_func() + change_line);

var obj2 ={//亂到爆:)
    
    obj2_1:{//物件中的物件1
        obj2_1_1:211,
        obj2_1_2:212
    },

    obj2_2:[//物件中的物件陣列
        {
            obj2_2_1_1:2211,
            obj2_2_1_2:2212
        },
        {
            obj2_2_2_1:2221,
            obj2_2_2_2:2222
        }
    ],

    obj2_3:{//物件中的物件2
        obj2_3_1:[//混用陣列1
            2311,
            {
                obj2_3_1_2_1:23121,
                obj2_3_1_2_2:23122
            }
        ],
        obj2_3_2:[//混用陣列2
            {
                obj2_3_2_1_1:[232111,{obj2_3_2_1_1_2:232112},232113],
                obj2_3_2_1_2:23212
            },
            [23221,23222,{obj2_3_2_2_3:23223}],
            2323
        ],
    }
};
document.write(obj2.obj2_1.obj2_1_1 + change_line);
document.write(obj2.obj2_1.obj2_1_2 + change_line);
document.write(obj2.obj2_2[0].obj2_2_1_1 + change_line);
document.write(obj2.obj2_2[0].obj2_2_1_2 + change_line);
document.write(obj2.obj2_2[1].obj2_2_2_1 + change_line);
document.write(obj2.obj2_2[1].obj2_2_2_2 + change_line);
document.write(obj2.obj2_3.obj2_3_1[0] + change_line);
document.write(obj2.obj2_3.obj2_3_1[1].obj2_3_1_2_1 + change_line);
document.write(obj2.obj2_3.obj2_3_1[1].obj2_3_1_2_2 + change_line);
document.write(obj2.obj2_3.obj2_3_2[0].obj2_3_2_1_1[0] + change_line);
document.write(obj2.obj2_3.obj2_3_2[0].obj2_3_2_1_1[1].obj2_3_2_1_1_2 + change_line);
document.write(obj2.obj2_3.obj2_3_2[0].obj2_3_2_1_1[2] + change_line);
document.write(obj2.obj2_3.obj2_3_2[0].obj2_3_2_1_2 + change_line);
document.write(obj2.obj2_3.obj2_3_2[1][0] + change_line);
document.write(obj2.obj2_3.obj2_3_2[1][1] + change_line);
document.write(obj2.obj2_3.obj2_3_2[1][2].obj2_3_2_2_3 + change_line);
document.write(obj2.obj2_3.obj2_3_2[2] + change_line);


////while迴圈----------------------------------------------
document.write(bar_line);

//while( [條件式] ){語句}

var i = 1;
while(i<=3){
    document.write(i);
    i++;
}
document.write(change_line);


/*
do{
    [語句]
}while( [條件式] )
*/

i = 1;
do{
    document.write(i);
    i++;
}while(i<=3)


////for迴圈----------------------------------------------
document.write(bar_line);

//for([初始設定];[條件式];[執行每次迴圈前的初始運算]){ [語句] }

for(var fori = 1 ; fori<10 ; fori++){
    document.write(fori);
}

////2維陣列 &　巢狀迴圈----------------------------------------------
document.write(bar_line);

var tdarray = [[0,1,2],[3,4,5],[6,7,8]];//[[[值1],[值2],...],[[值3],[值4],...],...] //阿就 二維陣列阿
for(i=0;i<tdarray.length;i++){
    for(var j=0;j<tdarray[i].length;j++){
        document.write(tdarray[i][j]);
    }
}

////class----------------------------------------------
document.write(bar_line);

/*創建class

class [class名稱]{
    constructor([變數1],[變數2],...){
        this.[class中的變數1] = [變數1];
        this.[class中的變數2] = [變數2];
        ...
    }
    ...
}

*/
class Phone {//創建手機的class
    constructor(Pnumber , Pyear , Pis_waterproof){
        this.Pnumber = Pnumber;//不需事先定義class中的變數, 只要用constructor中的this.創建即可(?)
        this.Pyear = Pyear;
        this.Pis_waterproof = Pis_waterproof;
    }
    function_in_class(){
        document.write("this is function in class." + change_line);
    }
}

var phone1 = new Phone("123",2020,true);//創建一個手機的物件

document.write(phone1.Pnumber + change_line);
document.write(phone1.Pyear + change_line);
document.write(phone1.Pis_waterproof + change_line);


////取得html元素----------------------------------------------
document.write(bar_line);

//window //全域物件, 代表整個瀏覽器, 所有東西都在window底下, 所以可以省略

window.document.write("window.document.write 等於 document.write" + change_line);
var wina = "且[變數] 也等於 window.[變數]";
document.write(window.wina + change_line);

var gid = document.getElementById("pLabel");//document.getElementById([字串]) //根據html中的id取得元素(標籤)
//!!!只會取得引入前的所有元素!!!
//還有其他get函式可上w3c js -> JS HTML DOM查詢
console.log(gid);//console.log([變數(標籤)]); //將變數(標籤)輸出到console上 (網頁 -> f12 -> console)
gid.innerText = "this is innerText.";//[變數(標籤)].innerText = [變數] //修改變數(標籤)中的值
gid.style.backgroundColor = "black";//[變數(標籤)].style.backgroundColor = "[顏色(原本可填入css style backgroundColor的都可)]"; //修改背景顏色
gid.style.color = "white";//[變數(標籤)].style.color = [顏色(原本可填入css style color的都可)]; //改變字體顏色

var alink = document.getElementById("aLabel");
alink.href = "https://www.youtube.com/";//將取得的a標籤的href屬性從goole改成youtube網站


////event listener----------------------------------------------
document.write(bar_line);

//請搭配html檔筆記觀看

var handle_click_i = 0;
function handle_click(element){
    //alert("按三小");
    console.log(element);
    if(handle_click_i==0){
        element.innerText = "按三小";
    }
    else if(handle_click_i<10){
        element.innerText = "按爽沒";
        element.style.color = "red";
    }
    else{
        alert("肏你媽");//遇到alert就不會再往下跑直接結束(不會跑到handle_click_i++;)
    }
    handle_click_i++;
}

//另一種寫法(完全在js裡)
var btn_in_JS=document.getElementById("btn_in_JS");
var handle_click_i_in_JS = 0;
btn_in_JS.addEventListener("click",function(){//click事件, 為偵測此標籤有無被點擊

    if(handle_click_i_in_JS==0){
        btn_in_JS.innerText = "按三小";
    }
    else if(handle_click_i_in_JS<10){
        btn_in_JS.innerText = "按爽沒";
        btn_in_JS.style.color = "red";
    }
    else{
        alert("肏你媽");
    }
    handle_click_i_in_JS++;
});//[標籤].addEventListener([要監聽甚麼樣子的事件(字串?)],[觸發事件後要做的事情(函式?)]); //對[標籤]做監聽


//監聽滑鼠有沒有滑過圖片
var imgLabel=document.getElementById("imgLabel");
imgLabel.addEventListener("mouseover",function(){//mouseover事件, 為偵測滑鼠有無滑 入(?) 此標籤
    this.src = "Valentine_haachama_zoom_in.jpg";//改變圖片
});

imgLabel.addEventListener("mouseout",function(){//mouseout事件, 為偵測滑鼠有無滑 出 此標籤
    this.src = "Valentine_haachama.jpg";//改回原圖
});

//自製:按下按鈕改變圖片
var self_btn_in_JS = document.getElementById("self_btn_in_JS");
var self_imgLabel = document.getElementById("self_imgLabel");
var self_i = 0;
self_btn_in_JS.addEventListener("click",function(){
    if(self_i % 2 == 0){
        self_imgLabel.src = "Valentine_haachama_zoom_in.jpg";
        self_i = 1;
    }
    else{
        self_imgLabel.src = "Valentine_haachama.jpg";
        self_i = 0;
    }
});

