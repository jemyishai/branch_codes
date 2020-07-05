import branchCodes from './branchCodes.js';

let data = [];
let keys = Object.keys(branchCodes).sort();
keys.forEach((key)=>{
  // let value = ;
	data.push(JSON.parse(`{ "branch": "${key}", "code" : "${branchCodes[key]}" }`));
})

// for (const pro in branchCodes) {

// }

export default data;
