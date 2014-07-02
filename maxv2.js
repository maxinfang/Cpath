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
 var history=""; 
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

    

  if(mode=="submission") {  history= getSubmission();
                           
    
    }
  
  
  if(mode=="student"){history=getHistory();
                      
                     }
  
  if(history == "" ){ 
      }
      else{  
       redraw(history); 
       addConnections(mylinks);
      
      }
  
  
  jsPlumb.bind("connection",
          function(info, originalEvent) {
        
             var conn = info.connection;
             var parentId=$('#'+conn.sourceId).parent().attr('id');
             var childId=$('#'+conn.targetId).parent().attr('id');
       
       
            if (parentId != childId) {
    
             var cc= findlink(parentId,childId);
     
              if (cc==null){
              cc = new connector();
              cc.h=parentId;
              cc.t=childId;  
              cc.id=generateLinkID(mylinks); 
              addNewLink(cc);
                    
              conn.setPaintStyle({lineWidth: 2, 
                                 strokeStyle:"#666",
                                 dashstyle:"4 2"})   
     
                 jsPlumb.select(info).addOverlay( ["Custom", {
                create:function(component) {  
                var boxvalue= drawbox("line",cc,conn); 
                  
                    return $(boxvalue);  
                },
                location:0.5,
                cssClass:"datatable"//,
               // id: cc.id
            }]); 
                } 
             else{  
   }   
 
      
       if(cc.activity==0){
     
     var box= conn.getOverlays();
          
        //jsPlumb.detach(conn);  
       // if(box.isVisiable==true){box.setVisiable(false)} 
       // console.log(conn);
     var box= conn.getOverlays();
       if(box[1].visible==true){
         box[1].setVisible(false);} 
    } 
     $(".datatable").jLzindex(); 
  }}  
           
              );
   //initialzie button action to different buttons;
 
 
    
          
  
   
   
  
   jsPlumb.bind("connectionDetached", function(info, originalEvent) {
      
      var conn = info.connection;
      var parentId=$('#'+conn.sourceId).parent().attr('id');
      var childId=$('#'+conn.targetId).parent().attr('id'); 
      var beforeId= $('#'+info.targetId).parent().attr('id');
                 
      
      console.log("thisnodepriviousid"+beforeId);   
      console.log("thisnodeconnected"+childId);
      console.log("thisnodeconnected"+parentId);
       
      // when drag the start endpoint but didn't drop
     
      // when change the connection
     
     //    when drag off the endpoint
     
    
      if(beforeId!=childId){  
         if (parentId != childId){
           deletelink(parentId,childId);   //change  
          } 
     }
     
       if(beforeId==childId){ 
          if (parentId != childId){
             deletelink(parentId,childId);  //drag off
          } 
       } 
   })
     
     
   jsPlumb.bind("connectionDragStop", function(conn,event) {
      console.log("dragandstop"); 
     
       var arr=jsPlumb.getConnections({source:conn.sourceId,target:conn.targetId}); 
      var previous= findlink($('#'+conn.sourceId).parent().attr('id'),$('#'+conn.suspendedElementId).parent().attr('id'));
         console.log(previous);
       console.log(conn);
       if(arr.length>1){
         
         jsPlumb.detach(arr[0]);  
         cc = new connector();
         if(previous!=null)  {cc=previous;}
          cc.h=$('#'+conn.sourceId).parent().attr('id');
          cc.t=$('#'+conn.targetId).parent().attr('id');
          cc.id=generateLinkID(mylinks); 
          addNewLink(cc); 
     
      jsPlumb.select(conn).addOverlay( ["Custom", {
           create:function(component) {  
                var boxvalue= drawbox("line",cc,conn); 
                    return $(boxvalue);  
                },
           location:0.5,
           cssClass:"datatable"//, 
            }]);  
         
       
         if(cc.activity==0){ 
     var box= conn.getOverlays();
       if(box[1].visible==true){
         box[1].setVisible(false);} 
    } 
     $(".datatable").jLzindex(); 
             } 
})
      
     
   
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
           $("#"+currentId).children().each(function(no,el){
           if($(el).hasClass("_jsPlumb_endpoint_anchor_")){
           // console.log(el.id);
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