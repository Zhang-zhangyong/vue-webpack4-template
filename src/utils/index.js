
export const is_weixin = () => {
  let ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
};

export const is_iphoneX = () => {
  let ua = navigator.userAgent.toLowerCase();
  // console.log(ua, /iphone/gi.test(ua), window.screen.height);
  return /iphone/gi.test(ua) && window.screen.height >= 812;
};

export const resizeFontSize = () => {
  //移动端适配
  //获得屏幕大小
  let htmlwidth =
    document.documentElement.clientWidth || document.body.clientWidth; //浏览器兼容
  console.log("屏幕宽度：" + htmlwidth); //iphone5:320 iphone6:375
  //获得html DOM元素
  let htmlDom = document.getElementsByTagName("html")[0];
  //给DOM元素设置样式
  htmlDom.style.fontSize = (htmlwidth / 375) * 100 + "px";
};

export const phoneModel = () => {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android安卓
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios苹果
  let model = isAndroid ? "Android" : isiOS ? "IOS" : "";
  return model;
};

export const handleData = (originalData, resData) => {
  originalData.data.forEach(item => {
    item.value = resData[item.key];
  });
};
export const resetData = originalData => {
  originalData.data.forEach(info => {
    info.isSelect = false;
  });
};

export const getQuerySting = name => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i');
  // let r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
  // if (r != null) return unescape(r[2]);
  // return null;
  let search = window.location.href.split('?')[1];
  let r = search.match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

export const copyText = (text) => {
  const textString = text.toString();
  let input = document.querySelector('#copy-input');
  if (!input) {
    input = document.createElement('input');
    input.id = "copy-input";
    input.readOnly = "readOnly";        // 防止ios聚焦触发键盘事件
    input.style.position = "fixed";
    input.style.bottom = "100rem";
    input.style.left = "-100rem";
    input.style.zIndex = "-1000";
    document.body.appendChild(input);
  }

  input.value = textString;
  // ios必须先选中文字且不支持 input.select();
  selectText(input, 0, textString.length);
  console.log(document.execCommand('copy'), 'execCommand');
  if (document.execCommand('copy')) {
    document.execCommand('copy');
    // alert('已复制到粘贴板');
    // Toast.success('已复制到粘贴板');
    input.style.display = 'none';
  }
  input.blur();

  // input自带的select()方法在苹果端无法进行选择，所以需要自己去写一个类似的方法
  // 选择文本。createTextRange(setSelectionRange)是input方法
  function selectText(textbox, startIndex, stopIndex) {
    if (textbox.createTextRange) {//ie
      const range = textbox.createTextRange();
      range.collapse(true);
      range.moveStart('character', startIndex);//起始光标
      range.moveEnd('character', stopIndex - startIndex);//结束光标
      range.select();//不兼容苹果
    } else {//firefox/chrome
      textbox.setSelectionRange(startIndex, stopIndex);
      textbox.focus();
    }
  }
};
