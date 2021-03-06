/**
 * Promise类实现原理
 * 构造函数传入一个function，有两个参数，resolve：成功回调; reject：失败回调
 * state: 状态存储 [PENDING-进行中 RESOLVED-成功 REJECTED-失败]
 * doneList: 成功处理函数列表
 * failList: 失败处理函数列表
 * done: 注册成功处理函数
 * fail: 注册失败处理函数
 * then: 同时注册成功和失败处理函数
 * always: 一个处理函数注册到成功和失败
 * resolve: 更新state为：RESOLVED，并且执行成功处理队列
 * reject: 更新state为：REJECTED，并且执行失败处理队列
**/
export default class PromiseNew {
    constructor(fn) {
      this.state = 'PENDING';
      this.doneList = [];
      this.failList = [];
      fn(this.resolve.bind(this), this.reject.bind(this));
    }
  
    // 注册成功处理函数
    success(handle) {
      if (typeof handle === 'function') {
        this.doneList.push(handle);
      } else {
        throw new Error('缺少回调函数');
      }
      return this;
    }
  
    // 注册失败处理函数
    fail(handle) {
      if (typeof handle === 'function') {
        this.failList.push(handle);
      } else {
        throw new Error('缺少回调函数');
      }
      return this;
    }
  
    // 同时注册成功和失败处理函数
    complete(success, fail) {
      this.success(success || function () { }).fail(fail || function () { });
      return this;
    }
  
    // 一个处理函数注册到成功和失败
    always(handle) {
      this.success(handle || function () { }).fail(handle || function () { });
      return this;
    }
  
    // 更新state为：RESOLVED，并且执行成功处理队列
    resolve() {
      this.state = 'RESOLVED';
      let args = Array.prototype.slice.call(arguments);
      setTimeout(function () {
        this.doneList.forEach((item, key, arr) => {
          item.apply(null, args);
          arr.shift();
        });
      }.bind(this), 200);
    }
  
    // 更新state为：REJECTED，并且执行失败处理队列
    reject() {
      this.state = 'REJECTED';
      let args = Array.prototype.slice.call(arguments);
      setTimeout(function () {
        this.failList.forEach((item, key, arr) => {
          item.apply(null, args);
          arr.shift();
        });
      }.bind(this), 200);
    }
  }