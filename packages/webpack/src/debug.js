
/**
 * parse 解析url
 *
 * 有些恶心的第三方App，不判断当前的url参数，
 * 就直接在域名路径后加自己的参数，导致URL不规范，无法常规处理了
 * https://m.xxx.com/?from=singlemessage&isappinstalled=0#bargain?id=646156&platform=5
 *
 * @export
 */

const searchReg = /([^&=?#]+)=([^&#]+)/g;
const urlReg = /\/+.*\?/;
const arrayReg = /(.+)\[\]$/;

function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

export function parse(url = '', key = '') {
  if (!url) return;

  const params = {};
  let match;
  let name;
  let value;
  let isArray;

  // 处理不符合 search 参数格式的情况
  url = url[0] !== '?' ? '?' + url : url;
  // 处理异常参数，如多个 ?
  url = url.replace(/\?/g, '&').replace('&', '?');

  /* eslint prefer-destructuring: 0 */
  while ((match = searchReg.exec(url))) {
    name = decode(match[1]);
    value = decode(match[2]);
    isArray = name.match(arrayReg);
    // 处理参数为url这种情况
    if (urlReg.test(value)) {
      params[name] = url.substr(url.indexOf(value));
      break;
    }
    if (isArray) {
      name = isArray[1];
      params[name] = params[name] || [];
      params[name].push(value);
    } else {
      params[name] = value;
    }
  }

  const result = key ? params[key] : params;
  return result;
}

// console.log(parse('id=xx&c=xx&q=5%E6%9C%88'));

// 取参数以及debug调试
// const url = 'https://m.xxx.com/?from=singlemessage&isappinstalled=0#bargain?id=646156&platform=5';

function getParams() {
  if (typeof window === 'undefined') return {};

  const { location } = window;
  const params = parse(location.href) || {};

  // 调试参数使用 d_xxx 格式，非以下名单中的数据，警报提示修改
  const debugParams = [
    'd_debug', // 开启调试按钮/界面
    'd_host', // 切换宿主 host
    'd_console', // 打开 vConsole
    'd_mock', // mock 数据
    'd_proxy', // 启用代理 便捷更改 api 指向
    'd_channel', // 变更 channel 数据
    'd_aliapp',
    'd_wxapp',
  ];

  const warns = Object.keys(params).filter(key => !debugParams.includes(key));
  if (warns.length) {
    console.warn(`${JSON.stringify(warns)} 参数使用有误`);
  }

  return {
    params,
    debug: params.d_debug,
    host: params.d_host,
    console: params.d_console,
    mock: params.d_mock,
    proxy: params.d_proxy,
    channel: params.d_channel,
    aliapp: params.d_aliapp,
    wxapp: params.d_wxapp,
  };
}

export const debug = getParams();
