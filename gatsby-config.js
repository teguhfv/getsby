module.exports = {
  siteMetadata: {
    title: "TeguhFV personal page",
    author: "Teguh Febbyan Valentino",
    description: "Whatever you call it"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hi There... -tfv',
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
