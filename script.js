function formValidate(){
    // required variables for validation
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let msg = document.getElementById("message");
    let fnameAlert = document.querySelector(".fname-alert");
    let sendButton = document.querySelector(".send");
    let form = document.querySelector(".contact");
    let lnameAlert = document.querySelector(".lname-alert");
    let messageAlert = document.querySelector(".message-alert");
    let emailAlert = document.querySelector(".email-alert");
  
    // event listener for clicking send button
    sendButton.addEventListener("click", function(){
        // fname validations
      if (fname.value == ""){
        fnameAlert.style.opacity = "1";
        fnameAlert.style.transform = "translateY(0)";
        fnameAlert.style.transition = "1s";
        sendButton.disabled = true;
      } else {
        sendButton.disabled = false;
      };

      fname.addEventListener("input", function(){
          fnameAlert.style.opacity ="0";
          sendButton.disabled = false;
      });

      // lname validations
      if (lname.value == ""){
        lnameAlert.style.opacity = "1";
        lnameAlert.style.transform = "translateY(0)";
        lnameAlert.style.transition = "1s";
        sendButton.disabled = true;
      } else {
        sendButton.disabled = false;
      };

      lname.addEventListener("input", function(){
          lnameAlert.style.opacity ="0";
          sendButton.disabled = false;
      });

      // email validations
      if (email.value == ""){
        emailAlert.style.opacity = "1";
        emailAlert.style.transform = "translateY(0)";
        emailAlert.style.transition = "1s";
        sendButton.disabled = true;
      } else {
        sendButton.disabled = false;
      };

      email.addEventListener("input", function(){
          emailAlert.style.opacity ="0";
          sendButton.disabled = false;
      });

      // message validation

      if (msg.value == ""){
        messageAlert.style.opacity = "1";
        messageAlert.style.transform = "translateY(0)";
        messageAlert.style.transition = "1s";
        sendButton.disabled = true;
      } else {
        sendButton.disabled = false;
      };

      msg.addEventListener("input", function(){
          messageAlert.style.opacity ="0";
          sendButton.disabled = false;
      });


     

      console.log(msg.value);

    });

  
  };
  
  formValidate();