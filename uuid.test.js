// uuid.test.js
const { v4: uuidv4 } = require('uuid');

test('UUID should be valid', () => {
  const uuid = uuidv4();
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  expect(regex.test(uuid)).toBe(true);
});
