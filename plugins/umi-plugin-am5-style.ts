import { IApi } from 'umi';

export default function (api: IApi) {
  api.modifyBabelPresetOpts((opts) => {
    const imps = [
      {
        libraryName: 'antd-mobile-v2',
        libraryDirectory: 'es',
        style: true,
      },
    ];
    return {
      ...opts,
      import: (opts.import || []).concat(imps),
    };
  });
}
