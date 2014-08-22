 var myNodes=new Array();
 var mylinks=new Array();
 var mode ="correct";

 var questionId=this.frameElement.attributes.id.value; 
 var array = questionId.split("_");

 
 if(array[0] != "question"){ 
 
  alert ("iframe setting not vailid!");
  
}; 

var history_page=""; 
var namespaceforSub = array[0]+"_"+array[1]+"_submission";
var namespaceforEntry = array[0]+"_"+array[1]+"_entry"; 
var namespaceforLabel= array[0]+"_"+array[1]+"_label"; 
var namespaceforDuration= array[0]+"_"+array[1]+"_duration"; 
var namespaceforAnswer= array[0]+"_"+array[1]+"_answer"; 
var op= new Array();


//console.log(namespaceforSub);
if(parent.document.getElementById(namespaceforAnswer))
 {mode ="correct";
console.log("11111");
}

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
  
  console.log("_+++++"+elements[0]+"fas");
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


function getCorrectAnswer(){
 
  var el=parent.document.getElementById(namespaceforAnswer).innerHTML; 
  
  return el;
  
} 
function getHistory(){
  
  var elem= getCorrectAnswer();
  
  
  return elem;
  
  
} 





var op = getEntry();
var du= getDuration();
 
$(document).ready(function()  { 
  
    //initialize jsPlumb
    
    /*initialize endpoint Class*/
    jsPlumb.Defaults.Container = $("#canvasdiv"); 
    jsPlumb.DefaultDragOptions = {  cursor:"pointer",
    zIndex: 2000 };
    jsPlumb.endpointClass = "endpointClass";
    jsPlumb.connectorClass =  "connectorClass";   
    
    /*initialize bind function*/
   ///click
   
   ///connection  
   
   
   //check wehter we need reload or not
   
   
   if(mode=="correct"){history_page=getHistory();
                      //console.log("studentpage:"+history);
                    }
                    
                    if(history_page == "" ){ 
                    }
                    else{  
                    
                   redraw(history_page); 
                      console.log(mylinks);
                   addConnections(mylinks);
                   
                     
                   }
                   
                   
                   jsPlumb.bind("connection", function(info, originalEvent) {
                    
                    var conn = info.connection;
                    var parentId=$('#'+conn.sourceId).parent().attr('id');
                    var childId=$('#'+conn.targetId).parent().attr('id');
                    
                    var cc= new connector();
                    cc.h=parentId;
                    cc.t=childId; 
                    addNewLink(cc);
                   
                    
   //document.getElementById(" ").style.zIndex="1";
   
 });
   //initialzie button action to different buttons;
   
   
   
   
   if(mode!="submission"){
    
     
    
    $("#c").click(function(){ 
     var node= new Node();
     node.id =generateID(myNodes); 
     node= drawnode(node); 
     addNewNode(node);
   });
    
    
    $("#clear").click(function(){
     
      if (confirm('Are you sure you want to delete all nodes?')) { 
       for(var n=0; n<myNodes.length;n++){
         var node= myNodes[n];
         var currentId=node.id;    
         
         $("#"+currentId).children().each(function(no,el){
           if($(el).hasClass("_jsPlumb_endpoint_anchor_")){
            console.log(el.id);
            jsPlumb.detachAllConnections(el.id);
            jsPlumb.removeAllEndpoints(el.id); 
            
          } 
        });
         
         $('#'+currentId).remove();
       }
       
       myNodes.length = 0; 
       sentToparentPage();
       
     }  
   })
  }
  else{  
   $("#c").hide(); 
   $("#clear").hide();
   
 }
 
})