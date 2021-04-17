const axios = require('axios');

function add(num1, num2) {
	return num1 + num2;
}

function centuryFromYear(year) {
	return Math.ceil(year / 100);
}

const createUser = ({ name, lastName }) => {
	return {
		name,
		lastName
	};
};

const fetchUser = async (userId) => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/users/' + userId
	);

	return response.data;
};

const fetchPost = async (postId) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);

	return response.data;
};

const reverseString = (string) => {
	return string.split('').reverse().join('');
};

const checkValue = (value) => {
	return value;
};

const isAnagram = (str1, str2) => {
	if (formatStr(str1) === formatStr(str2)) {
		return true;
	} else {
		return false;
	}
};

// Private
const formatStr = (str) => {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};

module.exports = {
	add,
	centuryFromYear,
	createUser,
	fetchUser,
	fetchPost,
	reverseString,
	checkValue,
	isAnagram
};
