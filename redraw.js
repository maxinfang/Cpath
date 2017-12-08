function redraw(correct_string,student_string){
  
     
   if(correct_string != "" ){
     
     answer_Nodes=deserialiseC(correct_string);
     answer_Links=deserialiseL(correct_string); 
     
  }
  
   submission_Nodes=deserialiseC(student_string);
   submission_Links=deserialiseL(student_string); 
   
  
   
  
  
  if(answer_type=="precedence"){ 
    
       var linkedArray_answer= new Array();  
       var linkedArray_submission= new Array();
    
       linkedArray_answer = convert(answer_Nodes,answer_Links); 
       linkedArray_submission = convert(submission_Nodes,submission_Links); 
    
       correct_root_id=findrootnodebyid(answer_Nodes,answer_Links);
       submission_root_id=findrootnodebyid(submission_Nodes,submission_Links);
    
       var linkedrootnode_correct= findlinkednodebyid(correct_root_id,linkedArray_answer);
       var linkedrootnode_submission= findlinkednodebyid(submission_root_id,linkedArray_submission);
    
     
      
      //set the deep;
    
      recursive(linkedrootnode_correct); 
      recursive(linkedrootnode_submission);
    
     // calculate the right answer
        var deep =linkedrootnode_correct.level;
       console.log(linkedrootnode_correct);
       for(var n=deep; n>0 ;n--){
        
         for (var j=0;j<linkedArray_answer.length;j++){
           var  lnode=  linkedArray_answer[j];
           if(lnode.level== n) {  
            
             var parentnodes=lnode.prevNode; 
             
             var maxValudeofParentEFT=0;
             for(var k=0; k<parentnodes.length; k++ ){
              var nodedata= parentnodes[k].node;
              var parentEFT= nodedata.EFT;
              if(maxValudeofParentEFT < parentEFT)
                {maxValudeofParentEFT = parentEFT; }
            }
            
            calculateEST(lnode.node,maxValudeofParentEFT);
            calculateEFT(lnode.node);
            
          }
        }
      }
  
      var project_duration=0; 
      
      for( var i=1; i<=deep; i++ )   {
       for (var j=0;j<linkedArray_answer.length;j++){
         var lnode= linkedArray_answer[j];
         var nodeEFT= lnode.node.EFT;
         if(project_duration < nodeEFT){
          project_duration =nodeEFT;
          
        } 
      }
    }
     
    for( var i=1; i<=deep; i++ )   {
      for (var j=0;j<linkedArray_answer.length;j++){
       var  lnode=  linkedArray_answer[j]; 
        console.log(lnode);
       if(lnode.level==i) {
        var childrenodes=lnode.nextNodes;  
        var minValueofChildLST=project_duration;
        var minValueofChildEST=project_duration;
        for(var k=0; k< childrenodes.length; k++ ){
          var nodedata= childrenodes[k].node;
          var childLST= nodedata.LST; 
          var childEST =  nodedata.EST;
          if( minValueofChildLST > childLST)
            {minValueofChildLST = childLST;
            }
            if(  minValueofChildEST > childEST){
             minValueofChildEST = childEST;
           }
         }
         
         calculateLFT(lnode.node,minValueofChildLST);
         calculateLST(lnode.node);  
         calculateFFTF(lnode.node,minValueofChildEST);   
        }
        
      }
      
    }
      
  
  }
   
  
 //mode= presedence 
  
     if(answer_type=="precedence"){ 
         for(var n=0; n<linkedArray_answer.length;n++){
           var   node=linkedArray_answer[n].node;
            console.log(node);
            drawnode(node); 
        }
   
   
  addConnections(answer_Links);
     
     }
            //if student then draw student pictures
  
  
            //if correct then draw green pictures
  
  
            //if submit then draw blue pictures
  
  
  
  //mode= arrow
  
  
  
  
  
  
  
  
  
  
  
  
  
}

