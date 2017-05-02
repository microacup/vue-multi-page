const globalConfig = require('../../../config');

export default {
  title: 'Vue多页面模板',
  contextPath: process.env.NODE_ENV === 'production' ? globalConfig.build.contextPath : globalConfig.dev.contextPath,
};