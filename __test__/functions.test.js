const {
	add,
	centuryFromYear,
	createUser,
	fetchUser,
	fetchPost,
	reverseString,
	checkValue
} = require('../src/functions');

describe('Add function', () => {
	it('should add 1 + 2', () => {
		expect(add(1, 2)).toEqual(3);
	});

	it('should add 3 + 4 numbers', () => {
		expect(add(3, 4)).toEqual(7);
	});

	it('should add 5 + 6 numbers', () => {
		expect(add(5, 6)).toEqual(11);
	});

	it('Should be under or equal 1000', () => {
		const num1 = 500;
		const num2 = 500;

		expect(add(num1, num2)).toBeLessThanOrEqual(1000);
	});
});

describe('centuryFromYear function', () => {
	it('should calculate century`s 1905', () => {
		expect(centuryFromYear(1905)).toEqual(20);
	});

	it('should calculate century`s 1700', () => {
		expect(centuryFromYear(1700)).toEqual(17);
	});

	it('should calculate century`s 374', () => {
		expect(centuryFromYear(374)).toEqual(4);
	});
});

describe('createUser function', () => {
	it('should return a user object', () => {
		expect(createUser({ name: 'Freivin', lastName: 'Campbell' })).toEqual({
			name: 'Freivin',
			lastName: 'Campbell'
		});
	});
});

describe('fetch a User', () => {
	it('should fetch user 1 => Leanne Graham ', async () => {
		const data = await fetchUser(1);
		expect(data.name).toEqual('Leanne Graham');
	});

	it('should fetch user 2 => Ervin Howell', async () => {
		const data = await fetchUser(2);
		expect(data.name).toEqual('Ervin Howell');
	});
});

describe('fetch a Post', () => {
	it('should fetch post 1 ', async () => {
		const data = await fetchPost(1);
		expect(data).toEqual({
			userId: 1,
			id: 1,
			title:
				'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body:
				'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
		});
	});

	it('Should no find Z in post`s title', async () => {
		const data = await fetchPost(1);
		expect(data.title).not.toMatch(/Z/);
	});
});

describe('reverseString function', () => {
	it('should reverseString exists', () => {
		expect(reverseString).toBeDefined();
	});

	it('should  reverse Hello => olleH ', () => {
		expect(reverseString('Hello')).toEqual('olleH');
	});
});

describe('checkValue function', () => {
	it('should be falsy', () => {
		expect(checkValue(undefined)).toBeFalsy();
	});

	it('should be truthy', () => {
		expect(checkValue(1)).toBeTruthy();
	});
});
