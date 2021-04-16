import * as CryptoJS from 'crypto-js';

export const encryption = (params) => {
  let { data, type, param, key } = params;
  const result = JSON.parse(JSON.stringify(data));
  console.log('result', params, result, type);

  if (type === 'Base64') {
    param.forEach((ele) => {
      result[ele] = btoa(result[ele]);
    });
  } else {
    console.log('1', result);

    param.forEach((ele) => {
      var data = result[ele];
      debugger;

      key = CryptoJS.enc.Latin1.parse(key);
      var iv = key;
      // 加密
      var encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
      });
      result[ele] = encrypted.toString();
    });
    console.log('2', result);
  }
  return result;
};
