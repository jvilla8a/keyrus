$(document).ready(function(){

  $("#submit").click(function(evt){
    evt.preventDefault();
    var email   = $('#inputEmail').val();
    var pass    = $('#inputPassword').val();
    var success = $('#success')[0];
    var fail    = $('#fail')[0];

    var validation = validEmail(email);

    if (validation && pass) {
      success.style.display = "block";
      hideAlert(success);
    } else {
      fail.style.display = "block";
      hideAlert(fail);
    }
  });

  function validEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  function hideAlert(alert) {
    setTimeout(function () {
      alert.style.display = "none";
    }, 2000);
  };

})