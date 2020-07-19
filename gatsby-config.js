module.exports = {
  siteMetadata: {
    title: "Teguh Febbyan Valentino",
    author: "Teguh Febbyan Valentino",
    description: "freelance"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Teguh Febbyan Valentino Personal age',
        short_name: 'tfv - page',
        start_url: '/',
        background_color: '#020403',
        theme_color: '#020403',
        display: 'minimal-ui',
        icon: 'src/images/q3.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
