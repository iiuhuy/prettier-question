import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright=" 2017-2020 深圳智荟物联技术有限公司 粤 ICP 备 18094635 号"
    links={[
      {
        key: 'antd',
        title: '官网',
        href: 'https://www.antd.com',
        blankTarget: true,
      },
      {
        key: 'developer',
        title: '开发文档',
        href: 'http://121.37.217.125:8889/',
        blankTarget: true,
      },
    ]}
  />
);
