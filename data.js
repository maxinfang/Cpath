function addDroplist(options){ 
  newselect= document.createElement('select');
  $(newselect).addClass("droplist");
  var select= $(newselect).uniqueId(); 
  selectId=$(newselect).prop("id");
  for(o=0;o<op.length;o++){
    $(newselect).append('<option value='+o+' style="width:50;">'+op[o]+'</option>');
  }  
  
  if (typeof options == 'undefined'){
   
   
    return $(newselect); 
  }
  else{ 
    newselect.value= options;
    return $(newselect); 
  }

};


function addlabel(lable){ 
  var newlabel= document.createElement('LABEL');
  newlabel.setAttribute("for",lable);
  newlabel.innerHTML = lable; 
  return newlabel;
};

function addtext(lable,value,color){ 
  var text= document.createElement('input');
  $(text).uniqueId();  
  text.type="text";
  text.style.width='30px';
  if (typeof value=== 'undefined') {text.style.borderColor="red"; }
  // if(value=""){text.style.borderColor="red";};
  else{ text.style.borderColor = color;}
  text.name=lable; 
  if(typeof(value) != "undefined")
  {
    
    text.value=value;
  }
  
  return text;
};

