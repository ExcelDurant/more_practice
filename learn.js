/* var star = "x";
for(let i=0; i<7; i++){
    console.log(star);
    star += "x";
} */


/* for(let i = 0; i<100; i++){
    var output = "";
    if(i % 3 ==0){
        output = "Fuzz";
    } else if(i % 5 == 0){
        output = "Buzz";
    } else if(i % 3 ==0 && i % 5 == 0){
         output = "FuzzBuzz";       
    }
    console.log(output || i);
} */

var size = 8;
var king = "";
for(let i = 0; i <size; i++){
    for(let x=0; x<size; x++){
        if((x + i) % 2 == 0){
            king += "x";
        } else {
            king += "#";
        }
    }
    king += "\n";
}
console.log(king);

function min(x,y){
    if(x<y){
        return x;
    }else if(x == y){
        return "they r the s";
    }else {
        return y;
    }
}

console.log(min(4,3));


function countBs(word){
    var Bs;
    Bs = 0;
    let wordString = String(word);
     n = wordString.length;
      for(let i = 0;i<n; i++ ){
        if(word[i] == 'B'){
            Bs += 1;
        }
    }
    console.log(Bs);
}

countBs("uLL");

function countCh(word, ch){
    var t;
    t = 0;
   let n = word.length;
   for(let i=0; i<n; i++){
       if(word[i] == ch){
           t +=1;
       }
   }
   console.log(t);
}

countCh("lslslslsls", "l");

function isEven(num){
    if(num == 0){
        return true;
    }else if(num == 1){
        return false;
    }else if(num<0){
        return isEven(-num);
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(-75));

/*
function printList(x,y,z){
    let list = [];
    for(let i=x; i<=y; i +=z){
        list.push(i);
        if(z == null){
            z= 1;
        }
    }
    return list;
}

console.log(printList(x,y,z));
var li= printList(x,y,z);
function sumList(x){
   let y=0;
   for(let i = 0; i<x.length; i++){
       y += x[i];
   }
   return y;
}

console.log(sumList(li));
*/

function reverseArray(array){
     let x =[];
     for(let i = array.length-1; i>=0; i--){
       x.push(array[i]);
     }
     return x;

}
var arrayNum = [1,2,3,4];
console.log(reverseArray(arrayNum));
console.log("kill");

let list = {
    value : 1,
    rest: {
        value : 2,
        rest : {
            value: 3,
            rest: null
        }
    }
}

console.log(list);

function addToList(value,list){
    let list1 = {};
    list1 = { value : value,
        rest : list
    }
    return list1;
}

console.log(addToList(5,list));

function listToArray(list){
    let x = [];
    let i=list.value;
    for(let node= list; node; node = node.rest){
        x.push(i);
        i +=1;
    }
    return x;
}

console.log(listToArray(list));


function arrayToList(array){
    let x;
    let list1= {};
    list1= {value: x,
         rest:list1};
    for(i=array.length-1; i>=0; i--){
        x= i;
        list1 = {
            value: x,
            rest: list1
        }
    }
    return list1;

}

console.log(arrayToList(arrayNum));

var script = [{
    name:"troptop",
    living:true,
    order:"rtl",
    age:1
},{
    name:"bull",
    living:false,
    order:"rtl",
    age:2
},{
    name:"shit",
    living:true,
    order:"ltr",
    age:3
},{
    name:"charles",
    living:false,
    order:"ltr",
    age:4
},{
    name: "john",
    living:true,
    order: "ttb",
    age:5
}]

function filter(array, test){
    let alive = [];
    for(let elem of array){
        if(test(elem)){
            alive.push(elem.name);
        }
    }
    return alive;
}

console.log(filter(script, script => script.living));

function multiplier(factor){
    return function(x){
        return x * factor;
    }
}

let doubler = multiplier(2);
console.log(doubler(5));

/*
function createCircle(radius){
   return {
     radius: radius,
    area : function(){
        return console.log(2*2);
    }
} 
}

var Circle = createCircle(2);
console.log(Circle);
*/

function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        return this.radius * this.radius * 2 * Math.PI;
    }
}

var another =  new Circle(2);
console.log(another);
console.log(another.draw);

/** map function */
let doubled = arrayNum.map(doubler);
console.log(doubled);

function randomize(){
    return Math.floor(Math.random()*21);
}
/** fill function */
let  vals = new Array(20);
vals = vals.fill(1).map(randomize);
console.log(vals);

/**reduce function */
function sum(acc, val){
    return acc+val;
}

let answer = vals.reduce(sum, 0);
console.log(answer);

/**filter function */
function isEven(num){
    return (num % 2 == 0)
}
console.log(vals.filter(isEven));
