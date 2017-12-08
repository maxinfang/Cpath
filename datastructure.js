function convert(Nodes,links){ 
   
  var linkedArray= new Array(); 
  var linkedArray2= new Array();  
   
  for(n=0; n<Nodes.length;n++){  
       var node=Nodes[n];   
       var linkedNode= new NodeClass(node); 
     linkedArray.push(linkedNode);  
     linkedArray2.push(linkedNode);
   }  
   
  function findlinkednode(id){
    
   for (x=0;x<linkedArray2.length;x++){ 
     var li=linkedArray2[x];
     if(li.id==id){return li;}
   } 
   return "none";
    
 } 
   //set up the parents and children;
   
   for (j=0;j<linkedArray.length;j++){ 
      
      var linkedNode=linkedArray[j]; 
      var children= new Array(); 
      var parents= new Array(); 
      for(var n=0; n<mylinks.length;n++){ 
       var link= links[n]; 
        
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
         
         linkedNode.prevNode=parents; 
         linkedNode.nextNodes=children;
       }
  
  
  
   return linkedArray;
  
  
 
};

function findlinkednodebyid(id,linkedArray){ 
    
    for (x=0;x<linkedArray.length;x++){ 
      var li=linkedArray[x];
      if(li.id==id){return li;}
    } 
    return "none";
 } 


function findnodebyid(id,myNodes){ 
  for(n=0; n<myNodes.length;n++){
    
    var node=myNodes[n];
    
    if (node.id==id) {
     return node; 
   } 
   
   
 }
}


function findrootnodebyid(myNodes,mylinks){

 for(var m=0; m<myNodes.length;m++){ 
   
   var node= myNodes[m]; 
   var id = node.id; 
   
   var count =0;
   for(var n=0; n<mylinks.length;n++){
    var link=mylinks[n];
    if (link.t==id) {
      count++;
      console.log("link:++"+link);
    }
  }
  if (count==0) {
   
   return id;
 }
 

}


}
