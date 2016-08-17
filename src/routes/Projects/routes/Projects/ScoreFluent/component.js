export default {
  title: 'Score Fluent',
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
  demoUrl: 'http://score-fluent.herokuapp.com',
  demoText: 'score-fluent.herokuapp.com',
  githubUrl: 'http://github.com/mityadsch/score-fluent',

  descriptions: [

    `This app was the first relatively large thing I made from scratch that
    wasn't based on a curriculum or assigned task. I made it because I'd been
    forced several times to recommend a free sight-reading tool online and
    failed to find anything that didn't look or perform like it hadn't been
    updated in years. And so far as I can tell it already has a few features,
    like unusual clefs, that I'd personally wanted in apps I've used (learning
    tenor clef is no fun at all).`,

    `It's a very literal take on the single page
    application, there's not a bit of routing in it! The only calls to the Node
    server are for JWTs and JSON. I just love how magical it feels to
    login/logout without any kind of page refresh. The client uses React and
    regrettably the no longer maintained Flux implementation Alt. Alt was the
    first library I've been punished for using after maintenance was dropped,
    and I'll never make that mistake again!`

  ],

  toolNames: [
    'react',
    ['alt'],
    'sass',
    'mongodb',
    'passport',
    'es6',
    'node',
    'express',
    'gulp',
    'webpack',
    'lodash',
    'heroku'
  ]
}
