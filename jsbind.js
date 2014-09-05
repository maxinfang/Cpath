
jsPlumb.bind("connectionDragStop", function(conn) { 
   //      console.log("connectionDragStop");    
               })
 
  
  
jsPlumb.bind("connection",  function(info, originalEvent) {
  //  var conn = info.connection;
  //var parentId=$('#'+conn.sourceId).parent().attr('id');
 /// var childId=$('#'+conn.targetId).parent().attr('id');
  //console.log(childId);
  
         
    })
 
 
 
 jsPlumb.bind("dblclick", function(conn) {
        // console.log(mylinks);
        // console.log(link.id); 
        var box= conn.getOverlays(); 
       
        //jsPlumb.detach(conn);  
        // if(box.isVisiable==true){box.setVisiable(false)} 
        //console.log(box);
      
        
        if(box[1].visible==true){
              box[1].setVisible(false);
          }
       else{
         box[1].setVisible(true);
          }
   
     }); 
        
   
  
jsPlumb.bind("connectionDetached", function(info, originalEvent) {
  
})

// jsPlumb.bind("beforeDrop", function(connection) {
           // if(connection.sourceid == connection.targetid)
           // return false ;
           // else  return true ;
 ///       });