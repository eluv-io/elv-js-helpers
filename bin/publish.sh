#!/usr/bin/env bash

BUILD_DIR=build

mkdir -p $BUILD_DIR
cd $BUILD_DIR

cp ../{.npmignore,package.json,LICENSE,README.md} .

#npm publish

cd ..
