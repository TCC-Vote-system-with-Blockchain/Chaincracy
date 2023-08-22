import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), ['REACT_APP', 'VITE'])

	return{
		define: {
			'process.env': env,
		},
		build: {
			outDir: 'build',
		},
		plugins: [
			react(),
			tsconfigPaths(),
		],
		server: {
			port: 3000,
		}
	}
})
