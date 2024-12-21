import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    async headers() {
        const headers = [];
        if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
            headers.push({
                source: "/(.*)",
                headers: [
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload",
                    },
                    {
                        key: "Content-Security-Policy",
                        value: "default-src 'self'; img-src 'self' data:; script-src 'self'; style-src 'self'; object-src 'none'",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "same-origin",
                    },
                ],
            });
        } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
            headers.push({
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex',
                    },
                ],
            });
        }

        return headers;
    },
};

export default nextConfig;