import test from 'ava';
import sTo from '.';

const objString = 'a: a, b: b, c: 3, d: 7';

const fixture = {
	a: 'a',
	b: 'b',
	c: 3,
	d: 7
};

test('Test string to object', t => {
	t.is(typeof sTo(objString), 'object');
	t.is(sTo(objString).a, fixture.a);
	t.is(sTo(objString).b, fixture.b);
	t.is(sTo(objString).c, fixture.c);
	t.is(sTo(objString).d, fixture.d);
	t.not(sTo(objString).c, `${fixture.c}`);
});
