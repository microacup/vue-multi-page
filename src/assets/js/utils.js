import axios from 'axios';

const oproto = Object.prototype;
const serialize = oproto.toString;
export default {
  ajax: function ajax(opt) {
    const opts = opt || {};

    if (!opts.url) {
      return false;
    }

    return axios({
      method: opts.type || 'post',
      url: opts.url,
      params: opts.data || {},
      headers: opts.headers || {
        'Content-Type': 'application/x-www-form-urlencoded',
      },

      baseURL: 'http://t.lanchenglv.com/tp5demo/index.php/',
      time: opts.time || 10 * 1000,
      responseType: opts.dataType || 'json',
    }).then((res) => {
      if (res.status === 200) {
        if (opts.success) {
          opts.success(res.data, res);
        }
      } else if (res.message) {
        opts.error(res.message);
      } else {
        opts.error('好多人在访问呀，请重新试试[timeout]');
      }
    }).catch((error) => {
      console.log(error);
      if (opts.error) {
        opts.error(error);
      } else {
        opts.error('好多人在访问呀，请重新试试[timeout]');
      }
    });
  },
  isArrayLike: function isArrayLike(obj) {
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
          return (/^\s?function/.test(obj.item || obj.callee)
          );
        }
        return true;
      } catch (e) {
        return !obj.window;
      }
    }
    return false;
  },
  getUrlQuery: function getUrlQuery(name, Url) {
    const reg = new RegExp(`(^|\\?|&)${name}=([^&]*)(\\s|&|$)`, 'i');
    const url = Url || location.href;
    if (reg.test(url)) return unescape(RegExp.$2.replace(/\+/g, ' '));
    return '';
  },
};