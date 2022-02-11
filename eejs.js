'use strict';

const eejs = require('md_mudoc-lite/node/eejs/');
const settings = require('md_mudoc-lite/node/utils/Settings');

exports.eejsBlock_styles = (hook_name, args, cb) => {
  args.content +=
      '<link href=\'../static/plugins/md_print/static/css/print.css\' rel=\'stylesheet\'>';
  cb();
};

exports.eejsBlock_editbarMenuRight = (hook_name, args, cb) => {
  if (settings.md_print && settings.md_print.hideButton === true) return cb();

  args.content = eejs.require('md_print/templates/editbarButtons.ejs') + args.content;
  cb();
};
