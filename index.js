const shell = require('shelljs');

module.exports = (api, projectOptions) => {
  api.registerCommand('movefiles', {
    description: 'movefiles plugin for vue cli 3',
    usage: 'vue-cli-service movefiles',
    options: {
      '--source': `source files`,
      '--dest': `dest dir`,
    }
  }, (args) => {
    let options = projectOptions.pluginOptions.movefiles;
    const source = options && options.source || args.source;
    const dest = options && options.dest || args.dest;
    // console.info('command line args', args.source, args.dest);
    // console.log('vue.config', options);
    if (source && dest) {
      shell.mkdir('-p', dest);
      shell.cp('-Rf', source, dest);
    } else {
      console.error('error: copy config <source> <dest> is necessary');
    }
  });
}