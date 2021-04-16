import request from '@/utils/request';
import { encryption } from '@/utils/encryption';

export type LoginParamsType = {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
};

export async function accountLogin(params: LoginParamsType) {
  console.log('params', params);

  const user = encryption({
    data: params.password,
    key: 'pigxpigxpigxpigx',
    param: ['password'],
  });

  console.log('....', user);

  const details = {
    username: params.userName,
    grant_type: 'password',
    password: 'rKu1/348LvKp0rsVC06eCA==',
  };

  const formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }

  const formBody1 = formBody.join('&');

  return request('/auth/oauth/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody1,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
