/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Mengabaikan error ESLint saat proses build berlangsung
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;