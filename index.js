/**
 *  Parses JSON safely, returns undefined instead of throwing an error.
 *
 * @param {string} JSON payload
 */
const parseJSON = payload => {
	let result;

	try {
		result = JSON.parse(payload);
	} catch (error) {
		// Fail safe
	}

	return result;
};

module.exports = parseJSON;
