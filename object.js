// const person={
//     city:"begusarai",
//     greet(){
//         console.log(`hello ${this.city}`)
//     }
// }

// const student={
//    name:"sintu"
// }

// Object.setPrototypeOf(student,person);
// student.greet();
// console.log(student.city)
// console.log(person.name)

const crypto=require('crypto')

function findHashWithPrefix(prefix) {
    let input=596139;
    while (true) {
        let inputStr=input.toString();
        let hash=crypto.createHash('sha256').update(inputStr).digest('hex')
         if (hash.startsWith(prefix)) {
                return {input:inputStr,hash:hash}
            }
            input++;
    }
}

const result=findHashWithPrefix("0000000000000000000")
console.log(`input: ${result.input}`)
console.log(`Hash: ${result.hash}`)