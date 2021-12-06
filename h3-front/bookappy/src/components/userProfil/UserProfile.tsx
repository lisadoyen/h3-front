var UserProfile = (function() {
    var id = "";
  
    var getId = function() {
      return id;    // Or pull this from cookie/localStorage
    };
  
    var setId = function(userId:any) {
        id = userId;     
      // Also set this in cookie/localStorage
    };
  
    return {
        getId: getId,
      setId: setId
    }
  
  })();
  
  export default UserProfile;