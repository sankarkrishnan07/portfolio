import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

const keys = [
  "REACT_APP_SERVICE_ID",
  "REACT_APP_TEMPLATE_ID",
  "REACT_APP_PUBLIC_KEY",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const processEnv = {};
  keys.forEach((key) => (processEnv[key] = env[key]));

  return {
    define: {
      "process.env": processEnv,
    },
    plugins: [react()],
  };
});
