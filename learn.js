///---------------- Utility Functions are Here ------------
function h1(heading){
    console.log("//--------------------------//");
    console.log("//-------->  "+heading);
    console.log("//--------------------------//\n");
}

function h2(heading){
    console.log("--------->  "+heading+"   <---------");
}

function q(question){
    console.log("-- " + question + " ?");
}

function o(output){
    console.log("out//-> "+output);
}
///---------------- Utility Functions are Here ------------

///--------- Learning Javascript Alert -------------
h1('JavaScript Basic');

//---------- Lets Learn variable ---------------

h2('Learn Variable  ');
q('What is variable');
console.log("A variable is a reference name of memory space where we store the data as the value as the variable. \nHere is a example of javascript variable :");
console.log("** var variableName ="+
    "'Hello World';\n" +
    "** console.log(variableName);");
var variableName = "Hello World";
o(variableName);

//------ Number & String ------
q("How to represent Number and String in Javascript");
console.log("We all know about that javascript is type independent language like php,python,ruby.");
console.log("How can i make difference between number or string as a variable value ?");
console.log("Simply string can be represent with Double quote or Single quote");
console.log("Here is the Example of");
var name = "Sumon Bangla", age = 30;
console.log("| var name = \"Sumon Bangla\", age = 30;");
o(typeof name);
