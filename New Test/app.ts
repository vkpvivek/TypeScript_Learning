const num1Elem=document.getElementById('num1') as HTMLInputElement;
const num2Elem=document.getElementById('num2') as HTMLInputElement;
const buttonElem =document.querySelector('button')!;


function Add(num1:NumOrString, num2:NumOrString) {
    if(typeof num1==='number' && typeof num2==='number'){
        return num1 + num2;
    }
    if(typeof num1==='string' && typeof num2==='string'){
        return num1 +' '+num2;
    }
    return +num1 + +num2;
}

//Type Aliases 
//[instead of write same type/object multiple place define once and use at other places ]
type NumOrString= number|String;
type Result= {val:number; timestamp:Date};

//Object & Arrays:
const numResult:Array<number>=[];  //genereic type
const textResult:string[]=[];

function printResult(resObj:Result) {
    console.log(resObj);
};



//function for Add
buttonElem.addEventListener('click',()=>{
    const num1=num1Elem.value;
    const num2=num2Elem.value;

    const result= Add(+num1,+num2);
    const stringResult=Add(num1,num2);

    numResult.push(result as number);
    textResult.push(stringResult as string);

    console.log(result);
    console.log(stringResult);
    console.log(numResult,textResult);
});


const myPromise=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('It worked');
    },1000);
});

myPromise.then(res=>{
    console.log(res.split('w'));
})