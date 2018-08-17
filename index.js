'use strict';

module.exports = (str) => {
	const obj = {};

	str.replace(/\s/g, '').split(',').forEach(propName => {
		const propVal = propName.split(':');
		obj[propVal[0]] = propVal[1] || null;
	});

	return obj;
};
