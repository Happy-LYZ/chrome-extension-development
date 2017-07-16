import Options from './utils/options';
import animateIcon from './utils/animateIcon';

const chrome = window.chrome;

//将Options操作对象添加到window域下，以供扩展其它部分访问
window.extensionOptions = Options;

chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    switch (data.action) {
        case 'executeScript':
            chrome.tabs.executeScript(null, { code: data.code });
            break;
        case 'insertCSS':
            chrome.tabs.insertCSS(null, { code: data.code });
            break;

        case 'getOption':
            sendResponse(Options.get(data.key));
            break;

        case 'setOption':
            sendResponse(Options.set(data.key, data.value));
            break;

        case 'optionUpdated':
            if (animateIcon.running !== Options.get('animateIcon')) {
                Options.get('animateIcon') ? animateIcon.start() : animateIcon.stop();
            }
            break;

        case 'updateWindow':
             chrome.windows.getCurrent(null, async win => {
                const updateWindow = function(updateInfo) {
                    return new Promise(resolve => chrome.windows.update(win.id, updateInfo, resolve));
                }
                //定义一个延迟执行器
                const delay = function(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                //顺序根据设置的步骤顺序设置窗口状态，并且暂停一秒后继续下一步
                for(let info of data.steps) {
                    await updateWindow(info);
                    await delay(1000);
                }
            });
            break;

        default: //nothing todo
            break;
    }
});

chrome.tabs.onActivated.addListener(({ tabId }) => {
    chrome.tabs.sendMessage(tabId, {
        action: 'active'
    });
});

if (Options.get('animateIcon')) {
    animateIcon.start();
}
