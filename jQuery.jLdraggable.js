;(function($){
  $.fn.extend({
      "jLzindex" : function(){    
        var $dragIndex = $(this);
         
        for(var i=0; i <$dragIndex.length; i++){    
          var zIdxNum = 10000 - i ;
         
          $($dragIndex).css("z-index",'99999');
        }
 
        
         $dragIndex.mousedown(function(e){
             
           var x=  e.currentTarget.id 
           var selected= $("#"+x);
           var index=   selected.zIndex(); 
           selected.css("z-index",index+2);
           console.log(index);
        });
      }
    
    })
})(jQuery)
