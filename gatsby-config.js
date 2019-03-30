module.exports = {
  siteMetadata: {
    title: "Teguh f v page",
    author: "Hunter Chang",
    description: "Whatever you call it"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Wellcome to my page -tfv',
        short_name: 'tfv',
        start_url: '/',
        background_color: '#020403',
        theme_color: '#020403',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
