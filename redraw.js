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
  
     if(mode=="correct"&& answer_type=="precedence"){ 
       
       
       
         for(var n=0; n<linkedArray_answer.length;n++){
           
            var answer_linkednode=linkedArray_answer[n];
            var answer_node= linkedArray_answer[n].node;  
               
            for(var m=0; m<linkedArray_submission.length;m++){ 
              
               var student_linkednode=linkedArray_submission[m];
               var   student_node= linkedArray_submission[m].node;
              
                   if(student_node.activity ==  answer_node.activity) { 
                       
                    if(answer_node.EFT==student_node.EFT ){
               if(student_node.EFTcolor == "red"){answer_node.EFTcolor="black";}
               else{answer_node.EFTcolor="default";}
               
             } else{answer_node.EFTcolor=student_node.EFTcolor;}
             if(answer_node.EST==student_node.EST ){
               if(student_node.ESTcolor == "red"){answer_node.ESTcolor="black";}
               else{answer_node.ESTcolor="default";}  
             
             }  else{answer_node.ESTcolor=student_node.ESTcolor;}
                     
             if(answer_node.FF==student_node.FF)  {
               if(student_node.FFcolor == "red"){answer_node.FFcolor="black";}
               else{answer_node.FFcolor="default";}   
             }   else{
                    answer_node.FFcolor=student_node.FFcolor;;
             }
             if(answer_node.LFT==student_node.LFT){
               
               if(student_node.LFTcolor == "red"){answer_node.LFTcolor="black";}
               else{answer_node.LFTcolor="default";}   
             
             } else{
                    answer_node.LFTcolor=student_node.LFTcolor;
             }
                     
                     
             if(answer_node.LST==student_node.LST){
               
                 if(student_node.LSTcolor == "red"){answer_node.LSTcolor="black";}
               else{answer_node.LSTcolor="default";} 
             } else{answer_node.LSTcolor=student_node.LSTcolor;}
                     
                     
             if(answer_node.TF==student_node.TF  ){
                 if(student_node.TFcolor == "red"){answer_node.TFcolor="black";}
               else{answer_node.TFcolor="default";} 
               
                 } else{
                   answer_node.TFcolor=student_node.TFcolor;
                 }
                     
                     
                     
                     
                     
                     
                     
            }     
                
              }
                
           }
       
       // compare the subbmission page
     //checking nodes missing // covert this to a function as well.
       
        for(var n=0; n<linkedArray_answer.length;n++){
        
        var answer_node= linkedArray_answer[n].node;
        var flag ="exsit";
        var repeat =0;
      
        
        for(var m=0; m<linkedArray_submission.length;m++){ 
          var   student_node= linkedArray_answer[m].node;  
         
           
          
          
       
       }
        
     //repeated will be marked as missing as well
      } 
       
       
       
       
       
       checkingDup(linkedArray_answer,linkedArray_submission);
       
       
     
     
       
       
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

