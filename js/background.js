// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var dateTime='';

var isLoginFlag = false;

var uid ='';

var username= '';
/**
 * 获取请求的参数
 * 比如POST类的请求参数
 */
var req_bodys = {};
chrome.webRequest.onBeforeRequest.addListener(details => {
        console.log("打印一下onBeforeRequest的detail:");
        console.log(details);
}, {urls: ["<all_urls>"]}, ["requestBody"]);


/**
 * 将请求头和请求参数拼接在一起发给越权检测服务器
 */
chrome.webRequest.onSendHeaders.addListener(details => {
    console.log("打印一下onSendHeaders的detail:");
    console.log(details);
}, {urls: ["<all_urls>"]}, ["requestHeaders","extraHeaders"]);


