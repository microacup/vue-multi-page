export default {
  getUrlQuery(name, Url) {
    const reg = new RegExp(`(^|\\?|&)${name}=([^&]*)(\\s|&|$)`, 'i');
    const url = Url || location.href;
    if (reg.test(url)) return unescape(RegExp.$2.replace(/\+/g, ' '));
    return '';
  },
};