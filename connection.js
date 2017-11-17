function addConnections(linklist){
 
  var arraynodes=linklist.slice();
  
  for(n=0; n<arraynodes.length;n++){
    var link= arraynodes[n]; 
    
    console.log(link);
    addConnection(link);  
    
    
   
    
  }
  
}


function addConnection(link){
  
  var targetid ;
  $("#"+link.t).children().each(function(no,el){
    if($(el).hasClass("_jsPlumb_endpoint_anchor_")){
      targetid= el.id ; 
    } 
  });
  
  var sourceid ;
  
  $("#"+link.h).children().each(function(no,el){
    if($(el).hasClass("_jsPlumb_endpoint_anchor_")){
      sourceid= el.id ; 
    } 
  });
  
  s=jsPlumb.selectEndpoints({source: sourceid}).get(0);
  t=jsPlumb.selectEndpoints({target: targetid}).get(0);
  
  
  var linkconn= jsPlumb.connect({
   source:s,
   target:t,
  
   
   
 }); 
  
  //var myElement = document.getElementById(linkconn.getId()); 
  //var mc = new Hammer.Manager(myElement);  
 // mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) ); 
  
  
  
  linkconn.addOverlay( ["Custom", {
    create:function(component) {  
      var boxvalue= drawbox("line",link,linkconn);  
      return $(boxvalue);  
    },
    location:0.5,
                cssClass:"datatable"//,
               // id: cc.id
             }]); 
  
  $(".datatable").jLzindex();
  
  if(link.activity==0){ 
    linkconn.setPaintStyle({
      lineWidth: 2, 
      strokeStyle: "#666", 
      dashstyle:"4 2" 
    })
   
      var box= linkconn.getOverlays();
      if(box.isVisiable==true){box.setVisiable(false)} 
       box[1].setVisible(false); 
       }
  
  if(link.strokestyle=="red"){ 
    
     linkconn.setPaintStyle({
      lineWidth: 2, 
      strokeStyle: "red", 
      dashstyle:"10 2" 
    })
  
  }
       

     }


