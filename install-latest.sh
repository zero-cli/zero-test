#! /bin/sh
for examplePath in examples/*/ ; do
  pushd $examplePath
  yarn add @zero-cli/zero-test@latest --dev
  popd
done
