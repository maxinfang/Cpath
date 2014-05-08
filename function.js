
var CL_SEPARATOR='a';

var C_SEPARATOR='C';
    
var L_SEPARATOR='L';
    
var C_field_SEPARATOR='c';

var L_field_SEPARATRo='c';

var Label_SEPARATOR='d';

var Data_SEPARATOR='D';




function connector(){
       this.h="";
       this.t="";
       this.EST="";
       this.EFT=""; 
       this.LST="";
       this.LFT="";
       this.FF="";
       this.TF="";
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
  
       var stringnode=stringwithCandL[0];
       var stringlink=stringwithCandL[1];
       
       if(stringlink.length ==0) return [];
  
       var link= stringlink.split('L');
  
       for(i=1;i<link.length;i++){ 
          
       var linkAttribute=link[i].split('c');
       var cc = new connector();
       cc.h= linkAttribute[1]
       cc.t= linkAttribute[2];
       
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
     
     //Cc"id"c"top"c"left"c
      answervalue+=C_SEPARATOR;  
      answervalue+=C_field_SEPARATOR; 
      answervalue+=thisnode.id;
      answervalue+=C_field_SEPARATOR; 
      answervalue+=thisnode.top;
      answervalue+=C_field_SEPARATOR;
        answervalue+=thisnode.left;
      answervalue+=C_field_SEPARATOR;
      //"Actvity"d
      answervalue+=Data_SEPARATOR;
        answervalue+=Label_SEPARATOR;
      answervalue+=thisnode.activity;
      answervalue+=Label_SEPARATOR;
      answervalue+=thisnode.EST;
        console.log("thisnodeSST:"+thisnode.EST);
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
      var thisnode=mylinks[l]; 
     //Cc"id"c"top"c"left"c
      answervalue+=L_SEPARATOR;  
      answervalue+=C_field_SEPARATOR; 
      answervalue+=thisnode.h;
      answervalue+=C_field_SEPARATOR; 
      answervalue+=thisnode.t;
      answervalue+=C_field_SEPARATOR;
    
      //"Actvity"d
        
    } 
      
      return answervalue;
      
};

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
     console.log(mylinks);
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
       console.log("~~~link"+link.h+link.t+"~~"+h+t);
       return link; 
     };
      
   return;
}
}

function deletelink(h,t){

       var link = findlink(h,t);
       
       if (link == null) console.log("null");
       var index = mylinks.indexOf(link);  
     
       mylinks.splice(index,1);
     
       console.log(mylinks);

}

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


function updateNode(node,property){
      var myNodesArray=myNodes;
      
      for(n=0; n<myNodesArray.length;n++){ 
         var n= myNodes[n]; 
        if(  n.id== node.id){
          if(property=="top") {n.top=node.top;}
          if(property=="left"){n.left=node.left;} 
           if(property=="activity"){n.activity=node.activity;} 
           if(property=="EST"){n.EST=node.EST;} 
           if(property=="EFT"){n.EFT=node.EFT;}
            if(property=="LST"){n.LST=node.LST;} 
           if(property=="LFT"){n.LFT=node.LFT;}
            if(property=="FF"){n.FF=node.FF;} 
           if(property=="TF"){n.TF=node.TF;}
          
        }
       } 
  
      console.log(myNodes);
   if(mode == "student"){ sentToparentPage();}
   return;
       
      
      };


function  giveWarning(){
      
}

function sentToparentPage()
{
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
        
      
}

 