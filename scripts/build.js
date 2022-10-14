require("esbuild")
  .build({
    entryPoints: ["src/client/App.tsx"],
    outfile: "build/bundle.js",
    bundle: true,
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ["es2020", "chrome90", "edge18", "firefox90", "node16", "safari16"],
  })
  .catch(() => process.exit(1));
