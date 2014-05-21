function drawbox(type,node){
    
     //judge the element and see how it goes.
  if(type=="line"){
     var dropL;
  var dropLid;
  
   
  
  if(node.activity==""){ 
     node.activity=0;
     dropL=addDroplist();
     dropLid=$(dropL).prop('id');
     $(dropL).width('90%');
    
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
     console.log(datadiv);
    var element = document.createElement('span');
    element.className = "normal short";
  
    //$(element).append(durationdiv);
       
   var oNewP = document.createElement("div");
   oNewP.style.display = 'block'; 
   var durationL= addlabel("Duration: "+du[node.activity]);
    $(durationL).uniqueId();
   var durationId = $(durationL).attr('id');
    $(oNewP).append(durationL); 
   $(datadiv).append(dropL.show());
   $(datadiv).append(oNewP);
   $(datadiv).append(element);
    
   //$(element).append(addlabel("EST"));
  
  var EST = (node.EST=="") ? addtext("EST") :     addtext("EST",node.EST);
  var ESTdata = document.createElement("div");
   ESTdata.style.display = 'block'; 
   $(ESTdata).append(addlabel("EST"));
   $(ESTdata).append(EST); 
    
   var EFT = (node.EFT=="") ? addtext("EFT") :     addtext("EFT",node.EFT);
 
  
   $(ESTdata).append(addlabel("EFT"));
   $(ESTdata).append(EFT); 
   $(element).append (ESTdata);  
   var LSTdata = document.createElement("div");
   ESTdata.style.display = 'block'; 
   $(LSTdata).append(addlabel("LST"));  
   var LST = (node.LST=="") ? addtext("LST") : addtext("LST",node.LST); 
   $(LSTdata).append (LST); 
   var LFT = (node.LFT=="") ? addtext("LFT") : addtext("LFT",node.LFT); 
   $(LSTdata).append(addlabel("LFT"));
   $(LSTdata).append (LFT); 
   $(element).append( LSTdata);
    
  }
   var returndiv= document.createElement('div');
   $(returndiv).append(datadiv)
    
    return datadiv;
}
 