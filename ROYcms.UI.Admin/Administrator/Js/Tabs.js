﻿function SystemTabs(){
   $("ul.menu li:first-child").addClass("current");
   $("div.content").find("div.layout:not(:first-child)").hide();
    $("div.content div.layout").attr("id", function(){return idNumber("No")+ $("div.content div.layout").index(this)});
    $("ul.menu li").click(function(){
        var c = $("ul.menu li");
        var index = c.index(this);
        var p = idNumber("No");
        show(c,index,p);
    });
    
   function show(controlMenu,num,prefix){
        var content= prefix + num;
        $('#'+content).siblings().hide();
        $('#'+content).show();
       controlMenu.eq(num).addClass("current").siblings().removeClass("current");
    };
 
    function idNumber(prefix){
        var idNum = prefix;
        return idNum;
    };
 }
 
 function AdminTabs(){
    $("ul.menu1 li:first-child").addClass("current");
   $("div.content1").find("div.layout:not(:first-child)").hide();
    $("div.content1 div.layout").attr("id", function(){return idNumber("No")+ $("div.content1 div.layout").index(this)});
    $("ul.menu1 li").click(function(){
        var c = $("ul.menu1 li");
        var index = c.index(this);
        var p = idNumber("No");
        show(c,index,p);
    });
    
   function show(controlMenu,num,prefix){
        var content= prefix + num;
        $('#'+content).siblings().hide();
        $('#'+content).show();
       controlMenu.eq(num).addClass("current").siblings().removeClass("current");
    };
 
    function idNumber(prefix){
        var idNum = prefix;
        return idNum;
    };
    }