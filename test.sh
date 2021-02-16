#! /bin/sh
rm zero-cli-zero-test-*.*.*.tgz
npm pack
TGZ=../../$(ls zero-cli-zero-test-*.*.*.tgz)

for example in $(ls ./examples); do
  pushd ./examples/$example
  yarn add file:$TGZ --dev
  yarn jest --clear-cache
  yarn zero-test
  popd
done
