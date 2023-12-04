const CDN = (s) => `https://cdnjs.cloudflare.com/ajax/libs/${s}`;
const ramda = CDN('ramda/0.21.0/ramda.min');
const jquery = CDN('jquery/3.0.0-rc1/jquery.min');

requirejs.config({ paths: { ramda, jquery } });
require(['jquery', 'ramda'], ($, { compose, curry, map, prop }) => {
  // 1. 根据搜索关键字构造 url
  // 2. 往 url 发送 api 请求
  // 3. 把返回的 json 转为图片地址
  // 4. 把图片地址放到 html
  const Impure = {
    trace: curry((tag, x) => { console.log(tag, x); return x; }),
    getJSON: curry((callback, url) => $.getJSON(url, callback)),
    setHtml: curry((sel, html) => $(sel).html(html)),
  }

  const host = 'api.flickr.com';
  const path = '/services/feeds/photos_public.gne';
  const query = (t) => `?tags=${t}&format=json&jsoncallback=?`;
  const url = (t) => `https://${host}${path}${query(t)}`;

  const app = compose(Impure.getJSON(Impure.trace('response')), url);
  app('cats');
});
