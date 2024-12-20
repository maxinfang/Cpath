var CL_SEPARATOR='a';
var C_SEPARATOR='C';
var L_SEPARATOR='L';
var C_field_SEPARATOR='c';
var L_field_SEPARATRo='c';
var Label_SEPARATOR='d';
var Data_SEPARATOR='D';

if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

if (!Array.prototype.compare)
{
Array.prototype.compare = function(testArr) {
 
    if (this.length != testArr.length) return false;
    for (var i = 0; i < testArr.length; i++) {
        if ((this[i] == "" && testArr[i] == "0") ||
        (this[i] == "0" && testArr[i] == "")) {
          // accept empty string = 0
                continue;
        }
        else if (this[i] != testArr[i]) return false;
    }
  console.log("found!");
    return true;
}
  }


 
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

function Node(id,type,parent,top,left,activity,EST,EFT,LST,LFT,FF,TF,color){     
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
 this.color="";  
}  


function NodeClass(node) {  
  this.id=node.id;
  this.prevNode=null;       
  this.nextNodes=null;   
  this.prevconnectors=null;       
  this.nextconnectors=null;   
  this.node=node;  
  this.level=0; 
  
}


function connectionClass(connector) {  
 
  this.prevLinks=null;       
  this.prevLinks=null;       
  this.connector=connector;  
  this.level=0; 
  
}



