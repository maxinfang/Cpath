
var CL_SEPARATOR='a';

var C_SEPARATOR='C';
    
var L_SEPARATOR='L';
    
var C_field_SEPARATOR='c';

var L_field_SEPARATRo='c';

var Label_SEPARATOR='d';

var Data_SEPARATOR='D';




function connector(id,h,t,EST,EFT,LST,LFT,FF,TF){
      
       this.h="";
       this.t="";
       this.EST="";
       this.EFT=""; 
       this.LST="";
       this.LFT="";
       this.FF="";
       this.TF="";
       this.activity="";
}

function Node(id,type,parent,top,left,activity,EST,EFT,LST,LFT,FF,TF){            
       this.id = ""; 
       this.top ="";
       this.left=""; 
       this.activity="";
       this.EST="";
       this.EFT=""; 
       this.LST="";
       this.LFT="";
       this.FF="";
       this.TF="";                                                         
     }  

 
 function NodeClass(node) {  
  this.id=node.id;
  this.prevNode=null;       
  this.nextNodes=null;       
  this.node=node;  
  this.level=0; 
  
}



function deserialiseL(string){ 
  
       var array= new Array(); 
       var stringwithCandL=string.split('a');  
       var stringlink=stringwithCandL[1]; 
       if(stringlink.length ==0) return [];  
       console.log("!!!!!!!!!!!!!!!!!!");
       var link= stringlink.split('L'); 
 
       for(i=1;i<link.length;i++){ 
       var shapeanddata=link[i].split('D'); 
      
       var linkAttribute= shapeanddata[0].split('c');
        
       var dataAttribute=shapeanddata[1].split('d');
         console.log(dataAttribute);
       var cc = new connector();
          
       cc.h= linkAttribute[1]
       cc.t= linkAttribute[2];
       
       cc.activity=dataAttribute[1];
       cc.EST=dataAttribute[2];
       cc.EFT=dataAttribute[3];
       cc.LST=dataAttribute[4];
       cc.LFT=dataAttribute[5];
       cc.FF=dataAttribute[6];
       cc.TF=dataAttribute[7]; 
       
        array.push(cc);
      }
    
       
    return array;
  
}




function deserialiseC(string){ 
       var array= new Array(); 
       var stringwithCandL=string.split('a'); 
       var stringnode=stringwithCandL[0];
       var stringlink=stringwithCandL[1];
  
       var stringnode=  stringnode.split('C');
        
       for(i=1;i<stringnode.length;i++){ 
       var shapeanddata=stringnode[i].split('D'); 
       //console.log(shapeanddata);
       var nodeAttribute=shapeanddata[0].split('c');
       //console.log(nodeAttribute);
       var node = new Node();
       node.id= nodeAttribute[1]
       node.top=nodeAttribute[2];
       node.left=nodeAttribute[3];
       var dataAttribute=shapeanddata[1].split('d');
      // console.log(dataAttribute);
       node.activity=dataAttribute[1];
       node.EST=dataAttribute[2];
       node.EFT=dataAttribute[3];
       node.LST=dataAttribute[4];
       node.LFT=dataAttribute[5];
       node.FF=dataAttribute[6];
       node.TF=dataAttribute[7];
      
       array.push(node);
          
       }  
     return array;   
  
}


