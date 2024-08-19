

var Color="#d9534f"; //red
var left_end="#445566";
var right_end="#445566";


if(mode=="correct") { Color= "#0060bf"}; //#0060bf
if(mode=="submission") { Color= "#5cc902"};  //#5cc902

function addShape(type,dragzone,node){
   console.log(node);
   
  if(node.color == "red"){
    Color="#d9534f";left_end="#d9534f";right_end="#d9534f";}
   else if(mode=="submission"){Color="#5cc902";}else{Color="#0060bf"; } 

   if(node.color =="green") {
    Color="#5cc902";
   }
    
  //to do add orange in the future
  
   if(node.left_red=="red"){ left_end="#d9534f";} else if(node.color != "red"){left_end="#445566";} 
   if(node.right_red=="red"){ right_end="#d9534f";} else if(node.color != "red"){right_end="#445566";} 
  
  if (type=="C") {addCircle(dragzone,node);} 
}
 
 
function addCircle(dragzone,node) {
  var paper = new Raphael(
    $(dragzone).get(0), 102, 102);   
  var circle =paper.circle(50, 50)
  .attr({
    fill : Color, 
    r : 45
  }); 
  
  
  var sourcePoint= {
    anchor:"Right",  
    // paintStyle:{ fill:"blue", outlineStroke:"red", outlineWidth:1 },
    // deleteEndpointsOnDetach: false,,
    connectorStyle: {
     lineWidth: 2,
     strokeStyle: '#666'
      // strokeStyle: '#666' , change the color 
       
    }, 
     paintStyle:{ fillStyle:right_end},
     maxConnections: -1,
     connector: ["Straight"], 
     connectorOverlays: [["Arrow",
    { width: 15,
     length: 15}
                         ]],
    
     isSource:true,
     isTarget:false
    
   };
 
   var targetPoint= {
    anchor: "Left",
    paintStyle:{ fillStyle:left_end},
    maxConnections: -1, 
    isSource:false,
    isTarget:true,
    //deleteEndpointsOnDetach: false,
    beforeDrop:function(conn) {  
     
     var        existingConnections=jsPlumb.getConnections({source:conn.sourceId,target:conn.targetId});
      if(existingConnections.length >0 ) return false;
      else return true;
      

        } 
   
  };  
  var currentId = $(dragzone).attr('id'); 
  

  e1= jsPlumb.addEndpoint(currentId, sourcePoint,);
  e2= jsPlumb.addEndpoint(currentId, targetPoint); 
 
  //jsPlumb.makeTarget(currentId, targetPoint);
 
 
  
}

