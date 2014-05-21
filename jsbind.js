
jsPlumb.bind("dblclick", function(conn) { 
        var parentId=$('#'+conn.sourceId).parent().attr('id');
        var childId=$('#'+conn.targetId).parent().attr('id');
        var link = findlink(parentId,childId);
       
        console.log(mylinks);
        var box= conn.getOverlay(link.id);
        console.log(box);
        //jsPlumb.detach(conn);  
       // if(box.isVisiable==true){box.setVisiable(false)} 
        // console.log(conn);
  
       if(box.visible==true){
              box.setVisible(false);
          }
       else{box.setVisible(true);
          }
   
     }); 


 

