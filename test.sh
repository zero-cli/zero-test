#! /bin/sh
for examplePath in examples/*/ ; do
  pushd $examplePath
  yarn jest --clear-cache
  yarn test
  popd
done
