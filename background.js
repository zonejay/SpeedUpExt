/*
 * @Author: hentaitabako
 * @Date: 2020-01-06 08:02:01
 * @LastEditTime : 2020-01-06 16:57:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /SpeedUpExt/background.js
 */
// 当插件图标被点击后，将调用这个方法
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    // 运行 run.js 中的代码
    chrome.tabs.executeScript( activeTab.id , {file:'run.js'});
    // chrome.browserAction.setPopup( activeTab.id, './popup.html');
});

