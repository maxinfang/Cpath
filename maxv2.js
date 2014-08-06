 var myNodes=new Array();
 var mylinks=new Array();
 var templink;
 var questionId=this.frameElement.attributes.id.value; 
 var array = questionId.split("_");

 
 
 if(array[0] != "question" && array[0] !='"question'){ 
  alert(alert(array[0])); 
  alert ("iframe setting not vailid!");
  
}; 
 
var mode="student";
var history_page=""; 
var namespaceforSub = array[0]+"_"+array[1]+"_submission";
var namespaceforEntry = array[0]+"_"+array[1]+"_entry"; 
var namespaceforLabel= array[0]+"_"+array[1]+"_label"; 
var namespaceforDuration= array[0]+"_"+array[1]+"_duration"; 
var op= new Array();


//console.log(namespaceforSub);
if(parent.document.getElementById(namespaceforSub))
 {mode ="submission";

}
else{
  mode="student";
};

function getDuration(){

 var elements=new Array();  
 var  seq=0;
 var  flag =1;
 
 while(flag){
   
  var  tempname= namespaceforDuration+"_"+seq; 
  var element=parent.document.getElementById(tempname);
  
  if ( typeof element !="undefined"&& element !=null ) { 
    
    var bu =element.innerHTML;
    
    elements.push( bu);
    seq++;
  }else {flag=0;}
  
}

  // console.log("_+++++"+elements[0]+"fas");
  return elements;
}

function getEntry(){
 
  var elements=new Array();  
  var  seq=0;
  var  flag =1;
  
  while(flag){
   
    var  tempname= namespaceforEntry+"_"+seq; 
    var element=parent.document.getElementById(tempname);
    
    
    if ( typeof element !="undefined"&& element !=null ) { 
      
      var bu =element.innerHTML;
      
      elements.push( bu);
      seq++;
    }else {flag=0;}
    
  }
  return elements;
} 


function getHistory(){
  
  var elem= parent.document.getElementsByTagName("input"); 
  
  
  var arr = new Array();
  var i = 0;
  var iarr = 0;
  var att;
  for(; i < elem.length; i++) {
    att = elem[i].getAttribute("type");
    if(att =="text") {
      return elem[i].value   
    }  
    
  }
  
  
} 



function getSubmission(){
  var element=parent.document.getElementById(namespaceforSub);
  
  //console.log(element.innerHTML);
  return element.innerHTML;
}

var op = getEntry();
var du= getDuration();
console.log(du);


$(document).ready(function()  {  
    //initialize jsPlumb 
    /*initialize endpoint Class*/
    jsPlumb.setRenderMode(jsPlumb.SVG);
    jsPlumb.Defaults.Container = $("#canvasdiv"); 
    jsPlumb.DefaultDragOptions = {  cursor:"pointer",
    zIndex: 2000 };
    jsPlumb.endpointClass = "endpointClass";
    jsPlumb.connectorClass =  "connectorClass";   
    $(".datatable").jLzindex();
 
    if(mode=="submission") {  history_page= getSubmission();
      
    }
     
    if(mode=="student"){history_page=getHistory();
    }
    
    if(history_page == "" ){ 
    }
    else{  
     redraw(history_page); 
     addConnections(mylinks);
   }
   
 if(mode!="submission"){ 
  $("#c").click(function(){ 
   var node= new Node();
   node.id =generateID(myNodes); 
   node= drawnode(node); 
   addNewNode(node);
 });
  
  
  $("#clear").click(function(){ 
   if (confirm('Delete all nodes?')) { 
      
     for(var n=0; n<myNodes.length;n++){
       var node= myNodes[n];
       var currentId=node.id;    
      
        if( $("#"+currentId) !=null ) 
        {
       $("#"+currentId).children().each(function(no,el){
         if($(el).hasClass("_jsPlumb_endpoint_anchor_")){
           // console.log(el.id);
           jsPlumb.detachAllConnections(el.id);
           jsPlumb.removeAllEndpoints(el.id);  
         } 
       })
       $("#"+currentId).remove();
       
     }
     } 
     jsPlumb.deleteEveryEndpoint();
      jsPlumb.reset();
     myNodes.length = 0; 
     mylinks.length= 0;
     sentToparentPage(); 
   }  
 })
}
else{  
 $("#c").hide(); 
 $("#clear").hide();
 
}

})