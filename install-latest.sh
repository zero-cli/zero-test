#! /bin/sh
examples=("commonjs" "esm" "react" "react-typescript" "typescript")

for example in ${examples[@]}; do
  pushd ./examples/$example
  yarn add @zero-cli/zero-test@latest --dev
  yarn jest --clear-cache
  yarn zero-test
  popd
done
