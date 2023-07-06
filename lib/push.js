'use strict';

const nunjucks = require('nunjucks');
const { DateTime } = require('luxon');
const { spawn } = require('hexo-util');

const swigHelpers = {
  now: function(format) {
    return DateTime.now().toFormat(format);
  }
};

function commitMessage(args) {
  const message = args.m || args.msg || args.message || 'Site updated: {{ now("yyyy-MM-dd HH:mm:ss") }}';
  return nunjucks.renderString(message, swigHelpers);
}

module.exports = function(args) {
  const baseDir = this.base_dir;
  const verbose = !args.silent;
  const message = commitMessage(args);
  const branch = args.branch || 'main';
  
  function git(...args) {
    return spawn('git', args, {
      cwd: baseDir,
      verbose: verbose,
      stdio: 'inherit'
    });
  }

  function push(branch) {
    return git('add', '-A').then(() => {
      return git('commit', '-m', message).catch(() => {
        // Do nothing. It's OK if nothing to commit.
      });
    }).then(() => {
      return git('push', '-u', 'origin', 'HEAD:' + branch);
    });
  }

  return push(branch);
};
