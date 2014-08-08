
jsPlumb.bind("connectionDragStop", function(conn) { 
   //      console.log("connectionDragStop");    
               })
 
  
  
jsPlumb.bind("connection",  function(info, originalEvent) {
  //  var conn = info.connection;
  //var parentId=$('#'+conn.sourceId).parent().attr('id');
 /// var childId=$('#'+conn.targetId).parent().attr('id');
  //console.log(childId);
  
         
    }) 
   
  
jsPlumb.bind("connectionDetached", function(info, originalEvent) {
  
})

// jsPlumb.bind("beforeDrop", function(connection) {
           // if(connection.sourceid == connection.targetid)
           // return false ;
           // else  return true ;
 ///       });