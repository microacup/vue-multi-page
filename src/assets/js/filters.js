const moment = require('moment');

export function formatDate(date) {
  if (date) {
    return moment(date, 'YYYY-MM-DDTHH:mm:ss Z').format('YYYY-MM-DD HH:mm:ss');
  }
  return '未知';
}

/**
 * 格式化时间
 * @param {*} time ms时间戳
 */
export function formatTime(time) {
  if (time) {
    return moment(time).format('HH:mm:ss');
  }
  return '未知';
}