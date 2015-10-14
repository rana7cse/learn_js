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
})();
