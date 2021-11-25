
    function light(sw) {
        var pic; 
          if (sw == 1) {
            pic = "https://pbs.twimg.com/profile_images/1290621444670488576/RW4Lr7Y0_400x400.jpg"
  
          } else if(sw == 2) {
            pic = "https://pbs.twimg.com/profile_images/1433212530957094919/wMdQ6mD0_400x400.jpg"
          
          } else if(sw == 3) {
            pic = "https://pbs.twimg.com/profile_images/1421201342077579268/LyjPjcJl_400x400.jpg"
  
          } else if(sw == 4) {
            pic = "https://pbs.twimg.com/profile_images/1392607468350488584/Teu4n6r7_400x400.jpg"
          }
          else {
            pic = "https://avatars.githubusercontent.com/u/79423600?v=4"
          }
        document.getElementById('myImage').src = pic;
                       }





// storing input from register-form
function store() {
  
 // Name and Password from the register-form
  var name = document.getElementById('name').value;
var pw = document.getElementById('pw').value;

  console.log(name)
    localStorage.setItem('name', name );
    localStorage.setItem('pw', pw);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    }else {
        alert('You are loged in.');
    }
}

                        