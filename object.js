(function(){
	'use strict';
	// Basic Object ;
    var myObj = {};
    myObj.set_name = function(name){
    	this.name = name
    };
    myObj.set_name('Salahuddin Rana');
    console.log(myObj.hasOwnProperty('name'));
    console.log(myObj.name);
    console.log(myObj.propertyIsEnumerable('name' && 'set_name'));
    console.log(myObj.toString());
    console.log([1,2].toString());

    // exact datatype found;
    console.log(Object.prototype.toString.call({}));
    console.log(Object.prototype.toString.call([]));
    console.log(Object.prototype.toString.call(1));
    console.log(Object.prototype.toString.call("R"));
    console.log(Object.prototype.toString.call(true));
    console.log(Object.prototype.toString.call(function(){}));
    console.log(Object.prototype.toString.call(null));
    console.log(Object.prototype.toString.call(undefined));

    // Basic Function;

    function add(a,b){
        return a,b;
    }

    var sub = function(a,b){
        return a-b;
    };

    console.log(add.length);
    console.log(sub.length);

    // CALL AND APPLY BIND

    var Voter = {
        name : "Salahuddin Rana",
        age : 24
    };

    function success(ID){
        console.log("Hi "+this.name+" Your Age is "+this.age+" Successfully You get the ID: "+ID);
    }

    success.call(Voter,'FUCKFUCK','tik');

    function setApply(func,object,args){
        func.apply(object,args);
    }

    setApply(success,Voter,['pokot'])

    function addItem(price,charge){
        if(!this.total){
            this.total = 0;
        }
        this.total += price += charge || 0;
        return this.name +"'s purshed $"+this.total;
    }

    var buyItem = addItem.bind(Voter,1);

    console.log(buyItem(100));
    console.log(buyItem(100));
    
})();
