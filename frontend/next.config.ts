import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    async headers() {
        const headers = [];
        headers.push({
            headers: [
                {
                    key: 'X-Robots-Tag',
                    value: 'index',
                },
            ],
            source: '/:path*',
        });
        
        return headers;
    },
};

export default nextConfig;
