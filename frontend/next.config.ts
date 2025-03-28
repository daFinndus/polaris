import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s8lcpnzirhyz4bbt.public.blob.vercel-storage.com",
                port: "",
            },
        ],
    },
}

export default nextConfig
