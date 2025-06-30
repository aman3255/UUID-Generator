// First, install the uuid package:
// npm install uuid

const { v4: uuidv4, v1: uuidv1, v3: uuidv3, v5: uuidv5 } = require('uuid');

// Generate a random UUID (v4) - most commonly used
const randomUUID = uuidv4();
console.log('Random UUID (v4):', randomUUID);

// Generate a timestamp-based UUID (v1)
const timestampUUID = uuidv1();
console.log('Timestamp UUID (v1):', timestampUUID);

// Generate a name-based UUID (v3) using MD5
const namespace = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const name = 'example.com';
const nameBasedUUID_v3 = uuidv3(name, namespace);
console.log('Name-based UUID (v3):', nameBasedUUID_v3);

// Generate a name-based UUID (v5) using SHA-1
const nameBasedUUID_v5 = uuidv5(name, namespace);
console.log('Name-based UUID (v5):', nameBasedUUID_v5);

// Function to generate multiple UUIDs
function generateMultipleUUIDs(count = 5) {
    const uuids = [];
    for (let i = 0; i < count; i++) {
        uuids.push(uuidv4());
    }
    return uuids;
}

// Generate 5 random UUIDs
const multipleUUIDs = generateMultipleUUIDs(5);
console.log('Multiple UUIDs:');
multipleUUIDs.forEach((uuid, index) => {
    console.log(`${index + 1}. ${uuid}`);
});

// Validate a UUID
function isValidUUID(uuid) {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}

// Test UUID validation
const testUUID = uuidv4();
console.log(`Is "${testUUID}" a valid UUID?`, isValidUUID(testUUID));
console.log('Is "invalid-uuid" a valid UUID?', isValidUUID('invalid-uuid'));