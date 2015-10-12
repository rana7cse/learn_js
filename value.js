(function(){
    'use strict';
    console.log("/-----------/ Now We Will Show Javascript Value /-----------/");
    console.log(true === true);// true === true
    console.log( true && false || true || false && false);
    console.log({} instanceof Object); // check instance of type;
    console.log([] instanceof Array); // check array object;
    console.log([] == "");
    console.log([] == {});
    console.log([] == null);
    console.log("" == null);
    console.log(undefined == null);
    console.log(9 == "9");
    console.log(typeof 100);
    console.log(typeof "rana");
    console.log(typeof Array);
    console.log(typeof []);
    console.log(typeof {});
    console.log(typeof RegExp);
    console.log(typeof Object());
    console.log(typeof true);
    console.log(typeof undefined);
    console.log(typeof NaN);
    console.log(typeof null);
    var num = "20";
    console.log(typeof Number(num));
})();