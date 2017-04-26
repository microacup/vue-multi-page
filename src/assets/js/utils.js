const oproto = Object.prototype;
const serialize = oproto.toString;
export default {
  isArrayLike(obj) {
    if (!obj) {
      return false;
    }
    const n = obj.length;
    if (n === n >>> 0) {
      const type = serialize.call(obj).slice(8, -1);
      if (/(?:regexp|string|function|window|global)$/i.test(type)) {
        return false;
      }
      if (type === 'Array') {
        return true;
      }
      try {
        if ({}.propertyIsEnumerable.call(obj, 'length') === false) {
          return (/^\s?function/.test(obj.item || obj.callee));
        }
        return true;
      } catch (e) {
        return !obj.window;
      }
    }
    return false;
  },
  getUrlQuery(name, Url) {
    const reg = new RegExp(`(^|\\?|&)${name}=([^&]*)(\\s|&|$)`, 'i');
    const url = Url || location.href;
    if (reg.test(url)) return unescape(RegExp.$2.replace(/\+/g, ' '));
    return '';
  },
};