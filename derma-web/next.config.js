/** @type {import('next').NextConfig} */
const withPWA  = require('next-pwa')


const nextConfig = {
    ...withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true,
    }),
   images:{
    remotePatterns:[
        {
            protocol:"https",
            hostname:'lh3.googleusercontent.com'
        }
    ]

}
}

module.exports = nextConfig

module.exports = {
    images: {
      domains: ['img.freepik.com'], // Add your desired domains here
    },
  };
