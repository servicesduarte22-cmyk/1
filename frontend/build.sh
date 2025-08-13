#!/bin/bash

# Build script for DigitalOcean App Platform
echo "🚀 Building Services Duarte Frontend..."

# Install dependencies
yarn install

# Build the React app
yarn build

echo "✅ Frontend build complete!"