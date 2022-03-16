awk 'NR==26{print "platform: \"node\","}1' node_modules/@umijs/preset-umi/dist/features/apiRoute/dev-server/esbuild.js > node_modules/@umijs/preset-umi/dist/features/apiRoute/dev-server/esbuild.new.js
rm node_modules/@umijs/preset-umi/dist/features/apiRoute/dev-server/esbuild.js
mv node_modules/@umijs/preset-umi/dist/features/apiRoute/dev-server/esbuild.new.js node_modules/@umijs/preset-umi/dist/features/apiRoute/dev-server/esbuild.js
