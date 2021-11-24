"strict mode";
globalThis["defval"]=1;

function sheepCounter() {
    console.clear();
    let snum = window.prompt("How many sheeps you want to see jumping over the fence?", defval);
    //no error catching yet
    for (let i = 0; i < snum; i++) {
        console.log(`Sheep number ${i + 1} jumps over the fence...`);
        var shEx = "I am the Sheep and I exist!";
    }
    console.log(shEx); //message will appear because it's var and not let
}

function comp() {
    console.clear();
    let arg1 = 1;
    let arg2 = true;
    let strictIE =  arg1===arg2;
    let notstrictIE = arg1 == arg2;
    console.log(`results for comparison ${arg1} and ${arg2}:`);
    console.log("strict if equal: "+strictIE);
    console.log("not strict if equal: "+notstrictIE);
    arg1 = "12";
    arg2 = 12;
    let strictine = arg1!==arg2;
    let notstrictine = arg1!=arg2;
    console.log(`results for comparison ${arg1} (string) and ${arg2} (number):`);
    console.log("strict if not equal: "+strictine);
    console.log("not strict if not equal: "+notstrictine);
}

function types() {
    console.clear();
    let str="This is a string";
    let num=25;
    let boo=true;
    let n1=null;
    let n2=undefined;
    let n3=NaN;
    let fun= x=>Math.abs(x);
    let obj=Object();
    let arr=[1,2,"three"];
    let aarr={"one":1, "two":2, "three":3};
    let arrOfVar=[str, num, boo, n1, n2, n3, fun, obj, arr, aarr];
    let type;
    for (let elem of arrOfVar) {
        type = typeof elem;
        console.log(`Type of ${elem} is ${type}`);
    }
    let mathRes=fun(-3.5);
    console.log("Absolute value of -3.5 is "+mathRes);
    console.log("Prooperties of my associative array are:")
    for (elem in aarr) {
        console.log(elem);
    }
    [num, n3, str] = arr;
    console.log(`Values of arr are assigned to num, n3, string: ${num}, ${n3}, ${str}`);
}

