import Vue from 'vue';
import VueResource from 'vue-resource'
Vue.use(VueResource);

import Setting from '../../config/settings.js'


export default {

  /**
   * 封装VueResource的通用请求
   * @param  {string}   type      get或post
   * @param  {string}   url       请求的接口URL
   * @param  {object}   data      传的参数，没有则传空对象
   * @param  {Function} fn        回调函数
   * @param  {boolean}   tokenFlag 是否需要携带token参数，为true，不需要；false，需要。一般除了登录，都需要
   */
  http: function(self ,type, url, data, fn, tokenFlag, errFn){
    if (type == 'get') {
      self.$http.get(url, data).then((res) => {
          res = res.body;
          fn(res)
      }, (res) => {
          // 失败的时候..
          errFn(res)
      });
    }else if (type == 'post') {
      self.$http.post(url, data).then((res) => {
          res = res.body;
          fn(res)
      }, (res) => {
          // 失败的时候..
          errFn(res)
      });
    }
  }
}

