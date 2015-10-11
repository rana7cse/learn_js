(function(){
    'use strict';
    var MyString = "Salahuddin Rana";
    console.log("----------String Start Functions---------");
    console.log(MyString.length);
    console.log(MyString.indexOf('a',4));
    console.log(MyString.toUpperCase());
    console.log(MyString.toLowerCase());
    console.log(MyString.substr(11));
    console.log(MyString.split(" "));
    console.log(MyString.slice(-4));

    console.log("---------- ENDS ---------\n\n");

    console.log("----------Array Functions Start---------");

    var myArray = ['zero','one','two','three'];
    console.log("MY Array : "+myArray);
    console.log("Now Length : " +myArray.length);
    console.log("after push length : "+myArray.push('four'));
    console.log("Now Array : "+myArray);
    console.log("add item to first : "+myArray.unshift("-one"));
    console.log("Now Array : "+myArray);
    console.log("remove last item : "+myArray.pop());
    console.log("Now Array : "+myArray);
    console.log("remove first item : "+myArray.shift());
    console.log("Now Array : "+myArray);
    console.log("replace with splice : "+myArray.splice(0,4,1,100,2,3));
    console.log("Now Array : "+myArray);
    console.log("Reverse Array : "+myArray.reverse());
    console.log("SORT : "+myArray.sort(function(a,b){
            return a > b;
        }));
    console.log("slice : "+myArray.slice(-2));
    console.log("Join : "+myArray.join("."));

    myArray.forEach(function(val,index){
        console.log("-> "+val+" on "+index+" index")
    });

    console.log("check every : "+myArray.every(function(e){
            return typeof e === 'number';
        }));

    console.log("filter ODD : "+myArray.filter(function(e){
            return e%2 == 0;
        }));

    console.log("---------- ENDS ---------\n\n");
}());