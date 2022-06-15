// pm2配置
module.exports = {
  apps: [
    {
      name: 'hncykj-serve',
      exec_mode: 'cluster',
      instances: 'max',
      script: './dist/src/main.js',
      args: 'start'
    }
  ]
}
