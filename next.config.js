// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     unoptimized: true, // This is the correct place to set the unoptimized option for images
//   },
//   output: "export", // Ensures the app will be statically exported
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // This is the correct place to set the unoptimized option for images
  },// Ensures the app will be statically exported
};

module.exports = nextConfig;