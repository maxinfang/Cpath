function drawbox(type,data){
    
     //judge the element and see how it goes.
  if(type=="line"){
     var dropL;
  var dropLid; 
       
      console.log("test"+data.h);
  if(data.activity==""){ 
     data.activity=0;
     dropL=addDroplist();
     dropLid=$(dropL).prop('id');
     $(dropL).width('90%'); 
  }
  
  else{
    dropL=addDroplist(data.activity);
    dropLid=$(dropL).prop('id'); 
    $(dropL).width('90%');
  
  }    
     var dataLeft= $(newdiv).position().left;
     var dataTop= $(newdiv).position().top; 
     datadiv= document.createElement('div');
     $(datadiv).uniqueId();
    
     var datadivId=$(datadiv).attr("id");
    //  data.id=datadivId;
     $(datadiv).addClass("datatable"); 
     console.log(datadiv);
    var element = document.createElement('span');
    element.className = "normal short";
  
    //$(element).append(durationdiv);
       
   var oNewP = document.createElement("div");
   oNewP.style.display = 'block'; 
   var durationL= addlabel("Duration: "+du[data.activity]);
    $(durationL).uniqueId();
   var durationId = $(durationL).attr('id');
    $(oNewP).append(durationL); 
   $(datadiv).append(dropL.show());
   $(datadiv).append(oNewP);
   $(datadiv).append(element);
    
   //$(element).append(addlabel("EST"));
    console.log("test"+data.EST);
  var EST = (data.EST=="") ? addtext("EST") : addtext("EST",data.EST);
  var ESTdata = document.createElement("div");
   ESTdata.style.display = 'block'; 
   $(ESTdata).append(addlabel("EST"));
   $(ESTdata).append(EST); 
    
   var EFT = (data.EFT=="") ? addtext("EFT") :     addtext("EFT",data.EFT);
 
  
   $(ESTdata).append(addlabel("EFT"));
   $(ESTdata).append(EFT); 
   $(element).append (ESTdata);  
   var LSTdata = document.createElement("div");
   ESTdata.style.display = 'block'; 
   $(LSTdata).append(addlabel("LST"));  
   var LST = (data.LST=="") ? addtext("LST") : addtext("LST",data.LST); 
   $(LSTdata).append (LST); 
   var LFT = (data.LFT=="") ? addtext("LFT") : addtext("LFT",data.LFT); 
   $(LSTdata).append(addlabel("LFT"));
   $(LSTdata).append (LFT); 
   $(element).append( LSTdata);
     var FFdata = document.createElement("div");
   ESTdata.style.display = 'block';
  $(FFdata).append(addlabel("FF"+"&nbsp&nbsp")); 
   var FF= (data.FF=="") ? addtext("FF") : addtext("FF",data.FF);
  $(FFdata).append (FF); 
  $(FFdata).append(addlabel("TF" +"&nbsp&nbsp")); 
   var TF= (data.TF=="") ? addtext("TF") : addtext("TF",data.TF);
  $(FFdata).append (TF);
   $(element).append( FFdata); 
    
   $(EST).change(function() {
           data.EST= $(EST).val();
           updateNode(data,"EST");
         
});   
   $(EFT).change(function() {
           data.EFT= $(EFT).val();
           updateNode(data,"EFT");
         
});  
   $(LST).change(function() {
           data.LST= $(LST).val();
           updateNode(data,"LST");
         
}); 
  $(LFT).change(function() {
           data.LFT= $(LFT).val();
           updateNode(data,"LFT");
         
}); 
  $(FF).change(function() {
           data.FF= $(FF).val();
           updateNode(data,"FF");
         
}); 
  $(TF).change(function() {
           data.TF= $(TF).val();
           updateNode(data,"TF");
         
}); 
  
  $(dropL).change(function() { 
      var indexvalue= $( "#"+dropLid+" option:selected" ).val();
      data.activity= indexvalue;
      updateNode(data,"activity");
        console.log(data);
     $("#"+durationId).text("Duration: "+du[data.activity]);
       
      
    })
    
  }
   var returndiv= document.createElement('div');
   $(returndiv).append(datadiv)
    
    return datadiv;
}
 