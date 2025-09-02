import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

import type { NextConfig } from 'next';

import './src/lib/schema/env/server';
import './src/lib/schema/env/client';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'docs.google.com',
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);
