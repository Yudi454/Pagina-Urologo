
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const nextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  adapterPath: require.resolve("./build/adapter.js"),
};

export default nextConfig;
