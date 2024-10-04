/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {hostname:'randomuser.me'},
          {hostname:'images.unsplash.com'},
          {
            // protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            // port: '',
            // pathname: '/u/**',
           },
           {
            protocol: 'https',
            hostname: 'cdn.prod.website-files.com',
            // port: '',
            // pathname: '/u/**',
           },
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            pathname: '/images/**',
          },
          {
            protocol: 'http',
            hostname: 'res.cloudinary.com',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
          {
            protocol: 'https',
            hostname: 'medusa-server-testing.s3.amazonaws.com',
          },
          {
            protocol: 'https',
            hostname: 'medusa-server-testing.s3.us-east-1.amazonaws.com',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
          },
          {
            protocol: 'https',
            hostname: 'medusa-public-images.s3.eu-west-1.amazonaws.com',
          },
          {
            protocol: 'https',
            hostname: 'medusa-server-testing.s3.amazonaws.com',
          },
          {
            protocol: 'https',
            hostname: 'static.parastorage.com',
          },
          { protocol: 'https',
            hostname: 'tailwindui.com',
           }
        ]
      }
    
}

export default nextConfig
