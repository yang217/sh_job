import http from '@/config/http'

/** 2017/07/24 零零水(20004604@qq.com)
 * 更新ajax封装，使用插件的形式嵌入，调用示例：
 * this.http.getJobList({}).then(function(){})
 * @type {{getJobList: (function(*=)), publishJob: (function(*=))}}
 */

let ajax = {
  getJobList (payload) {
    return http.get('/job/getJobList', payload)
  },
  publishJob (payload) {
    return http.post('/job/publishJob', payload)
  },
  login (payload) {
    return http.post('/job/login', payload)
  },
  logout (payload) {
    return http.post('/job/logout', payload)
  },
  getJobInfo (payload) {
    return http.get('/job/getJobInfo', payload)
  },
  getVisits (payload) {
    return http.get('/job/getVisits', payload)
  },
  getMineJobInfo (payload) {
    return http.get('/job/getOwnPublishJobList', payload)
  }
}

export default {
  install: function (Vue, options) {
    Vue.prototype.http = ajax
  }
}
