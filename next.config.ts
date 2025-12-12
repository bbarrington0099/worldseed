import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        ppr: "incremental",
        dynamicIO: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io",
                pathname: "/f/*",
            },
        ],
    },
    sassOptions: {
        silenceDeprecations: ["legacy-js-api"],
    },
};

export default nextConfig;