function serialise(myNodes,mylinks){
  
  var answervalue =""; 
      
      for(l=0;l<myNodes.length;l++){
      var thisnode=myNodes[l];  
      answervalue+=C_SEPARATOR;  
      answervalue+=C_field_SEPARATOR; 
      answervalue+=thisnode.id;
      answervalue+=C_field_SEPARATOR; 
      answervalue+=thisnode.top;
      answervalue+=C_field_SEPARATOR;
      answervalue+=thisnode.left;
      answervalue+=C_field_SEPARATOR;  
      answervalue+=Data_SEPARATOR;
      answervalue+=Label_SEPARATOR;
        console.log(thisnode);
      answervalue+=thisnode.activity;
      answervalue+=Label_SEPARATOR;
      answervalue+=thisnode.EST; 
      answervalue+=Label_SEPARATOR;
      answervalue+=thisnode.EFT;
      answervalue+=Label_SEPARATOR; 
      answervalue+=thisnode.LST;
      answervalue+=Label_SEPARATOR;
      answervalue+=thisnode.LFT;
      answervalue+=Label_SEPARATOR;
      answervalue+=thisnode.FF;
      answervalue+=Label_SEPARATOR;
      answervalue+=thisnode.TF; 
    } 
      answervalue+=CL_SEPARATOR='a';
  
   for(l=0;l<mylinks.length;l++){
      var thislink=mylinks[l]; 
     //Cc"id"c"top"c"left"c
      answervalue+=L_SEPARATOR;   
      answervalue+=C_field_SEPARATOR; 
      answervalue+=thislink.h;
      answervalue+=C_field_SEPARATOR; 
      answervalue+=thislink.t;
      answervalue+=C_field_SEPARATOR;
       answervalue+=C_field_SEPARATOR;  
      answervalue+=Data_SEPARATOR;
      answervalue+=Label_SEPARATOR;
      answervalue+=thislink.activity;
      answervalue+=Label_SEPARATOR;
      answervalue+=thislink.EST;
       
      answervalue+=Label_SEPARATOR;
      answervalue+=thislink.EFT;
      answervalue+=Label_SEPARATOR;
        
      answervalue+=thislink.LST;
      answervalue+=Label_SEPARATOR;
      answervalue+=thislink.LFT;
      answervalue+=Label_SEPARATOR;
      answervalue+=thislink.FF;
      answervalue+=Label_SEPARATOR;
      answervalue+=thislink.TF; 
    
      //"Actvity"d
        
    } 
      
      return answervalue;
      
} 

function generateID(myNodes){
      
  if (typeof(myNodes) == "undefined" ) {return 1;}
      
      var myNodesArray=myNodes;
      var max=0;   
  
  
     for(n=0; n<myNodesArray.length;n++){ 
         var node= myNodes[n]; 
          node.id >=max;
          max=node.id 
       } 
      var ret= Number(max) +1;
      return ret;
      
      };


function findnode(id){ 
        for(n=0; n<myNodes.length;n++){
          
        var node=myNodes[n];
           
        if (node.id==id) {
         return node; 
        } 
          
       
       }
}

function findrootnode(){

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
         console.log("root:"+id); 
         return findnode(id);
       }
      

}
  
  
}

function findlink(h,t){
  
for(var n=0; n<mylinks.length;n++){ 
         var link= mylinks[n]; 
     
     if (link.h == h && link.t== t)
     
     {    
       return link; 
     };
      
      return null;
   }
      return  null ;
}

function deletelink(h,t){

       var link = findlink(h,t);
       
       if (link == null) console.log("null");
       var index = mylinks.indexOf(link);  
     
       mylinks.splice(index,1);
     
        
     if(mode == "student"){ sentToparentPage();}
   return;


}

function generateLinkID(mylinks){
      
  if (typeof(mylinks) == "undefined" ) {return 10000;}
      
      var mylinksArray=mylinks;
      var max=0;  
      
      for(n=0; n<mylinks.length;n++){ 
         var mylink= mylinks[n]; 
          mylink.id >=max;
          max=mylink.id 
       } 
      var ret= Number(max) +1;
      return ret;
      
      };


function addNewNode(node){

     myNodes.push(node);
     sentToparentPage();
   }

function addNewLink(link){

     mylinks.push(link);
     sentToparentPage();
   }

function  emptymyNodes(){
 
   }

function updatelink(link,property,con){

  var mylinkArray=mylinks;
  
    
     var ll= findlink(link.h,link.t)
    if(ll){
           if(property=="activity"){ll.activity=link.activity;
                                    if (ll.activity==0){
                                      con.setPaintStyle({lineWidth: 2, 
                                       strokeStyle:"#666",
                                        dashstyle:"4 2"})
                                       } 
                                    else{
                                      con.setPaintStyle({lineWidth: 2, 
                                       strokeStyle:"#666",
                                       dashstyle:"0 0"})
                                      } 
                                    } 
           if(property=="EST"){ll.EST=link.EST;} 
           if(property=="EFT"){ll.EFT=link.EFT;}
            if(property=="LST"){ll.LST=link.LST;} 
           if(property=="LFT"){ll.LFT=link.LFT;}
            if(property=="FF"){ll.FF=link.FF;} 
           if(property=="TF"){ll.TF=link.TF;}
    }
   if(mode == "student"){ sentToparentPage();}
   return;
  
}


