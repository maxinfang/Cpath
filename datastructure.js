
function checkingDup(Array_one,Array_two){

  for(var n=0; n<Array_one.length;n++){
        
        var node= Array_one[n].node;
        var flag =false;
        var repeat =0;
         
        for(var m=0; m<Array_two.length;m++){ 
        var   two_node= Array_two[m].node;  
          
        
        
        if( two_node.activity ==  node.activity) {  
          repeat++;} 
       }
        if(repeat >1) {node.color="red";}
     //repeated will be marked as missing as well
      } 



}


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
      for(var n=0; n<links.length;n++){ 
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

function calculate(deep,linkedArray){
  
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
  
   
  
  }


function comparecheck(deep,linkedArray){

 
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
            
            compareEST(lnode.node,maxValudeofParentEFT);
            compareEFT(lnode.node); 
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
         
         compareLFT(lnode.node,minValueofChildLST);
         compareLST(lnode.node);  
         compareFFTF(lnode.node,minValueofChildEST);   
        }
        
      }
      
    }
  





}

