import branchCodes from './branchCodes.js';

let data = [];
let keys = Object.keys(branchCodes).sort();
keys.forEach((key)=>{
  let value = branchCodes[key]
	data.push(JSON.parse(`{ "branch": "${key}", "code" : "${value}" }`));
})

// for (const pro in branchCodes) {

// }

export default data;
