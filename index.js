'use strict';

module.exports = str => {
	return str
		.replace(/\s/g, '')
		.split(',')
		.map(key => {
			const a = key.split(':')[0];
			const b = key.split(':')[1];

			return {[a]: isNaN(b) ? b : Number(b)};
		})
		.reduce((x, y) => ({...x, ...y}));
};
