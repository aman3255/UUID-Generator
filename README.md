# UUID Generator 🆔

A comprehensive UUID generator with CLI support, built with Node.js. Generate, validate, and manage UUIDs with ease!

## Features ✨

- **Multiple UUID Versions**: Support for UUID v1, v3, v4, and v5
- **CLI Interface**: Easy-to-use command-line interface
- **Batch Generation**: Generate multiple UUIDs at once
- **Validation**: Validate UUID format and version
- **History Tracking**: Keep track of generated UUIDs
- **File Operations**: Save and load UUIDs to/from files
- **Docker Support**: Containerized application
- **Testing Suite**: Comprehensive test coverage

## Installation 📦

```bash
# Clone the repository
git clone https://github.com/yourusername/UUID_Generator.git
cd UUID_Generator

# Install dependencies
npm install

# Run the application
npm start
```

## Usage 🚀

### Basic Usage (Demo Mode)
```bash
npm start
# or
node index.js
```

### CLI Commands

#### Generate Single UUID
```bash
# Generate random UUID (v4) - default
node index.js gen
node index.js gen v4

# Generate timestamp-based UUID (v1)
node index.js gen v1

# Generate name-based UUID (v5)
node index.js gen v5 "example.com"

# Generate name-based UUID (v3)
node index.js gen v3 "example.com"
```

#### Validate UUID
```bash
node index.js validate 550e8400-e29b-41d4-a716-446655440000
node index.js val f47ac10b-58cc-4372-a567-0e02b2c3d479
```

#### Batch Generation
```bash
# Generate 10 UUIDs
node index.js batch 10

# Generate 5 v1 UUIDs
node index.js batch 5 v1

# Generate and save to file
node index.js batch 20 v4 --save
```

#### View History
```bash
node index.js history
```

#### Help
```bash
node index.js help
```

### npm Scripts
```bash
npm run demo        # Run demo
npm run generate    # Generate single UUID
npm run test        # Run test suite
npm run build       # Build and test
```

## API Reference 📚

### UUIDGenerator Class

```javascript
const UUIDGenerator = require('./index.js');
const generator = new UUIDGenerator();

// Generate UUIDs
const randomUUID = generator.generateRandom();
const timestampUUID = generator.generateTimestamp();
const nameBasedUUID = generator.generateNameBased('example.com', 5);

// Validate UUID
const isValid = generator.isValid(uuid);

// Batch generation
const batch = generator.generateBatch(10, 'v4');

// History
const history = generator.getHistory();
```

## Docker Usage 🐳

### Build Docker Image
```bash
docker build -t uuid-generator .
```

### Run in Docker
```bash
# Run demo
docker run uuid-generator

# Generate UUID
docker run uuid-generator gen v4

# Batch generation
docker run uuid-generator batch 5
```

## Testing 🧪

```bash
# Run test suite
npm test
# or
node test.js
```

### Test Coverage
- UUID format validation
- Uniqueness testing
- Performance benchmarks
- Edge case handling
- CLI interface testing

## Development 💻

### Prerequisites
- Node.js >= 16.0.0
- npm >= 8.0.0

### Setup Development Environment
```bash
# Install development dependencies
npm install

# Install nodemon for development
npm install -g nodemon

# Run in development mode
npm run dev
```

### Project Structure
```
UUID_Generator/
├── index.js          # Main application file
├── test.js           # Test suite
├── package.json      # Project configuration
├── Dockerfile        # Docker configuration
├── .dockerignore     # Docker ignore file
├── README.md         # Documentation
└── .github/
    └── workflows/
        └── ci.yml    # GitHub Actions CI/CD
```

## Examples 📋

### Generate Different UUID Types
```bash
# Random UUID (most common)
$ node index.js gen v4
🆔 Generated UUID (v4): f47ac10b-58cc-4372-a567-0e02b2c3d479

# Timestamp-based UUID
$ node index.js gen v1
🆔 Generated UUID (v1): 6c84fb90-12c4-11e1-840d-7b25c5ee775a

# Name-based UUID (deterministic)
$ node index.js gen v5 "example.com"
🆔 Generated UUID (v5): 9125a8dc-52ee-365b-a5aa-81b0b3681cf6
```

### Validation Examples
```bash
$ node index.js validate f47ac10b-58cc-4372-a567-0e02b2c3d479
✅ UUID "f47ac10b-58cc-4372-a567-0e02b2c3d479" is valid

$ node index.js validate invalid-uuid
❌ UUID "invalid-uuid" is invalid
```

## Performance 📊

- Generates 1000+ UUIDs per second
- Memory efficient with history tracking
- Optimized for both single and batch operations

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog 📝

### v1.0.0
- Initial release
- Basic UUID generation (v1, v3, v4, v5)
- CLI interface
- Validation functionality
- Batch generation
- Docker support
- Test suite

## Support 💬

If you have any questions or issues, please:
1. Check the [Issues](https://github.com/yourusername/UUID_Generator/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

## Acknowledgments 🙏

- Built with the [uuid](https://www.npmjs.com/package/uuid) npm package
- Inspired by the need for a comprehensive UUID management tool
- Thanks to the Node.js community for excellent tooling

