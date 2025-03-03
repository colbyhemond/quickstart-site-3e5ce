export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      sitemap: `https://${process.env.NEXT_PUBLIC_DOMAIN}/sitemap.xml`,
    }
  }