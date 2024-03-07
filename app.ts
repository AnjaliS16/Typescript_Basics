const number1=document.getElementById('num1')as HTMLInputElement
const number2=document.getElementById('num2')as HTMLInputElement
const addbutton=document.getElementById('addbutton')!

const numArray:Array<number>=[];
const stringArray:string[]=[];

type numOrstring= number | string;
interface Result {
    val:number;
    timestamp:Date;
}

function add(num1:numOrstring,num2:numOrstring){
    if(typeof num1 ==='number'  &&  typeof num2==='number'){
        return num1+num2;
    }
    else if(typeof num1 ==='string'  &&  typeof num2==='string'){
        return num1+' '+num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj:Result){
    console.log(resultObj);

}

addbutton.addEventListener('click',()=>{
    const num1=number1.value;
    const num2=number2.value;
const result= add(+num1,+num2)
numArray.push(result as number);

const stringresult=add(num1,num2);
stringArray.push(stringresult as string);

console.log('number result>>',result)
console.log('string result>>',stringresult);
printResult({val:result as number,timestamp:new Date()})


})

const myPromise= new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('It worked!');

    },1000);
})

myPromise.then((result)=>{
    console.log(result.split('w'));
})