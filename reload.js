function redraw(history,submission){
  
 myNodes=deserialiseC(history);
 mylinks=deserialiseL(history);
 

   
  
 if (myNodes == []) return;
 
   if( mode == "student")
  { for(n=0; n<myNodes.length;n++){ 
    var node= myNodes[n];
   // console.log(node);
    drawnode(node);
  }   
  
}
   if (mode == "submission" )
     
  {
     
    
 submissionNodes=deserialiseC(submission);
 submissionlinks=deserialiseL(submission);
  
 var root = new Node();
 root = findrootnode();  
 var linkedArray= new Array(); 
 var linkedArray2= new Array(); 
 
 
 var linkedArray_sub=new Array();
 var linkedArray2_sub=new Array(); 
  
  
 for(n=0; n<myNodes.length;n++){  
  var node=myNodes[n];  
       //console.log(node);
       var linkedNode= new NodeClass(node)
     // console.log(linkedNode);
     linkedArray.push(linkedNode);  
     linkedArray2.push(linkedNode);
   }  
  
 for(n=0; n<submissionNodes.length;n++){  
  var node=submissionNodes[n];  
       console.log(node);
       var linkedNode= new NodeClass(node)
     // console.log(linkedNode);
     linkedArray_sub.push(linkedNode);  
     linkedArray2_sub.push(linkedNode);
   }  
  
  
  function findlinkednode(id){
    
   for (x=0;x<linkedArray2.length;x++){ 
     var li=linkedArray2[x];
     if(li.id==id){return li;}
   } 
   return "none";
 } 
  
  function findsublinkednode(id){
    
   for (x=0;x<linkedArray2_sub.length;x++){ 
     var li=linkedArray2_sub[x];
     if(li.id==id){return li;}
   } 
   return "none";
 } 
    
     //set children and parents for submission nodes; 
     
     for (j=0;j<linkedArray_sub.length;j++){ 
      
      var linkedNode=linkedArray_sub[j]; 
      var children= new Array(); 
      var parents= new Array(); 
      for(var n=0; n<submissionlinks.length;n++){ 
       var link= submissionlinks[n]; 
       if (link.t==linkedNode.id){
          
         link.Tactivity=linkedNode.node.activity;
         parents.push(findsublinkednode(link.h));
       }
       
       if (link.h == linkedNode.id){
         link.Hactivity=linkedNode.node.activity;
         children.push(findsublinkednode(link.t))
       }
     }
         // linkedNode.node.parentID;  
         // console.log(children);
         linkedNode.prevNode=parents; 
         linkedNode.nextNodes=children;
       }
  
    //set children and parents
  
    for (j=0;j<linkedArray.length;j++){ 
      
      var linkedNode=linkedArray[j]; 
      var children= new Array(); 
      var parents= new Array(); 
      for(var n=0; n<mylinks.length;n++){ 
       var link= mylinks[n]; 
        
        console.log(link);
       if (link.t==linkedNode.id){
         console.log(linkedNode.node.activity);
         link.Tactivity=linkedNode.node.activity;
         parents.push(findlinkednode(link.h));
           
       }
       
       if (link.h == linkedNode.id){
         console.log(linkedNode.node.activity);
         link.Hactivity=linkedNode.node.activity;
         children.push(findlinkednode(link.t))
       }
     }
         // linkedNode.node.parentID;  
         // console.log(children);
         linkedNode.prevNode=parents; 
         linkedNode.nextNodes=children;
       }
  
  
  
     
  
       
       var linkedrootnode=findlinkednode(root.id)
       recursive(linkedrootnode); 
  
       
       var deep =linkedrootnode.level;
       console.log(linkedrootnode);
   
       for(var n=deep; n>0 ;n--){
        
         for (var j=0;j<linkedArray.length;j++){
           var  lnode=  linkedArray[j];
           if(lnode.level== n) {  
            
             var parentnodes=lnode.prevNode; 
             
             var maxValudeofParentEFT=0;
             for(var k=0; k<parentnodes.length; k++ ){
              var nodedata= parentnodes[k].node;
              var parentEFT= nodedata.EFT;
              if(maxValudeofParentEFT < parentEFT)
                {maxValudeofParentEFT = parentEFT; }
            }
            
           // calculateEST(lnode.node,maxValudeofParentEFT);
              compareEFT(lnode.node);
             
              console.log(lnode);
            
          }
        }
      }
  
      var project_duration=0; 
      
      for( var i=1; i<=deep; i++ )   {
       for (var j=0;j<linkedArray.length;j++){
         var lnode= linkedArray[j];
         var nodeEFT= lnode.node.EFT;
         if(project_duration < nodeEFT){
          project_duration =nodeEFT;
          
        } 
      }
    }
     
    for( var i=1; i<=deep; i++ )   {
      for (var j=0;j<linkedArray.length;j++){
       var  lnode=  linkedArray[j]; 
      //  console.log(lnode);
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
         
        // calculateLFT(lnode.node,minValueofChildLST);
        // calculateLST(lnode.node);  
        // calculateFFTF(lnode.node,minValueofChildEST); 
       
       
        }
        
      }
      
    }
     
    
     
  
  for(var n=0; n<linkedArray.length;n++){
     var linkednode = linkedArray[n];
     var node= linkedArray[n].node;  
        for(var m=0; m<linkedArray_sub.length;m++){ 
        var student_linkednode=linkedArray_sub[m];
        var   student_node= linkedArray_sub[m].node;   
        if(student_node.activity ==  node.activity) 
          
           { node.color= "blue";  
             
              console.log(node);
             // compare the pre and next
             // pre 
             
            /* 
              if(node.EFT!=student_node.EFT){node.EFTcolor="red";}else{//node.EFTcolor="black";
                    }
               if(node.EST!=student_node.EST){node.ESTcolor="red";}else{node.ESTcolor="black";}
               if(node.FF!=student_node.FF){node.FFcolor="red";}else{node.FFcolor="black";}
              if(node.LFT!=student_node.LFT){node.LFTcolor="red";}else{node.LFTcolor="black";}
            
               if(node.LST!=student_node.LST){node.LSTcolor="red";}else{node.LSTcolor="black";}
           
              if(node.TF!=student_node.TF){node.TFcolor="red";}else{node.TFcolor="black";}
             console.log(node);
             
             */
             
            console.log(linkednode.prevNode);
            console.log(student_linkednode.prevNode);
             var correctbox = new Array();
             var studentbox  = new Array();
             
             
             for(var k=0; k<linkednode.prevNode.length; k++){
               var temp=  findnode(linkednode.prevNode[k].id); 
                correctbox.push(temp.activity);
               
             }
             
             for(var k=0; k<student_linkednode.prevNode.length; k++){
               var temp=  findsubnode(student_linkednode.prevNode[k].id); 
                studentbox.push(temp.activity);
               
             }
             if( !correctbox.sort().compare(studentbox.sort())) { node.left_red="red";}
             
             //next 
             
              var correctbox_next = new Array();
              var studentbox_next  = new Array();
               for(var k=0; k<linkednode.nextNodes.length; k++){
               var temp=  findnode(linkednode.nextNodes[k].id); 
                
              if(typeof temp != 'undefined' ){
                 correctbox_next.push(temp.activity);}
               
             }
             
             for(var k=0; k<student_linkednode.nextNodes.length; k++){
               var temp=  findsubnode(student_linkednode.nextNodes[k].id); 
               if(typeof temp!= 'undefined' ){
                studentbox_next.push(temp.activity);}
               
             }
             if(! correctbox_next.sort().compare(studentbox_next.sort())) {   node.right_red="red";}
           
            break;
            }
         else {
          node.color="red";
        
           } 
       }
      
    }
  
  
   for(var n=0; n<mylinks.length;n++){ 
       var link= mylinks[n]; 
          link.strokestyle="red";
       //console.log(link);
        for(var m=0; m<submissionlinks.length;m++){ 
          var sublink= submissionlinks[m]; 
          //console.log(sublink);
           if(link.Tactivity== sublink.Tactivity &&link.Hactivity== sublink.Hactivity ){
            link.strokestyle="#666"; break;} 
     }
   
        
        
     }
 
   
   for(var n=0; n<linkedArray.length;n++){
        
        var node= linkedArray[n].node;
        var flag =false;
        var repeat =0;
         
        for(var m=0; m<linkedArray_sub.length;m++){ 
        var   student_node= linkedArray_sub[m].node;  
          
        
        
        if( student_node.activity ==  node.activity) {  
          repeat++;} 
       }
        if(repeat >1) {node.color="red";}
     //repeated will be marked as missing as well
      } 
       
  
      for(var n=0; n<linkedArray.length;n++){
           var   node= linkedArray[n].node;
           
            drawnode(node); 
        }
       
    
    
 }
  
   
