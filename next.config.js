/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build autonome : le conteneur n'embarque que le nécessaire (node_modules élagués, serveur minimal)
  output: 'standalone',
}

module.exports = nextConfig
