// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Build / type-check tweaks ───────────────────────────────────────────────
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // ─── Image settings ──────────────────────────────────────────────────────────
  images: {
    unoptimized: true,
  },

  // ─── Static export (next export → out/) ──────────────────────────────────────
  output: 'export',

  // ─── (Optional) silence the dev “cross‐origin” warning ───────────────────────
  // change the URL to whatever host/port you’re using in dev
  allowedDevOrigins: ['http://localhost:3000', 'http://10.0.0.87:3000'],
}

export default nextConfig
