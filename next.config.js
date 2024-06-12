/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3001",
    DB_URI: "mongodb+srv://saba:Flyboy2435@cluster0.djvmioa.mongodb.net/",
    
  },
  images: {
    domains: ['https://sabasmithstoneans.s3.amazonaws.com'],
  }
}

module.exports = nextConfig
