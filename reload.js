function redraw(history){
  
 myNodes=deserialiseC(history);
 mylinks=deserialiseL(history);
 
 
 if (myNodes == []) return;
 
 if(mode == "submission")
  { for(n=0; n<myNodes.length;n++){ 
    var node= myNodes[n];
    console.log(node);
    drawnode(node);
  }   
  
}
  
  
  
  

 
if(mode=="correct" && answer_type=="precedence") { 
 var root = new Node();
 root = findrootnode();  
 var linkedArray= new Array(); 
 var linkedArray2= new Array();  
 for(n=0; n<myNodes.length;n++){  
  var node=myNodes[n];  
       //console.log(node);
       var linkedNode= new NodeClass(node)
     // console.log(linkedNode);
     linkedArray.push(linkedNode);  
     linkedArray2.push(linkedNode);
   } 
   
   function recursive(node){  
    var currentnode= node;
    var nextnodes= node.nextNodes;
    var nodedata= node.node; 
    var length= nextnodes.length;
    
     
    if( length>0) {
      var  prob=0;
      var max = 0;
      for (var x=0;x<length;x++){
        var childnode = nextnodes[x];  
        var childLevel = recursive(childnode);  
        
        if( max < childLevel){
          max=childLevel;  
          
        }
        
      } 
      node.level=max+1;
      return node.level
      
    } 
    
    node.level=1;
    return node.level;
    
  }
  
  function findlinkednode(id){
    
   for (x=0;x<linkedArray2.length;x++){ 
     var li=linkedArray2[x];
     if(li.id==id){return li;}
   } 
   return "none";
 } 
 
 
 
    // console.log(du[root.activity]);
    // console.log(du[root.activity]);
    
    
    
    
    
     //set children and parents; 
     
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
     
     for(n=0; n<myNodes.length;n++){ 
       var node= myNodes[n];
     //console.log(node);
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
    
     var linkedArray= new Array(); 
     var linkedArray2= new Array();  
    
     for(n=0; n<myNodes.length;n++){  
        var node=myNodes[n];  
       //console.log(node);
       var linkedNode= new NodeClass(node);
     // console.log(linkedNode);
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
     //  console.log(linkedNode);
  
     } 
    
    // connectionlist
    
   var linkedconnections=new Array(); 
   var linkedconnectionsserach=new Array(); 
    
    for(x=0;x<mylinks.length; x++ ){
    
      var   connector =  mylinks[x];
      var linkedconnector= new connectionClass(connector);  
    
    /*  var predecessor= new Array(); 
      var successor= new Array();   
      
      linkedconnector.prevLinks=predecessor; 
      linkedconnector.nextLinks=findsuccessor;            */
      linkedconnections.push(linkedconnector); 
      linkedconnectionsserach.push(linkedconnector);
      
    }
    
    
    for (j=0;j<linkedArray.length;j++){ 
    
    
    
    
    }
    
    
    
    
    
      function findpredessor(connector){
       return  1;
       }
    
      function findsuccessor(connector){
         var successor = new Array();
   
         for(n=0; n<mylinkedArr.length;n++){
         var link =mylinks[n];
         if(link.h == connector.t) 
          successor.push(link);
       }
      return successor;
      }
    
     // addConnections(mylinks);    
    
    
    
    /*
    
    var root = new Node();
    root = findrootnode(); 
    
    var predecessor= new Array(); 
    var successor= new Array();  
    
        
    for(n=0; n<mylinks.length;n++){
         var link=mylinks[n]; 
            if(  link.h == root.id)  
            { var linkedconnection= new connectionClass(link); 
          console.log(linkedconnection);
          linkedconnection.prevNode=null;
          linkedconnection.nextNode=findsuccessor(link);
         //set up relationship? 
          console.log(linkedconnection);}
    
    }
      
   
      
    
     
    

    for(n=0; n<mylinks.length;n++){
    var link=mylinks[n]; 
    addConnection(link);  
  }
*/    
    
   
  
  }
  
  
  
  
 
 if(mode =="student"){ 
  console.log(myNodes);
  for(n=0; n<myNodes.length;n++){ 
   var node= myNodes[n];
   console.log(node);
   drawnode(node); 
 }
 sentToparentPage();
}
}
