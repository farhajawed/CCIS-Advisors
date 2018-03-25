(function(){
    angular
        .module("CCISAdvisor")
        .controller("RegisterController", RegisterController);
    
    function RegisterController($location, UserService){
       var vm = this;
        
        vm.register = register;
        
        function register(username, password, passwordVerify, firstName, lastName){
            if(username != null && password != null && passwordVerify != null) {
                if(password == passwordVerify){
                    var user = {"username": username, "password": password, "firstName": firstName, "lastName": lastName, "reputationPoints": 0};
                    UserService
                        .register(user)
                        .then(
                            function(response){
                                var user = response.data;
                                if (user) {
                                    $location.url("/user/" + user._id);
                                } else {
                                    vm.error = "Unable to Register. Try a different Username";
                                }
                            },
                            function(error){
                                vm.error = error.data;
                            }
                        )
                }
                else{
                    vm.error = "Both passwords must be same";
                }

            }
        }
    }
})();
