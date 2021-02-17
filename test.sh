#! /bin/sh
rm zero-cli-zero-test-*.*.*.tgz
npm pack
TGZ=../../$(ls zero-cli-zero-test-*.*.*.tgz)

for examplePath in examples/*/ ; do
  pushd $examplePath
  yarn add file:$TGZ --dev
  yarn jest --clear-cache
  yarn test
  popd
done
