module.exports = {
    apps: [
      {
        name: 'NavSite',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs',
        env: {
          PORT: 3000
        }
      }
    ]
  }
  