function deserialiseL(string){  
 var array= new Array(); 
   // Check if the input string is null or its length is less than 2
   if (!string || string.length < 2) {
    return array;
  }
 
 var stringwithCandL=string.split('a');  
 if (stringwithCandL.length < 2) {
   return array;
 }
 var stringlink=stringwithCandL[1]; 
 
 if(stringlink.length ==0) return [];   
 var link= stringlink.split('L');  
   //console.log(link);
 for(i=1;i<link.length;i++){ 
   var shapeanddata=link[i].split('D');  
   var linkAttribute= shapeanddata[0].split('c'); 
   var dataAttribute=shapeanddata[1].split('d');
  // console.log(linkAttribute);
   var cc = new connector(); 
   cc.h= linkAttribute[1]
   cc.t= linkAttribute[2]; 
   cc.activity=+dataAttribute[1];
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
  // Check if the input string is null or its length is less than 2
  if (!string || string.length <= 2) {
     return array;
  }

  var stringwithCandL= string && string.split('a');
 if (stringwithCandL.length < 2) {
   return array;
 }
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
   console.log(node.id+"top:"+node.top+":"+node.left);
   
       var dataAttribute=shapeanddata[1].split('d');
      // console.log(dataAttribute);
      node.activity=+dataAttribute[1];
      node.EST=parseInt(dataAttribute[2]);
      node.EFT=parseInt(dataAttribute[3]);
      node.LST=parseInt(dataAttribute[4]);
      node.LFT=parseInt(dataAttribute[5]);
      node.FF=parseInt(dataAttribute[6]);
      node.TF=parseInt(dataAttribute[7]); 
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
 function findsubnode(id){ 
  for(n=0; n<submissionNodes.length;n++){
    
    var node=submissionNodes[n];
    
    if (node.id==id) {
     return node; 
   } 
   
   
 }
}    
       
function findsubrootnode(){

 for(var m=0; m<submissionNodes.length;m++){ 
   
   var node= submissionNodes[m]; 
   var id = node.id; 
   
   var count =0;
   for(var n=0; n<submissionlinks.length;n++){
    var link=submissionlinks[n];
    if (link.t==id) {
      count++;
      console.log("link:++"+link);
    }
  }
  if (count==0) {
   console.log("root:"+id); 
   return findsubnode(id);
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
     con.setPaintStyle({
       dashstyle: "solid",
       lineWidth: 2 ,
       strokeStyle:"#666"
     })
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



function  giveWarning(myNodes,mylinks){
  
  
  
 var linkedArray= new Array();   //untested array
 var linkedArray2= new Array();  
  
 
  for(n=0; n<myNodes.length;n++){  
 var node=myNodes[n];  
       //console.log(node);
       var linkedNode= new NodeClass(node)
     // console.log(linkedNode);
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
    

  
  var testingArray= new Array();  
  var warningFlag = 0;
  
 
  
  if(linkedArray.length>0){testingArray.push(linkedArray.shift());}
   
  while(linkedArray.length>0){
    
    if(testingArray.length ==0) {warningFlag=1; break;}
    
    while(testingArray.length>0){
      
      if(linkedArray.length ==0) {break;} 
      
       var  lnode =testingArray.shift();
       var index = linkedArray.indexOf(lnode); 
      if(index >=0){ 
         linkedArray.splice(index,1); 
         if(linkedArray.length ==0) {break;}  
      }
      
      var prevnodesArray =lnode.prevNode;
      var nextnodesArray =lnode.nextNodes; 
      
       for (var p=0;p<prevnodesArray.length;p++){  
            
            var index1 = linkedArray.indexOf(prevnodesArray[p]);  
            if(index1>=0){ 
               //linkedArray.splice(index1,1);
               testingArray.push(prevnodesArray[p]);
            }
            
            }
      
       for (var n=0;n<nextnodesArray.length;n++){ 
            
            var index2 = linkedArray.indexOf(nextnodesArray[n]);   
            console.log(index2);
            if(index2 >=0){
              //linkedArray.splice(index2,1);
              testingArray.push(nextnodesArray[n]);}
          } 
      
    }
     
     
      
}
  
console.log("------------------------------------------------------");
/*
  
for(i=0; i<myNodes.length;i++){
    
  if (repeatflag == 1) {break;}
    
  var node= myNodes[i];
  var activity= node.activity;
    
  if (activity) { // ie not a dummy activity
    var numberOfactivity=0; 
    for (j=0;j<myNodes.length;j++){  
      var linkedNode=myNodes[j]; 
      console.log("==="+activity+""+linkedNode.node.activity);
      if (linkedNode.activity == activity){
            numberOfactivity++;
        if (numberOfactivity>1) repeatflag=1;
      }
    }    
  }
}

 */ 
 var repeatflag=0;
  
  
  console.log(myNodes);
 if(answer_type =="precedence"){ 
        for(i=0; i<myNodes.length;i++){
         if (myNodes[i].activity) { // ie not a dummy activity
          for(j=i+1; j<myNodes.length;j++){  
              if(myNodes[i].activity ==myNodes[j].activity){
             console.log("warning");
             repeatflag = 1; }
           }
        }
     }
 }
  
  
  if(answer_type =="arrow"){ 
        for(i=0; i<mylinks.length;i++){
         if (mylinks[i].activity) { // ie not a dummy activity
          for(j=i+1; j<mylinks.length;j++){  
              if(mylinks[i].activity == mylinks[j].activity){
             console.log("warning");
             repeatflag = 1; }
           }
        }
     }
 }
  
 
  
console.log("------------------------------------------------------");
 
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
 
 
  
if(repeatflag ){
 $("body").css("background-color","#fee");
 $("p").text("Warning: Two activities use the same label!");

}

else if (warningFlag) {
 
 $("body").css("background-color","#fee");
 $("p").text("Warning: Not all nodes are connected!");
 
}  
else{
  $("body").css("background-color","transparent");
  $("p").text("");
  
}; 


}

function checkloop(){
   
    var allerrors = new Array();
    for(n=0; n<myNodes.length;++n){
       
        var node= myNodes[n];
      console.log(node);
        var li=[]; 
        li.push(node);  
        if(node.parentID!="") { 
            var parentid =node.parentID;
            var parentnode= findnode(parentid);  
            var temp=  recursivecheck(parentnode, li )
            if (temp!=true){ 
                for (var l=0; l<temp.length;l++ ) {
          if (! include(allerrors,temp[l])) {
            allerrors.push(temp[l]);
          }
        }
              
            } 
        }
    
    }  
    
}



function checkloop1( submissionNodes, submissionlinks ){
  
   
  
   var linkedArray_sub=new Array();
   var linkedArray2_sub=new Array(); 
  
 
   function findsublinkednode(id){
    
   for (x=0;x<linkedArray2_sub.length;x++){ 
     var li=linkedArray2_sub[x];
     if(li.id==id){return li;}
   } 
   return "none";
 } 
   
  
   for(n=0; n<submissionNodes.length;n++){  
    var node=submissionNodes[n];  
      // console.log(node);
       var linkedNode= new NodeClass(node)
     // console.log(linkedNode);
     linkedArray_sub.push(linkedNode);  
     linkedArray2_sub.push(linkedNode);
   }  
  
     
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
     
     var allerrors = new Array();
  
     for (j=0;j<linkedArray_sub.length;j++){ 
       
        var linkedNode=linkedArray_sub[j]; 
        console.log(linkedNode);
        var li=[]; 
        li.push(linkedNode);  
        console.log(linkedNode)
        if(linkedNode.nextNodes.length>0) {   
          for (i=0;i<linkedNode.nextNodes.length;i++){ 
                   
                          var error=recursiveloop(linkedNode.nextNodes[i],li);
     if(error){allerrors.push(error);}
             
           }
         
        }
          
    }   
  
     console.log(allerrors); 

     return allerrors;

}
  
function recursiveloop(currentnode,box){
    
      
       if (include(box,currentnode)){
       //    console.log('findloop');
       //    console.log(box);
           var ret = new Array(); 
           while (box.length > 0) {
                temp = box.pop();
                ret.push(temp);
                if (temp == currentnode) {break;}
               
           }
          console.log(ret);
           return ret;
       }
     
     
    //  console.log(box);
     // console.log(currentnode);
  
     if (currentnode.nextNodes.length>0) { box.push(currentnode) ;}
  
      for (m=0;m<currentnode.nextNodes.length;m++){ 
         nextnode= currentnode.nextNodes[m];
         return  recursiveloop(nextnode,box);
      }
  
     // box.pop;
       
  
}

   

function include(arr, obj) {
  
    for(var i=0; i<arr.length; i++) { 
      console.log(obj);
       console.log(arr[i]);
        if (arr[i] == obj) return true;
    }
  
  return false;
  
  //include([1,2,3,4], 3); 
}


  

function finditself(node,box){ 
         
       for(var i=0; i<box.length; i++) {
         
           console.log(box[i]);
          if (box[i].id == node.id){ return true; }
          
          finditself(node,box[i].nextNodes);
          
       }
       
  
      return false;
 } 

function giveloopWarning(text){
    console.log(text);
    var  looparray = new Array();
        
    var loop="Warning: loop detected!";
  
   for(var n=0; n<text.length;n++){ 
                  
        node= text[n];
       
        looparray.push (node.id);
              
    }
 
     console.log(looparray);
  
     var connectionList = jsPlumb.getConnections();
    console.log(connectionList);
    for(var x=0; x<connectionList.length; x++){    
    conn =connectionList[x];
     if (conn === undefined) continue;
      console.log(conn);
      var targetId=$('#'+conn.targetId).parent().attr('id');      var  sourceId=$('#'+conn.sourceId).parent().attr('id');
         console.log(targetId);
         console.log( sourceId);
    
     
   //include([1,2,3,4], 3); 
   if (include(looparray, targetId) && include(looparray, sourceId) ){
            conn.setPaintStyle({ 
                dashstyle: "solid",
                lineWidth: 2 ,
                strokeStyle:"#fa0000",
            })
        } 
   
    }
           
    if(text.length>0){
        $("body").css("background-color","#fee");
        $("p").text(loop);
  }
   else{
     console.log('test');
      // giveWarning();
            
       }; 

}

         
  


function sentToparentPage()
{ 
  giveWarning(myNodes,mylinks);
  console.log(mylinks);
   
  answervalue= serialise(myNodes,mylinks);
  console.log(answervalue);
  
  
  redlist=  checkloop1(myNodes,mylinks);
  
  
  
  console.log( redlist);
   var connectionList = jsPlumb.getConnections();
   // console.log(connectionList);
    for(var x=0; x<connectionList.length; x++){    
    conn =connectionList[x];
      conn.setPaintStyle({ 
                dashstyle: "solid",
                lineWidth: 2 ,
                strokeStyle:"#666",
            })
      }
      
      
      

  
  for(var n=0; n< redlist.length;n++){ 
   // giveloopWarning(redlist[n]);
     
    }
    
  
 
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

function intheloop(sourceid,targetid,array){

      for(var i=0; i<array.length; i++) { 
          for(var l=0; l<array.length; l++) { 
            
                if (array[i] == array[l] ) continue;
                  
                if(array[i] == sourceid && array[l] == targetid) return true;
           } 
      
      }
        
         
    
  return false;
  

}


function calculateEFT(node){
 node.EFT= +du[node.activity] +  +node.EST;
 if( node.EFT==0){node.EFT="0"}
   return node.EFT;
}

function compareEFT(node){
   if  (node.EFT != +du[node.activity] +  +node.EST) { node.EFTcolor="red";};
  // to Max update the eft
}
  
 

function  calculateEST(node,value){
  if(value == 0) {value = "0";}
  node.EST=value;
  return true;
  
};

function compareEST(node,value){
  if (node.EST != value){ node.ESTcolor="red";}
  // to Max update the color
}



function calculateLFT(node,value){
  //if(value == ) {value=node.EFT;}
  if (value==0) value="0";
  // console.log(node.EFT);
  node.LFT=value;
  return true; 
}


function compareLFT(node, value){
   if (node.LFT != value){ node.LFTcolor="red";}


}




function calculateLST(node){
 node.LST=    +node.LFT - +du[node.activity];
 if(node.LST==0) {node.LST="0";}
 return node.EFT;

}

function compareLST(node){
  if (node.LST !=  +node.LFT - +du[node.activity]){ node.LSTcolor="red";}
  


}

function calculateFFTF(node,value){ 
  
 node.FF=   value  - node.EFT;
 node.TF=    +node.LFT - +node.EFT;
 if(node.FF == 0) { node.FF ="0";}
 if(node.TF == 0)  { node.TF= "0";}
 
}

function compareFFTF(node,value){


  if(node.FF != value-node.EFT){ node.FFcolor="red";}
  if(node.TF !=  node.LFT - +node.EFT ) {node.TFcolor="red";}

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
    });
  }
 }
   
   deletearray =new Array();
   for(var n=0; n<mylinks.length;n++){ 
   var link= mylinks[n];  
   if (link.h == deletedNodeid  )
     
   {    
    deletearray.push(link); 
   }
     
      if (link.t == deletedNodeid  )
     
   {    
     deletearray.push(link); 
   }
   
  }  
   
   for(var d=0; d<deletearray.length;d++){ 
      var link= deletearray[d]; 
      deletelink(link.h,link.t); 
   }
   
   
  $("#"+deletedNodeid).remove();
  if(mode == "student"){ sentToparentPage();}
  return;
}


function recursivecheck(currentnode,box){
    
       
    box.push(currentnode) ;
  
    var parentid =currentnode.parentID;
           
    if(parentid=="") {return true;};
  
    var parentnode= findnode(parentid);
  
    if(include(box,parentnode)){
    ret = new Array();
    while (box.length > 0) {
      temp = box.pop();
      ret.push(temp);
      if (include(ret,parentnode)) {
        return ret;
      }
    }
  } 
  
    else{ return  recursivecheck (parentnode,box);  
          
           
         }
  
   
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



  function validateInt(value)
{
    var num = value;
    var regex=/^\d*$/;  
    message="true";
  
  if (!num.match(regex)) { message="Numbers must be Integer"; 
                          }
      
  return message;
  
  
 }


function findmaxEFTlinks(linksarray){
    var max=0;
   for(n=0; n<linksarray.length;n++){ 
       var lin= linksarray[n];
     if(lin.EFT>max){max=lin.EFT}
   }
  return max; 
}

function findminsESTlink(linksarray){
    var min=100000;
  for(n=0; n<linksarray.length;n++){ 
       var lin= linksarray[n];
     if(lin.EST< min){min=lin.EST}
   }
  return min;
  

}
