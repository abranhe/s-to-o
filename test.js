import test from 'ava';
const sTo =  require('./');

const obj = {
	a: '1',
	b: '2',
	c: '3',
	d: '4'
};

test('Test string to object', t => {
	t.truthy(sTo('a: 1, b: 2, c: 3, d: 4'), obj);
});
