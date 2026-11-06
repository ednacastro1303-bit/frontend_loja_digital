#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Copy to dist if needed
mkdir -p dist
cp -r build/* dist/

echo "Build complete!"