if(mode=="correct" && answer_type=="precedence") { 
  
 submissionNodes=deserialiseC(submission);
 submissionlinks=deserialiseL(submission);
  
 var root = new Node();
 root = findrootnode();  
 var linkedArray= new Array(); 
 var linkedArray2= new Array(); 
 
 
 var linkedArray_sub=new Array();
 var linkedArray2_sub=new Array(); 
  
  
 for(n=0; n<myNodes.length;n++){  
  var node=myNodes[n];  
       //console.log(node);
       var linkedNode= new NodeClass(node)
     // console.log(linkedNode);
     linkedArray.push(linkedNode);  
     linkedArray2.push(linkedNode);
   }  
  
 for(n=0; n<submissionNodes.length;n++){  
  var node=submissionNodes[n];  
       console.log(node);
       var linkedNode= new NodeClass(node)
     // console.log(linkedNode);
     linkedArray_sub.push(linkedNode);  
     linkedArray2_sub.push(linkedNode);
   }  
  
  
  function findlinkednode(id){
    
   for (x=0;x<linkedArray2.length;x++){ 
     var li=linkedArray2[x];
     if(li.id==id){return li;}
   } 
   return "none";
 } 
  
  function findsublinkednode(id){
    
   for (x=0;x<linkedArray2_sub.length;x++){ 
     var li=linkedArray2_sub[x];
     if(li.id==id){return li;}
   } 
   return "none";
 } 
    
     //set children and parents for submission nodes; 
     
     for (j=0;j<linkedArray_sub.length;j++){ 
      
      var linkedNode=linkedArray_sub[j]; 
      var children= new Array(); 
      var parents= new Array(); 
      for(var n=0; n<submissionlinks.length;n++){ 
       var link= submissionlinks[n]; 
       if (link.t==linkedNode.id){
          
         link.Tactivity=linkedNode.node.activity;
         parents.push(findsublinkednode(link.h));
       }
       
       if (link.h == linkedNode.id){
         link.Hactivity=linkedNode.node.activity;
         children.push(findsublinkednode(link.t))
       }
     }
         // linkedNode.node.parentID;  
         // console.log(children);
         linkedNode.prevNode=parents; 
         linkedNode.nextNodes=children;
       }
  
    //set children and parents
  
    for (j=0;j<linkedArray.length;j++){ 
      
      var linkedNode=linkedArray[j]; 
      var children= new Array(); 
      var parents= new Array(); 
      for(var n=0; n<mylinks.length;n++){ 
       var link= mylinks[n]; 
        
        console.log(link);
       if (link.t==linkedNode.id){
         console.log(linkedNode.node.activity);
         link.Tactivity=linkedNode.node.activity;
         parents.push(findlinkednode(link.h));
           
       }
       
       if (link.h == linkedNode.id){
         console.log(linkedNode.node.activity);
         link.Hactivity=linkedNode.node.activity;
         children.push(findlinkednode(link.t))
       }
     }
         // linkedNode.node.parentID;  
         // console.log(children);
         linkedNode.prevNode=parents; 
         linkedNode.nextNodes=children;
       }
  
  
  
     
  
       
       var linkedrootnode=findlinkednode(root.id)
       recursive(linkedrootnode); 
  
       
       var deep =linkedrootnode.level;
       console.log(linkedrootnode);
   
       for(var n=deep; n>0 ;n--){
        
         for (var j=0;j<linkedArray.length;j++){
           var  lnode=  linkedArray[j];
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
       for (var j=0;j<linkedArray.length;j++){
         var lnode= linkedArray[j];
         var nodeEFT= lnode.node.EFT;
         if(project_duration < nodeEFT){
          project_duration =nodeEFT;
          
        } 
      }
    }
     
    for( var i=1; i<=deep; i++ )   {
      for (var j=0;j<linkedArray.length;j++){
       var  lnode=  linkedArray[j]; 
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
     
    
     
  
  for(var n=0; n<linkedArray.length;n++){
     var linkednode = linkedArray[n];
     var node= linkedArray[n].node;  
        for(var m=0; m<linkedArray_sub.length;m++){ 
        var student_linkednode=linkedArray_sub[m];
        var   student_node= linkedArray_sub[m].node;   
        if(student_node.activity ==  node.activity) 
          
           { node.color= "green"; 
            
              
             
             
             //
             console.log(node);
             console.log(student_node);
             
             if(node.EFT!=student_node.EFT){node.EFTcolor="red";}else{node.EFTcolor="black";}
               if(node.EST!=student_node.EST){node.ESTcolor="red";}else{node.ESTcolor="black";}
               if(node.FF!=student_node.FF){node.FFcolor="red";}else{node.FFcolor="black";}
              if(node.LFT!=student_node.LFT){node.LFTcolor="red";}else{node.LFTcolor="black";}
            
               if(node.LST!=student_node.LST){node.LSTcolor="red";}else{node.LSTcolor="black";}
           
              if(node.TF!=student_node.TF){node.TFcolor="red";}else{node.TFcolor="black";}
             console.log(node);
           //  // compare the pre and next
             // pre 
            console.log(linkednode.prevNode);
            console.log(student_linkednode.prevNode);
             var correctbox = new Array();
             var studentbox  = new Array();
             
             
             for(var k=0; k<linkednode.prevNode.length; k++){
               var temp=  findnode(linkednode.prevNode[k].id); 
                correctbox.push(temp.activity);
               
             }
             
             for(var k=0; k<student_linkednode.prevNode.length; k++){
               var temp=  findsubnode(student_linkednode.prevNode[k].id); 
                studentbox.push(temp.activity);
               
             }
             if( !correctbox.sort().compare(studentbox.sort())) { node.left_red="red";}
             
             //next 
             
              var correctbox_next = new Array();
              var studentbox_next  = new Array();
               for(var k=0; k<linkednode.nextNodes.length; k++){
               var temp=  findnode(linkednode.nextNodes[k].id); 
                
              if(typeof temp != 'undefined' ){
                 correctbox_next.push(temp.activity);}
               
             }
             
             for(var k=0; k<student_linkednode.nextNodes.length; k++){
               var temp=  findsubnode(student_linkednode.nextNodes[k].id); 
               if(typeof temp!= 'undefined' ){
                studentbox_next.push(temp.activity);}
               
             }
             if(! correctbox_next.sort().compare(studentbox_next.sort())) {   node.right_red="red";}
           
            break;
            }
         else {
          node.color="red";
        
           } 
       }
      
    }
  
  
   for(var n=0; n<mylinks.length;n++){ 
       var link= mylinks[n]; 
          link.strokestyle="red";
       //console.log(link);
        for(var m=0; m<submissionlinks.length;m++){ 
          var sublink= submissionlinks[m]; 
          //console.log(sublink);
           if(link.Tactivity== sublink.Tactivity &&link.Hactivity== sublink.Hactivity ){
            link.strokestyle="#666"; break;} 
     }
  
  
     
     
        
        
     }
 
   
   for(var n=0; n<linkedArray.length;n++){
        
        var node= linkedArray[n].node;
        var flag =false;
        var repeat =0;
         
        for(var m=0; m<linkedArray_sub.length;m++){ 
        var   student_node= linkedArray_sub[m].node;  
          
        
        
        if( student_node.activity ==  node.activity) {  
          repeat++;} 
       }
        if(repeat >1) {node.color="red";}
     //repeated will be marked as missing as well
      } 
       
  
      for(var n=0; n<linkedArray.length;n++){
           var   node= linkedArray[n].node;
           
            drawnode(node); 
        }
   
   
  addConnections(mylinks);
   
 }
  
  else if(mode=="correct" && answer_type=="arrow"){
    
    for(n=0; n<myNodes.length;n++){ 
       var node= myNodes[n];
    // console.log(node);
       drawnode(node);  
   } 
    
    //data structure first
    // nodelist
    
  function findlinkednode(id){ 
    
    for (x=0;x<linkedArray2.length;x++){ 
      var li=linkedArray2[x];
      if(li.id==id){return li;}
    } 
    return "none";
 } 
    
     var linkedArray= new Array(); 
     var linkedArray2= new Array();  
    
     for(n=0; n<myNodes.length;n++){  
        var node=myNodes[n];  
       var linkedNode= new NodeClass(node);
     linkedArray.push(linkedNode);  
     linkedArray2.push(linkedNode);
   } 
    
     for (j=0;j<linkedArray.length;j++){ 
      
      var linkedNode=linkedArray[j]; 
      var children= new Array(); 
      var parents= new Array(); 
      for(var n=0; n<mylinks.length;n++){ 
       var link= mylinks[n]; 
       if (link.t==linkedNode.id){
         parents.push(findlinkednode(link.h));
       }
       
       if (link.h == linkedNode.id){
         children.push(findlinkednode(link.t))
       }
     }    
      linkedNode.prevNode=parents; 
      linkedNode.nextNodes=children;  
      console.log(linkedNode);
  
     } 
    
    // connectionlist
    
   var linkedconnections=new Array(); 
   var linkedconnectionsserach=new Array(); 
    
    for(x=0; x<mylinks.length; x++ ){
    
      var   connector =  mylinks[x];
      var linkedconnector= new connectionClass(connector);  
    
    /*  var predecessor= new Array(); 
      var successor= new Array();   
      
      linkedconnector.prevLinks=predecessor; 
      linkedconnector.nextLinks=findsuccessor;            */
      linkedconnections.push(linkedconnector); 
      
      
    }
    
    
   for (j=0;j<linkedArray.length;j++){ 
      
      var linkedNode=linkedArray[j]; 
      var predessors=Array();
      var successors=Array();
     
      predessors= linkedNode.prevNode;
      successors=linkedNode.nextNodes;
     
       //findlink();
       var prevlink=Array();
      for (p=0; p<predessors.length;p++){
        var head=predessors[p].id;
        var link=findlink(head,linkedNode.id);
         prevlink.push(link);  
     }
       linkedNode.prevconnectors=prevlink;
     
      var suclink=Array();
      for (s=0; s<successors.length;s++){
        var tail=successors[s].id;
        var link=findlink(linkedNode.id,tail);
         suclink.push(link);  
     }
       linkedNode.nextconnectors=suclink;
     
       
   }
    
     
    
     var root = findrootnode();  
      var sub_root= findsubrootnode();
    
    
     var linkedrootnode= findlinkednode(root.id)
     recursive(linkedrootnode); 
    
     var deep =linkedrootnode.level;
     var maxvalueofEFT=0;
    
       for(var n=deep; n>0 ;n--){
        
         for (var j=0;j<linkedArray.length;j++){
           var  lnode=  linkedArray[j];
           if(lnode.level== n) {   
             var parentlinks=lnode.prevconnectors;
             var maxValudeofParentEFT=0; 
             for(var k=0; k<parentlinks.length; k++ ){
              var linkdata= parentlinks[k];
              
              var parentEFT= linkdata.EFT;
              if(maxValudeofParentEFT < parentEFT)
                {maxValudeofParentEFT = parentEFT; 
                 if(maxValudeofParentEFT>maxvalueofEFT){maxvalueofEFT=maxValudeofParentEFT;}
                }
            }
           
             var nextlinks=lnode.nextconnectors; 
             for(var k=0; k<nextlinks.length;k++ ){
              var linkdata= nextlinks[k]; 
                calculateEST(linkdata,maxValudeofParentEFT);
                calculateEFT(linkdata); 
            }
             
             
             
            
          }
        }
      }
    
    
     for( var i=1; i<=deep; i++ )   {
       
      for (var j=0;j<linkedArray.length;j++){
       var  lnode=  linkedArray[j]; 
       if(lnode.level==i) {
         var childrelinks=lnode.nextconnectors;   
         var ValueofChildEFT=maxvalueofEFT;
         var ValueofChildEST=maxvalueofEFT;
         
       
         for(var k=0; k< childrelinks.length; k++ ){
          var linkdata= childrelinks[k]; 
          var childLST= linkdata.LST;
          var childEST= linkdata.EST;
          if(childLST < ValueofChildEFT){  
            ValueofChildEFT=childLST;   }  
           
           if(childEST< ValueofChildEST) {
              ValueofChildEST=childEST; 
              
              }
           
           
         }
         
         
         
           var prelinks=lnode.prevconnectors; 
             for(var k=0; k<prelinks.length;k++ ){
              link=prelinks[k];  
              calculateLFT(link, ValueofChildEFT);
              calculateLST(link);  
              calculateFFTF(link,ValueofChildEST);   
                } 
        }
      }
    }
    
    
  
    
     addConnections(mylinks);
    
  }
}

