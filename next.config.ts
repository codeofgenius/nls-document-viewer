import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

import type { NextConfig } from 'next';

import './src/lib/schema/env/server';
import './src/lib/schema/env/client';

const nextConfig: NextConfig = {
  /* config options here */
};

export default withFlowbiteReact(nextConfig);
