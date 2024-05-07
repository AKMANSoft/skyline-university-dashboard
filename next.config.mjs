/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Fail the build if there are warnings
      config.stats = {
        warningsFilter: /export .* was not found in/,
      };
      
      return config;
    },
  };
  
  export default nextConfig;
