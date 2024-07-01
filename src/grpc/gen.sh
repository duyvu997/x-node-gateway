#!/usr/bin/env bash

TS_OUT_DIR="./__protobuf_generated__"
PROTOC="$(npm root)/.bin/grpc_tools_node_protoc"
PROTOC_GEN_TS_PATH="$(npm root)/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="$(npm root)/.bin/grpc_tools_node_protoc_plugin"

mkdir -p $TS_OUT_DIR

$PROTOC \
    -I="./" \
    --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out=import_style=commonjs:$TS_OUT_DIR \
    --grpc_out=grpc_js:$TS_OUT_DIR \
    --ts_out=grpc_js:$TS_OUT_DIR \
    ./**/*.proto



    # --grpc_out=import_style=typescript,grpc_js:$TS_OUT_DIR \
