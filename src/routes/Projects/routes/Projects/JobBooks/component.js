export default {
  title: 'JobBooks by ComputerEase',
  titleSizesByBreakpoint: {
    0: {
      fontHeight: 25
    },
    1: {
      fontHeight: 30
    },
    2: {
      fontHeight: 40
    },
    3: {
      fontHeight: 55
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
  demoUrl: null,
  demoText: null,
  githubUrl: null,

  descriptions: [
    `
      JobBooks was a end-to-end SASS package for managing all the financials of
      a small-to-medium construction company, and my first real production
      application. I started on Jobbooks as an apprentice a few months after the
      project's  \`rails new\` with no Ruby experience, and left as the #1
      contributor and co-lead of development.
    `,

    `
      During my with with it I worked on the greenfield development of estimation,
      billing, bank reconciliation, payroll, sales tax tracking, analytics, and more.
      I also had my hands on testing, DevOps, performance tuning, support, and
      security.
    `
  ],

  toolNames: [
    'rails',
    'react',
    's3',
    'sass',
    'node',
    'postgres',
    'redis',
    'docker'
  ]
}
