const { add, createUser, fetchUser } = require('../src/functions');

describe('Add function', () => {
	it('should  return 1 + 2', () => {
		expect(add(1,2)).toBe(3);
	});

	it('Should return 3 + 4', () => {
		expect(add(3,4)).toBe(7);
	});

	it('Should be under or equal 1000', () => {
		const num1 = 500;
		const num2 = 500;

		expect(add(num1, num2)).toBeLessThanOrEqual(1000);
	});
});

describe('Create user function', () => {
	it('should return a user object', () => {
		expect(createUser({ name: 'Freivin', lastName: 'Campbell' })).toEqual(
			{ name: 'Freivin', lastName: 'Campbell' }
		);
	});
});

describe('Fetch a user from api', () => {
	it('should fetch user 1 => Leanne Graham', async () => {
		const name = await fetchUser(1);
		expect(name).toEqual('Leanne Graham');
	});

	it('should fetch user 1 => Leanne Graham', async () => {
		const name = await fetchUser(2);
		expect(name).toEqual('Ervin Howell');
	});
});

