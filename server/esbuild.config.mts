import * as esbuild from 'esbuild'
import eslint from "esbuild-plugin-eslint";

const settings: esbuild.BuildOptions = {
    entryPoints: ["./src/index.ts"],
    outfile: "../dist/server/index.js",
    bundle: true,
    minify: true,
    sourcemap: "external",
    platform: "node",
    target: "node18",
    plugins: [
        eslint({
            throwOnError: true,
        }),
    ],
};

await esbuild.build(settings);