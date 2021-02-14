pushd ./examples/commonjs
yarn remove @zero-cli/zero-test
popd

pushd ./examples/esm
yarn remove @zero-cli/zero-test
popd

pushd ./examples/react
yarn remove @zero-cli/zero-test
popd

pushd ./examples/react-typescript
yarn remove @zero-cli/zero-test
popd

pushd ./examples/typescript
yarn remove @zero-cli/zero-test
popd

rm zero-cli-zero-test-0.0.*.tgz
npm pack
TGZ=../../$(ls zero-cli-zero-test-0.0.*.tgz)

pushd ./examples/commonjs
yarn add file:$TGZ --dev
yarn jest --clear-cache
yarn zero-test
popd

pushd ./examples/esm
yarn add file:$TGZ --dev
yarn jest --clear-cache
yarn zero-test
popd

pushd ./examples/react
yarn add file:$TGZ --dev
yarn jest --clear-cache
yarn zero-test
popd

pushd ./examples/react-typescript
yarn add file:$TGZ --dev
yarn jest --clear-cache
yarn zero-test
popd

pushd ./examples/typescript
yarn add file:$TGZ --dev
yarn jest --clear-cache
yarn zero-test
popd
