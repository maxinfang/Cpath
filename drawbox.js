function drawbox(node){

    datadiv= document.createElement('div');
    $(datadiv).uniqueId();
  
   
     var datadivId=$(datadiv).attr("id");
     $(datadiv).addClass("datatable"); 
     
    var element = document.createElement('span');
    element.className = "normal short";
  
    //$(element).append(durationdiv);
       
   var oNewP = document.createElement("div");
   oNewP.style.display = 'block';
    
   
  var durationL= addlabel("Duration:" );
    $(durationL).uniqueId();
  var durationId = $(durationL).attr('id');
   $(oNewP).append(durationL);

   $(newdiv).append(datadiv);
   $(datadiv).append(dropL.show());
   $(datadiv).append(oNewP);
   $(datadiv).append(element);
  
}
 