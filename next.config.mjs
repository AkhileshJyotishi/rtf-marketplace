/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app"
            },
            {
                protocol:"https",
                hostname:"gateway.pinata.cloud"
            },
        ]
    }
};

export default nextConfig;
