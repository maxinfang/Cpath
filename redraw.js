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
                       
                    if(student_node.EFTcolor!="red"){answer_node.EFTcolor="default";}
                    else if(student_node.EFT != answer_node.EFT)
                    {answer_node.EFTcolor="black"; }
                    else{student_node.EFTcolor="red";  }
                     
                      
                      
                    if(student_node.ESTcolor!="red"){answer_node.ESTcolor="red";} 
                    else if(student_node.EST != answer_node.EST)
                    {answer_node.ESTcolor="black";}
                      else{student_node.ESTcolor="red";  }
                     
                    if(student_node.FFcolor!="red"){answer_node.FFcolor="red";} 
                    else if(student_node.FF != answer_node.FF)
                    { answer_node.FFcolor="black";}
                      else{student_node.FFcolor="red";  }
                     
                    if(student_node.LFTcolor!="red"){answer_node.LFTcolor="red";}
                    else if(student_node.LFT !=answer_node.LFT)
                    { answer_node.LFTcolor="black";} 
                      else{student_node.LFTcolor="red";  }
                     
                    if(student_node.LSTcolor!="red"){answer_node.LSTcolor="red";} 
                      else if(student_node.LST !=answer_node.LST)
                    { answer_node.LSTcolor="black";} 
                      else{student_node.LSTcolor="red";  }
                     
                     
                    if(student_node.TFcolor!="red" ) {answer_node.TFcolor="red";}
                       else if(student_node.TF !=answer_node.TF)
                    { answer_node.TFcolor="black";} 
                       else{student_node.TFcolor="red";  }
                      
                  
                  } 
                
              }
                
           }
       
       // compare the subbmission page
     //checking nodes missing // covert this to a function as well.
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

