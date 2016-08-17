export default {
  title: 'The Learning Center',
  titleSizesByBreakpoint: {
    0: {
      fontHeight: 35
    },
    1: {
      fontHeight: 40
    },
    2: {
      fontHeight: 50
    },
    3: {
      fontHeight: 60
    },
    4: {
      fontHeight: 60
    },
    5: {
      fontHeight: 60
    }
  },
  placeholderImg: require('./assets/1-placeholder.png'),
  img: require('./assets/1.png'),
  demoUrl: 'http://thelearningcenter.github.io',
  demoText: 'thelearningcenter.github.io',
  githubUrl: 'http://github.com/thelearningcenter/thelearningcenter.github.io',

  descriptions: [
    `The Learning Center is a great nonprofit in my neighborhood I've
    been volunteering at for about a year. When I mentioned that I make
    websites we decided that theirs was due for an update. But there
    were a few rather crazy constraints I had to work with:

    <ul>
      <li>given the budget cuts from the state, they needed to be able
      to host their site for free</li>
      <li>they wanted more control over the layout and design of the
      site than something like Google Sites offers</li>
      <li>they wanted to be able to update more than just the text of
      the site with minimal technical investment in case I got hit by a
      bus</li>
    </ul>`,

    `Given those limitations, the only thing way I could imagine getting
    the site up was by hosting it on Github Pages and using no tools
    less common than jQuery. Since I couldn't expect them to keep a
    development environment set up I had to rely on Github to build the
    site, and Github only runs a rather small subset of what Jekyll can
    do. So, with my hands thusly tied, I plugged away with my hands
    until we realized that the updating process was still a bit too
    technical to expect to hand off in a world filled with buses. So,
    for now, it sits in stasis filled with lorem text. I'm still pretty
    proud of how I worked with limitations.`
  ],

  toolNames: [
    'jquery',
    'jekyll',
    ['scrollmagic'],
    'sass'
  ]
}
