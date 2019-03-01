const jParse = require('.');

const json = `
{"data": ["value", {"key": "name", "value": "John Doe"}]}
`;

test('Parses JSON properly', () => {
	const parsed = jParse(json);

	expect(parsed.data.length).toBe(2);
});

test('Parses null', () => {
	const parsed = jParse(null);

	expect(parsed).toBe(null);
});

test('Safely returns undefined on malformed JSON', () => {
	const parsed = jParse('malformed json');

	expect(parsed).toBe(undefined);
});

test('Safely returns if something irrellevant goes through', () => {
	[
		1,
		0,
		-1,
		false,
		true,
		Math,
		process,
		[],
		new Map([]),
		{},
		undefined,
		null,
		Infinity,
	].forEach(p => expect(() => jParse(p)).not.toThrow());
});
