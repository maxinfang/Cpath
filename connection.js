function addConnections(linklist){
  
    var arraynodes=linklist.slice();
   
  for(n=0; n<arraynodes.length;n++){
   var link= arraynodes[n];
    
   addConnection(link);
        
  
  }
  
}


function addConnection(link){
  
          var targetid ;
     $("#"+link.t).children().each(function(no,el){
        if($(el).hasClass("_jsPlumb_endpoint_anchor_")){
          targetid= el.id ; 
        } 
        });
   
      var sourceid ;
         
      $("#"+link.h).children().each(function(no,el){
        if($(el).hasClass("_jsPlumb_endpoint_anchor_")){
          sourceid= el.id ; 
        } 
        });
     
      s=jsPlumb.selectEndpoints({source: sourceid}).get(0);
      t=jsPlumb.selectEndpoints({target: targetid}).get(0);
       
       jsPlumb.connect({source:s, target:t});  
        

}

