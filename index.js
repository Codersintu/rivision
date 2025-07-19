// const person={
//     name:"sintu",
//     surname:"mahto"
// }
// console.log(person.name + " " + person.surname)

// let answer=0;
// for (let i = 0; i <= 100; i++) {
//     answer=answer+i;
// }
//   console.log(answer)    


// const arr=[1,2,3,4,56,6,7]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2==0) {
//         console.log("even")
//     } else {
//         console.log("chutiya")
//     }
// }

// function summ(a,b){
//    return a+b
// }
// console.log("new",summ(33,44))
// console.log(summ(1,2))

// function greet(){
//     console.log("hellosintu")
// }
// function greetclient(){
//     console.log("hello bro ")
// }
// setTimeout(greetclient,  1000)
// greet()


//ABOUT SLICE,indexOf AND lastIndexOf
// function greets(str,target){
//     console.log("hello",str)
//     console.log("hello",str.length)
//     console.log("hello",target.length)
//     console.log("hello",str.indexOf(target))
//     console.log("hello",str.lastIndexOf(target))
// }
// greets("sintu mhto mahto mahto","mahto")

// const value="harkirate singht"
// let ans=value.slice(3,11)
// console.log(ans)


//SPLIT
// const value="hi my name ios harkirat that"
// const words=value.split(" ",4)
// console.log(words)

//parseInt
// console.log(parseInt("42.23"))
// console.log(parseFloat("2341.34"))

//forEach function
// const initialArray=[2,3,4,5,6,7]
// function log(str){
//     console.log(str+" is the string");
// }
// initialArray.forEach(log)


//class function
// class Animal{
//     constructor(name,legcount,speaks){
//         this.name=name;
//         this.legcount=legcount;
//         this.speaks=speaks
//     }
//     static janwar(){
//         console.log("janwar")
//     }
//     speak(){
//         console.log("hii there"+this.speaks)
//     }
// }

// console.log(Animal.janwar())
// const dog=new Animal("dog","10","bhow bhow")
// const horse=new Animal("horse",4,"hhinhhin...")
// dog.speak()


// const date=new Date();
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getMinutes())
// console.log(Date.now().toLocaleString())


//loop
// let ans=0;
// for (let i = 0; i < 10000; i++) {
//     ans=ans+i;
    
// }
// console.log(ans)


// console.log("hey bro whatspp!")
// const fs=require("fs");
// const { resolve } = require("path");
// const { promiseHooks } = require("v8");
// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log("data read kro!")
//     console.log(data)
// });
// let ans=0;
// for (let i = 0; i < 10000; i++) {
//     ans=ans+i;
    
// }
// console.log(ans)

// console.log("yap!")


// function onDone(){
//     console.log("hii there")
// }
// setTimeout(onDone,1000);
// console.log("after settimeout")


// let n=new Promise(function(resolve){
//     resolve()
//     console.log("n")
// })



const express=require("express")
const app=express()

// write logic if any user hit request more than 5 times period of 1sec then you have to block that user

// let numberofRequestUser={};

// setInterval(() => {
//   numberofRequestUser={}
// }, 1000);

// app.use('*',async(req,res,next)=>{
//     const userId= req.header('user-id')
//     if (!userId) {
//       res.status(400);
//     return res.json({message:'Missing user-id header'});
//   }
  
//   if (numberofRequestUser[userId]) {
//       numberofRequestUser[userId]=numberofRequestUser[userId] + 1;
//       if (numberofRequestUser[userId] > 5) {
//         res.status(429);
//        return res.json({message:"no-entry"})
//       } else {
//         next()
//       }
//     }else{
//       numberofRequestUser[userId]=1;
//       next();
//     }
//       await next();
// })

// const zod=require("zod")
// const jwt=require("jsonwebtoken")

// //write a function that takes username,password and create jwt token using this credentials add zod library
// const schema = zod.object({
//   email: zod.string().email() , // ✅ correct usage
//   password:zod.string().min(6)
// });
// function Signin(username,password) {
//   const userResponse=schema.safeParse(email)
//   const passwordResponse=passwordSchema.safeParse(password)

//   const token=jwt.sign({username},"secret")
//   console.log(token)
//   return token;
// }
// Signin("sintugmailcom","sintu123@")


// const port=5000;
// app.get("/",(req,res)=>{
//     res.send("hello sintu! just accesed my local express.js server from my mobile using same wifi")
// })

// app.listen(port,()=>{
//   console.log(`example app listening on port ${port}`)
// })

function guess(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age>18 && arr[i].gender==="male") {
      console.log('yes hai',arr[i].name)
    }else{
      console.log("durr brbak")
    }
    
  }
}
const users=[{
  name:"sintu",
  age:21,
  gender:"male"
},{
  name:"sakshi",
  age:21,
  gender:"female"
},
{
  name:"sinu",
  age:11,
  gender:"male"
}
]
guess(users)