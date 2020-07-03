import branchCodes from './branchCodes.js';

let data = [];
for (const pro in branchCodes) {
  let value = branchCodes[pro]
	data.push(`{ "${pro}" : "${value}" }`);
}

export default data;
