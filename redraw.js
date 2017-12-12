function redraw(correct_string,student_string){
  
     
   if(correct_string != "" ){
     
     answer_Nodes=deserialiseC(correct_string);
     answer_Links=deserialiseL(correct_string); 
     
  }
  
   if(student_string != "" ){
  
   submission_Nodes=deserialiseC(student_string);
   submission_Links=deserialiseL(student_string); 
   
  }
  
  if(answer_type=="precedence"){ 
    
       var linkedArray_answer= new Array();  
       var linkedArray_submission= new Array(); 
       linkedArray_answer = convert(answer_Nodes,answer_Links); 
       linkedArray_submission = convert(submission_Nodes,submission_Links); 
    
       correct_root_id=findrootnodebyid(answer_Nodes,answer_Links); 
       submission_root_id=findrootnodebyid(submission_Nodes,submission_Links);
    
       var linkedrootnode_correct= findlinkednodebyid(correct_root_id,linkedArray_answer);
    
       var linkedrootnode_submission= findlinkednodebyid(submission_root_id,linkedArray_submission); 
    
      recursive(linkedrootnode_correct); 
      recursive(linkedrootnode_submission);
    
     // calculate the right answer
       var deep_answer =linkedrootnode_correct.level; 
       var deep_student =linkedrootnode_submission.level;
       calculate(deep_answer,linkedArray_answer); 
       comparecheck(deep_student,linkedArray_submission);
  }
    
 //mode= presedence 
  
     if(mode=="correct"){ 
       
       
       
         for(var n=0; n<linkedArray_answer.length;n++){
           
            var answer_linkednode=linkedArray_answer[n];
            var answer_node= linkedArray_answer[n].node;  
               
            for(var m=0; m<linkedArray_submission.length;m++){ 
              
               var student_linkednode=linkedArray_submission[m];
               var   student_node= linkedArray_submission[m].node;
              
                   if(student_node.activity ==  answer_node.activity) { 
                       
                    if(answer_node.EFT!=student_node.EFT && student_node.EFTcolor=="red") {answer_node.EFTcolor="red"; }  
                    if(answer_node.EST!=student_node.EST && student_node.ESTcolor=="red"){answer_node.ESTcolor="red";} 
                    if(answer_node.FF!=student_node.FF && student_node.FFTcolor=="red"){answer_node.FFcolor="red";} 
                    if(answer_node.LFT!=student_node.LFT && student_node.LFTcolor=="red"){answer_node.LFTcolor="red";} 
                    if(answer_node.LST!=student_node.LST && student_node.LSTcolor=="red"){answer_node.LSTcolor="red";} 
                    if(answer_node.TF!=student_node.TF && student_node.TFcolor=="red" )  {answer_node.TFcolor="red";}
                      
                  
                  
                  } 
                
              }
                
           }
       
       // compare the subbmission page 
       
       
       
       
       
       
       //highlight the wrong places.
       
        
       
       
       //draw nodes.
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

