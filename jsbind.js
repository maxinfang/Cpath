 
jsPlumb.bind("dblclick", function(conn) { 
       // var parentId=$('#'+conn.sourceId).parent().attr('id');
       // var childId=$('#'+conn.targetId).parent().attr('id');
       // var link = findlink(parentId,childId);
       // console.log(mylinks);
       // console.log(link.id); 
       var box= conn.getOverlays();
          
        //jsPlumb.detach(conn);  
       // if(box.isVisiable==true){box.setVisiable(false)} 
        // console.log(conn);
  
       if(box[1].visible==true){
              box[1].setVisible(false);
          }
       else{
         box[1].setVisible(true);
          }
   
     }); 


 

