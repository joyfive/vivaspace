import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  /* 공유용 짧은 주소. 임시(307) 리다이렉트라 나중에 목적지를 바꿔도 캐시에 남지 않습니다. */
  async redirects() {
    return [
      {
        source: "/then",
        destination: "/services/then/share",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
