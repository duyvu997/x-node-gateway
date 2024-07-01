#!/bin/bash

 -I=src/grpc/ "./employee.proto"


 #!/bin/bash

# Path to this plugin
PROTOC_GEN_TS_PATH="../../node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./__protobuf_generated__"

# List of .proto files to compile (adjust as needed)
PROTO_FILES="./employee.proto"

# Create output directory if it doesn't exist
mkdir -p $OUT_DIR

# Run protoc command for each .proto file
for FILE in $PROTO_FILES; do
    protoc --plugin=$(npm root)/.bin/protoc-gen-ts \
    --ts_proto_out=dist \
    --ts_proto_opt=outputServices=grpc-js \
    --ts_proto_opt=esModuleInterop=true \
    $FILE
done
