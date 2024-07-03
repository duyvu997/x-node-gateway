#!/usr/bin/env bash

# Bash script to compile Protocol Buffer (.proto) files into TypeScript and gRPC JavaScript using protoc.

# Directory where TypeScript and gRPC JavaScript files will be generated
TS_OUT_DIR="./__protobuf_generated__"

# Path to protoc executable from grpc_tools_node_protoc
PROTOC="$(npm root)/.bin/grpc_tools_node_protoc"

# Path to protoc-gen-ts TypeScript plugin
PROTOC_GEN_TS_PATH="$(npm root)/.bin/protoc-gen-ts"

# Path to protoc-gen-grpc gRPC plugin
PROTOC_GEN_GRPC_PATH="$(npm root)/.bin/grpc_tools_node_protoc_plugin"

# Create the output directory if it doesn't exist
mkdir -p $TS_OUT_DIR

$PROTOC \
    -I="./" \
    --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out=import_style=commonjs:$TS_OUT_DIR \
    --grpc_out=grpc_js:$TS_OUT_DIR \
    --ts_out=grpc_js:$TS_OUT_DIR \
    ./**/*.proto
