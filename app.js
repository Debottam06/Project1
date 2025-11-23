import { insert,get,deleteRow} from './data.js'

// await insert("student",{name:"Kusal",marks:"90"});
// await insert("class",{
//     name:"Class 5"
// })
// await insert("student",{name:"Kun",marks:"95"});
// await insert("student",{name:"Debu",marks:"95"});
// await insert("class",{name:"Class 4"})
// await insert("student",{name:"Bapi",marks:97});
// await insert("student",{name:"B",marks:97});
// const table  = await get("class");
// console.log(table);
// await deleteRow("class",{id:"1"});
const table  = await get("class");
console.log(table);