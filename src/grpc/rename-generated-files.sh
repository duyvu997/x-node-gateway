#!/bin/bash

# Script to convert generated gRPC JavaScript files to CommonJS modules (.cjs).

# Find all files ending with _grpc_pb.js in the specified directory
grpc_files=$(find ./__protobuf_generated__/proto -name "*_grpc_pb.js")

for file in $grpc_files; do
    content=$(<"$file")
    
    new_content=$(echo "$content" | sed 's/_pb\.js/_pb\.cjs/g')
    
    echo "$new_content" > "$file"
    
    filename=$(basename "$file" .js)
    mv -- "$file" "./__protobuf_generated__/proto/${filename}.cjs"
done

# Find all files ending with _pb.js in the specified directory
files=$(find ./__protobuf_generated__/proto -name "**_pb.js")

for file in $files; do 
    filename=$(basename "$file" .js)
    mv -- "$file" "./__protobuf_generated__/proto/${filename}.cjs"
done
