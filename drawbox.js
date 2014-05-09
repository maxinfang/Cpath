function drawbox(node){

 
      
     var dataLeft= $(newdiv).position().left;
     var dataTop= $(newdiv).position().top; 
     datadiv= document.createElement('div');
     $(datadiv).uniqueId();
  
   
     var datadivId=$(datadiv).attr("id");
     $(datadiv).addClass("datatable"); 
     
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
   
  
   var FFdata = document.createElement("div");
   ESTdata.style.display = 'block';
   
  
  
  
  $(FFdata).append(addlabel("FF"+"&nbsp&nbsp")); 
   var FF= (node.FF=="") ? addtext("FF") : addtext("FF",node.FF);
   
  
  
  
  $(FFdata).append (FF);
  
  $(FFdata).append(addlabel("TF" +"&nbsp&nbsp"));
  
  
  
   var TF= (node.TF=="") ? addtext("TF") : addtext("TF",node.TF);
  
  $(FFdata).append (TF);
   $(element).append( FFdata); 
   
   
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
         
}); 
  
  
}
 