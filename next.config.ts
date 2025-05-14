import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
	webpack: config => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@components': path.resolve(__dirname, 'src/components'),
			'@sections': path.resolve(__dirname, 'src/sections'),
			'@layouts': path.resolve(__dirname, 'src/layouts'),
			'@ui': path.resolve(__dirname, 'src/ui'),
			'@types': path.resolve(__dirname, 'src/types'),
		}
		return config
	},
}

export default nextConfig
