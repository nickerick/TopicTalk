#!/bin/sh

echo "Starting full build"

npm i
npm run build
cd server
npm i

echo "Build success"