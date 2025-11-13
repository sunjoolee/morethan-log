const CONFIG = {
  profile: {
    name: "sunjoolee",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "android / frontend developer",
    bio: "focus on improving, not proving.",
    email: "sheisthepoem@naver.com",
    linkedin: "",
    github: "sunjoolee",
    instagram: "",
  },
  projects: [
    {
      name: `오늘여행`,
      href: "https://play.google.com/store/apps/details?id=com.twoday.todaytrip&hl=ko",
    },
  ],
  blog: {
    title: "sunjoolee-archaive",
    description: "my knowledge base archaive.",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },
  link: "https://sunjoolee-archaive.vercel.app",
  since: 2025, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
