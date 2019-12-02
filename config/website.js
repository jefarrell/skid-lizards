module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Skid Lizards', // Navigation and Site Title
  titleAlt: 'Skid Lizards', // Title for JSONLD
  description: 'Friends with bikes and jobs',
  headline: 'Bike gang', // Headline for schema.org JSONLD
  url: 'skidlizards.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Talmor', // Author for schemaORGJSONLD

  twitter: '', // Twitter Username
  facebook: '', // Facebook Site Name
  googleAnalyticsID: '',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