function updateNode(node,property){
      var myNodesArray=myNodes;
      
      for(n=0; n<myNodesArray.length;n++){ 
         var nn= myNodes[n]; 
        if(  nn.id== node.id){
          if(property=="top") {nn.top=node.top;}
          if(property=="left"){nn.left=node.left;} 
           if(property=="activity"){nn.activity=node.activity;} 
           if(property=="EST"){nn.EST=node.EST;} 
           if(property=="EFT"){nn.EFT=node.EFT;}
            if(property=="LST"){nn.LST=node.LST;} 
           if(property=="LFT"){nn.LFT=node.LFT;}
            if(property=="FF"){nn.FF=node.FF;} 
           if(property=="TF"){nn.TF=node.TF;}
          
        }
       } 
  
      console.log(myNodes);
   if(mode == "student"){ sentToparentPage();}
   return;
       
      
      };


 
  function  giveWarning(){
     
           console.log(myNodes);
       
      var numberOfnoParent=0;
  for(n=0; n<myNodes.length;n++){
        var node= myNodes[n];
        var tail= node.id;
         var istailexist=0;
        for(var l=0; l<mylinks.length;l++){ 
         var link= mylinks[l]; 
          if (link.t == tail ){ 
            istailexist=1;break;
          } 
          }   
          if (istailexist==0) numberOfnoParent++;
        }
    
        if (numberOfnoParent>1) {
           
           $("body").css("background-color","#fee");
           $("p").text("Warning: Not all nodes are connected!");
            
         }  
            else{
              $("body").css("background-color","transparent");
              $("p").text("");
            
       }; 
         
            
}
 

function sentToparentPage()
{   giveWarning();
    console.log(mylinks);
 answervalue= serialise(myNodes,mylinks);
   console.log(answervalue);
  var elem= parent.document.getElementsByTagName("input"); 
  
  var arr = new Array();
  var i = 0;
  var iarr = 0;
  var att;
  for(; i < elem.length; i++) {
        att = elem[i].getAttribute("type");
    if(att =="text") {
       elem[i].value   = answervalue;
    }  
         
    }
    
    
}


function calculateEFT(node){
   node.EFT= +du[node.activity] +  +node.EST;
  if( node.EFT==0){node.EFT="0"}
   return node.EFT;
}

 


function  calculateEST(node,value){
  if(value == 0) {value = "0";}
   node.EST=value;
   return true;
   
};




function calculateLFT(node,value){
  //if(value == ) {value=node.EFT;}
   if (value==0) value="0";
  // console.log(node.EFT);
   node.LFT=value;
  
   return true;
   
}

function calculateLST(node){
 node.LST=    +node.LFT - +du[node.activity];
  if(node.LST==0) {node.LST="0";}
   return node.EFT;

}

function calculateFFTF(node,value){ 
  
   node.FF=   value  - node.EFT;
   node.TF=    +node.LFT - +node.EFT;
   if(node.FF == 0) { node.FF ="0";}
  if(node.TF == 0)  { node.TF= "0";}
 
}

 
function deleteNode(node)
{
       var deletedNodeid=node.id; 
       var index = myNodes.indexOf(node); 
       
       myNodes.splice(index,1); 
       for(n=0; n<myNodes.length;n++){
        var node= myNodes[n];
        
        if(node.parentID==node.id){ 
        node.parentID="";
                                             $("#"+node.id).children().each(function(no,el){
        if($(el).hasClass("droplist")){
        $(el).hide();
        } 
        });}
       }  
       
      $("#"+deletedNodeid).remove();
 if(mode == "student"){ sentToparentPage();}
   return;
}

 