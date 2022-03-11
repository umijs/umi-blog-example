# umi@4.0.0-rc.6 有个问题是 API 路由使用 esbuild 打包时没有指定 platform: 'node', 导致很多依赖打包时报错

awk 'NR==24{print "platform: \"node\","}1' node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/vercel/esbuild.js > node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/vercel/esbuild.new.js
rm node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/vercel/esbuild.js
mv node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/vercel/esbuild.new.js node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/vercel/esbuild.js

awk 'NR==26{print "platform: \"node\","}1' node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/dev-server/esbuild.js > node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/dev-server/esbuild.new.js
rm node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/dev-server/esbuild.js
mv node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/dev-server/esbuild.new.js node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/dev-server/esbuild.js

# umi@4.0.0-rc.6 有个问题是 API 路由的 Vercel Adapter 会以 esm 格式打包，导致如果依赖不支持 esm 就会报错

awk '{ gsub("format: '\''esm'\''","format: '\''cjs'\''"); gsub("outExtension: { '\''.js'\'': '\''.mjs'\'' },", ""); }1' node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/vercel/esbuild.js > node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/vercel/esbuild.new.js
rm node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/vercel/esbuild.js
mv node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/vercel/esbuild.new.js node_modules/.pnpm/@umijs+preset-umi@4.0.0-rc.6/node_modules/@umijs/preset-umi/dist/features/apiRoute/vercel/esbuild.js
