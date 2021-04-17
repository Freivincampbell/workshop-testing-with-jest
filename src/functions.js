const axios = require('axios');

const add = (num1, num2) => num1 + num2;

function centuryFromYear(year) {}

const createUser = ({ name, lastName }) => {
	return { name,lastName }
};

const reverseString = (string) => {
	return string.split('').reverse().join('');
};

const checkValue = (value) => {
	return value;
};

const fetchUser = async (userId) => {
	const { data } = await axios.get(
		'https://jsonplaceholder.typicode.com/users/' + userId
	);

	return data.name;
};

const fetchPost = async (postId) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);

	return response.data;
};

module.exports = {
	add,
	centuryFromYear,
	createUser,
	fetchUser,
	fetchPost,
	reverseString,
	checkValue
};
