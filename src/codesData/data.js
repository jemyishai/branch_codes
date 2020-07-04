import branchCodes from './branchCodes.js';

let data = [];
for (const pro in branchCodes) {
  let value = branchCodes[pro]
	data.push(JSON.parse(`{ "branch": "${pro}", "code" : "${value}" }`));
}

export default data;
