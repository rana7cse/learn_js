(function(){
    'use strict';

    function add(a,b){
        return a+b;
    }

    function addAll(){
        return arguments
    }

    function cat(a,b){
        return add(a,b);
        function add(a,b){
            return 2*(a+b);
        }
    }

    console.log(add(3,3));
    console.log(typeof add);
    console.log(addAll(1,2,3,4));
    console.log(cat(1,2));

})();
