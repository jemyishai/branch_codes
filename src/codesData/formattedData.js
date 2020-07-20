import branchCodes from './rawData.js';

let data = [];
let keys = Object.keys(branchCodes).sort();
keys.forEach((key)=>{
	data.push(JSON.parse(`{ "branch": "${key}", "code" : "${branchCodes[key]}" }`));
})


export default data;
