#!/bin/bash

# Path to this plugin
PROTOC_GEN_TS_PATH="../../node_modules/.bin/protoc-gen-ts"
# Path to the grpc_node_plugin
PROTOC_GEN_GRPC_PATH="../../node_modules/.bin/grpc_tools_node_protoc_plugin"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./__protobuf_generated__"

# List of .proto files to compile (adjust as needed)
PROTO_FILES="./employee.proto"

# Create output directory if it doesn't exist
mkdir -p $OUT_DIR

# Run protoc command for each .proto file
for FILE in $PROTO_FILES; do
  protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-node:${OUT_DIR}" \
    --grpc_out="${OUT_DIR}" \
    $FILE
done
