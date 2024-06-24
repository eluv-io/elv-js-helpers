#!/usr/bin/env bash

BUILD_DIR=build

mkdir -p $BUILD_DIR

if cd $BUILD_DIR ; then
    echo "Copying files to build directory..."
else
    echo "cd to /build failed"
    exit 1
fi

cp ../{.npmignore,package.json,LICENSE,README.md} .
cp -r ../src/* .

cd ..
