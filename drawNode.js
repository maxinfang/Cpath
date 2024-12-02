function drawnode(node){ 
      //should rewrite the reload and redraw mode;
      
      newdiv= document.createElement('div'); 
      $(newdiv).attr('id',node.id);
      var containerId = $(newdiv).attr('id');
      $(newdiv).addClass("container");
      $(newdiv).addClass(node.type);
      
     //postion
     if(node.top==""){ 
     }
     else{
    //   console.log("css:"+node.top+":"+node.left);
      $(newdiv).css({ top: node.top, left: node.left });
    } 
    
    $("#canvasdiv").append(newdiv); 
    dragzone= document.createElement('div'); 
    deletezone= document.createElement('div'); 
    var elem = document.createElement("img");
    elem.setAttribute("src", " icon-error.png");
    $(elem).uniqueId();
    $(elem).attr('align', 'right');
    $(deletezone).append(elem); 
    $(deletezone).addClass("delete");
      //$(deletezone).text("delete");
      
      $(dragzone).uniqueId();
      var deleteId  =$(elem).attr("id");
      var currentId=$(dragzone).attr("id"); 
      if(mode =="student") { $(newdiv).append(deletezone);} 

     
      $(newdiv).append(dragzone);   
  
      addShape("C",dragzone,node);   
      
      var dropL;
      var dropLid; 
    
      if(node.activity==""){ 
       node.activity=0;
       dropL=addDroplist();
       dropLid=$(dropL).prop('id');
       $(dropL).width('90%'); 
       dropL.show();
     }
     
       else{        
        dropL=addDroplist(node.activity);
        dropLid=$(dropL).prop('id'); 
        $(dropL).width('90%');
        
      }    
     
    
      
      var dataLeft= $(newdiv).position().left;
      var dataTop= $(newdiv).position().top; 
      datadiv= document.createElement('div');
      $(datadiv).uniqueId();
      
      
      var datadivId=$(datadiv).attr("id");
      $(datadiv).addClass("datatable"); 
      //$(datadiv).addClass("border-red");
      
      var element = document.createElement('span');
      element.className = "normal short";
      
    //$(element).append(durationdiv);
    
    var oNewP = document.createElement("div");
    oNewP.style.display = 'block';
    
    
    
    var durationL= addlabel("Duration: "+du[node.activity]);
    $(durationL).uniqueId();
    var durationId = $(durationL).attr('id');
    $(oNewP).append(durationL);

    $(newdiv).append(datadiv);
    
    $(datadiv).append(dropL); 
    $(datadiv).append(oNewP);
    $(datadiv).append(element);
    
   //$(element).append(addlabel("EST"));
   
   var EST = (node.EST=="") ? addtext("EST") :     addtext("EST",node.EST,node.ESTcolor);
   
   var ESTdata = document.createElement("div");
   ESTdata.style.display = 'block';
   
   
   $(ESTdata).append(addlabel("EST"));
   $(ESTdata).append(EST);
   
   
   
   var EFT = (node.EFT=="") ? addtext("EFT") :     addtext("EFT",node.EFT,node.EFTcolor);
   
   
   $(ESTdata).append(addlabel("EFT"));
   $(ESTdata).append(EFT);
   
   $(element).append (ESTdata); 
   
   var LSTdata = document.createElement("div");
   ESTdata.style.display = 'block';
   
   
   $(LSTdata).append(addlabel("LST")); 
    
   var LST = (node.LST=="") ? addtext("LST") : addtext("LST",node.LST,node.LSTcolor);
   
   $(LSTdata).append (LST);
   
   var LFT = (node.LFT=="") ? addtext("LFT") : addtext("LFT",node.LFT,node.LFTcolor);
   
   $(LSTdata).append(addlabel("LFT"));
   $(LSTdata).append (LFT);
   
   $(element).append( LSTdata); 
   
   
   var FFdata = document.createElement("div");
   ESTdata.style.display = 'block';
   
   
   
   $(FFdata).append(addlabel("FF"+"&nbsp&nbsp")); 
   var FF= (node.FF=="") ? addtext("FF") : addtext("FF",node.FF,node.FFcolor);
   
   
   
   
   $(FFdata).append (FF);
   
   $(FFdata).append(addlabel("TF" +"&nbsp&nbsp"));
   
   
   
   var TF= (node.TF=="") ? addtext("TF") : addtext("TF",node.TF,node.TFcolor);
   
   $(FFdata).append (TF);
   $(element).append( FFdata);  
   
  
  EST.addEventListener("input", function(e) { 
    var num = EST.value;
     var message = validateInt(num);
     if (message!="true"){
         alert(message);
        EST.value= EST.defaultValue;
         }else{
        EST.defaultValue= num; 
      }
    
  }, false);
  
  EFT.addEventListener("input", function(e) { 
    var num = EFT.value;
     var message = validateInt(num);
     if (message!="true"){
         alert(message);
        EFT.value= EFT.defaultValue;
         }else{
        EFT.defaultValue= num; 
      }
    
  }, false);
  
  
  LST.addEventListener("input", function(e) { 
    var num = LST.value;
     var message = validateInt(num);
     if (message!="true"){
         alert(message);
        LST.value= LST.defaultValue;
         }else{
        LST.defaultValue= num; 
      }
    
  }, false);
  
  
  LFT.addEventListener("input", function(e) { 
    var num = LFT.value;
     var message = validateInt(num);
     if (message!="true"){
         alert(message);
        LFT.value= LFT.defaultValue;
         }else{
        LFT.defaultValue= num; 
      }
    
  }, false);
  
  FF.addEventListener("input", function(e) { 
    var num = FF.value;
     var message = validateInt(num);
     if (message!="true"){
         alert(message);
        FF.value= FF.defaultValue;
         }else{
        FF.defaultValue= num; 
      }
    
  }, false);
  
  
  TF.addEventListener("input", function(e) { 
    var num = TF.value;
     var message = validateInt(num);
     if (message!="true"){
         alert(message);
        TF.value= TF.defaultValue;
         }else{
        TF.defaultValue= num; 
      }
    
  }, false);
  
  
   
   $(EST).change(function() {
     node.EST= $(EST).val();
     updateNode(node,"EST");
     
   });   
   $(EFT).change(function() {
     node.EFT= $(EFT).val();
     updateNode(node,"EFT");
     
   });  
   $(LST).change(function() {
     node.LST= $(LST).val();
     updateNode(node,"LST");
     
   }); 
   $(LFT).change(function() {
     node.LFT= $(LFT).val();
     updateNode(node,"LFT");
     
   }); 
   $(FF).change(function() {
     node.FF= $(FF).val();
     updateNode(node,"FF");
     
   }); 
  
   $(TF).change(function() {
     node.TF= $(TF).val();
     updateNode(node,"TF");
     console.log("the value has been changed");
     
   }); 
   
   $(dropL).change(function() { 
     
    
    var indexvalue= $( "#"+dropLid+" option:selected" ).val();
    node.activity= +indexvalue;
    updateNode(node,"activity");
    
    $("#"+durationId).text("Duration: "+du[node.activity]);
    
    
  })
   
   
   $("#"+deleteId).click(function() { 
    if (confirm('Delete this node?')) {   
      jsPlumb.detachAllConnections(currentId )
      jsPlumb.removeAllEndpoints(currentId); 
       
      $("#"+node.id).empty();  
      
       deleteNode(node);
      
      
    }  
    
  });
  
   
  
 var myElement = document.getElementById(containerId);
console.log(containerId);
// We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
var mc = new Hammer.Manager(myElement); 
// Tap recognizer with minimal 2 taps

//console.log("answer_type: "+answer_type);
 if (answer_type  == "precedence") {
  mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) ); 
 }

mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
var Press = new Hammer.Press({
  time: 500
});

// Add the recognizer to the manager
mc.add(Press);
// tie in the handler that will be called
mc.off("pan", handleDrag);

mc.on("doubletap", function(ev) {
    $("#"+datadivId).toggle("slow") ;
});
  


// Subscribe to desired event
mc.on('press', function(e) {
   $("#"+datadivId).toggle("slow") ;
}); 
/*
   $(datadiv).bind("dbclick",
     function() {   
       $("#"+datadivId).toggle("slow") ;
     });
   
   $(dragzone).bind( "dbclick",
      function() { 
     $("#"+datadivId).toggle("slow") ;
   }
      );
   
   if(node.activity==0){$(datadiv).hide()}
    
 

function handleDrag(ev) { 
 // console.log(ev);
  // console.log(ui);
  
  }

  
  
jsPlumb.draggable(containerId, {
   containment: $("#canvasdiv").parent(),
   scroll:false,
   handle:  "#"+currentId,
   stop: function(event, ui ){ 
   position = ui.position; 
   value="top:"+position.top+"left"+position.left;
   node.top=position.top;
   node.left=position.left; 
   updateNode(node,"top");
   updateNode(node,"left"); 
  }
});
  
  
 /*$("#"+containerId).draggable(  
   {  
   containment: $("#canvasdiv").parent(),
   scroll:false,
   handle:  "#"+currentId,
   stop: function(event, ui ){ 
   position = ui.position; 
   value="top:"+position.top+"left"+position.left;
   node.top=position.top;
   node.left=position.left; 
   updateNode(node,"top");
   updateNode(node,"left"); 
 }
}
);   */
     
      
      var top= $('#'+containerId).position().top;
      var left=$('#'+containerId).position().left;
      
      node.top=top;
      node.left=left;
      
      return node;
      
    }