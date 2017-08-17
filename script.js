$(document).ready(function(){
        
    
    $("#boneButton").click(function(){
        var r = confirm("Are you sure?");
        if(r==true){
                        
            $("#loading").toggle();
            $("#loadingText").toggle();
            
            setTimeout(function() {
                $("html").css("cursor","url(images/cursor2.png),pointer");
                $("html").css("background-color","black");
                $("#boneButton").toggle();
                $("#boneButton2").toggle();
                $("#loadingText").toggle();
                $("#loading").toggle();
                $("#walker").toggle();
                $("#walker").animate({left: '100%'},4000);
                }, 3000);
            
            setTimeout(function() {
                 $("#flame").toggle(function(){
                     $("#flame").addClass("animate");
                     
                 });
                }, 6800);
            
           setTimeout(function() {
               
               $("#flame").toggle();
               $("h1").animate({
                   height:"toggle"
               });
               $("#dude").animate({
                   height:"toggle"
               });
               $("#dance").animate({
                   height:"toggle"
               });
               $("#skell").animate({
                   height:"toggle"
               });
        
                }, 9000);
            
            setTimeout(function() {
                
                $("h1").toggle();
                $("#dude").toggle();
                $("#dance").toggle();
                $("#skell").toggle();
                
                $("#main").animate({height: 'toggle'});
                }, 12000);
            
            setTimeout(function() {
                $("#dancer").toggle(function(){
                     $("#dancer").addClass("animate");
                 });
            }, 15000);
            
            
            
            
        }else{
            
            $("body").hide();  
        } 
    });
    
    
    $("#boneButton2").click(function(){
        var r = confirm("Are you sure?");
        
        if(r==true){
            
            $("#loading").toggle();
            $("#loadingText").toggle();
            
            setTimeout(function() {
                $("html").css("cursor","url(images/cursor2.png),pointer");
                $("html").css("background-color","black");
                $("#boneButton").toggle();
                $("#boneButton2").toggle();
                $("#loadingText").toggle();
                $("#loading").toggle();
                
                $("#flame").toggle(function(){
                     $("#flame").addClass("animate2");
                     
                 });
                
            }, 3000);
            
        }else{
            
            $("body").hide();  
        } 
        });
        
    $("#animator").click(function(){
                     
                     
                 });    
        
        
        
        
  
});