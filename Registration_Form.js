function error(){
    if(document.form.usern.value==""){
      document.getElementById("user_e2").style.display="block";
      return false;
   }
   else if(document.form.usern.value.length<=6){
      document.getElementById("user_e1").style.display="block";
      return false;
   }
   else if(document.form.email.value==""){
      document.getElementById("id_error2").style.display="block";
      return false;
   }
   else if(document.form.email.value.length<=10){
      document.getElementById("id_error").style.display="block";
      return false;
   }
   else if(document.form.mobnum.value==""){
      document.getElementById("mobile_e2").style.display="block";
      return false;
   }
   else if(document.form.mobnum.value.length!=10){
      document.getElementById("mobile_e").style.display="block";
      return false;
   }
   else if(document.form.password.value==""){
      document.getElementById("pass_err2").style.display="block";
      return false;
   }
   else if(document.form.password.value.length<=7){
      document.getElementById("pass_err1").style.display="block";
      return false;
   }
   else if(document.form.c_pass.value!=document.form.password.value){
      document.getElementById("Confirm_err").style.display="block";
      return false;
   }
   else if(document.form.usern.value.length>6 && document.form.email.value.length>10 && document.form.usern.value.length<=6 && document.form.mobnum.value ==10 && document.form.password.value.length>7){
      document.getElementById("user_e2").style.display="none";
      document.getElementById("user_e1").style.display="none";
      document.getElementById("id_error2").style.display="none";
      document.getElementById("id_error").style.display="none";
      document.getElementById("mobile_e2").style.display="none";
      document.getElementById("pass_err2").style.display="none";
      document.getElementById("pass_err1").style.display="none";
      document.getElementById("Confirm_err").style.display="none";
      return false;
   }
   else if(document.form.c_pass.value==document.form.password.value){
      popup.classList.add("open-slide")
      return false;
   }
}
var popup=document.getElementById('popup');