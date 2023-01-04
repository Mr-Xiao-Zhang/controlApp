export default {
  'GET /api/getChartList': {
    statu: 'success',
    data: [
      {
        type: '周一',
        sales: 1.8,
      },
      {
        type: '周二',
        sales: 2.2,
      },
      {
        type: '周三',
        sales: 4.1,
      },
      {
        type: '周四',
        sales: 3,
      },
      {
        type: '周五',
        sales: 2.3,
      },
      {
        type: '周六',
        sales: 4.5,
      },
      {
        type: '周日',
        sales: 6.4,
      },
    ],
  },
  'GET /api/appList': {
    statu: 'success',
    data: [
      {
        title: 'a',
        items: [
          {
            name: '应用a1',
            chird: [],
          },
          {
            name: '应用a2',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
          {
            name: '应用a3',
            chird: [
              '周一、周二、周三：09:30 ~ 12:00 ',
              '周六、周日：15:00 ~ 18:37',
            ],
          },
        ],
      },
      {
        title: 'b',
        items: [
          {
            name: '应用b1',
            chird: [],
          },
          {
            name: '应用b2',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
          {
            name: '应用b3',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
        ],
      },
      {
        title: 'c',
        items: [
          {
            name: '应用c1',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
          {
            name: '应用c2',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
          {
            name: '应用c3',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
        ],
      },
      {
        title: 'd',
        items: [
          {
            name: '应用d1',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
          {
            name: '应用d2',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
          {
            name: '应用d3',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
        ],
      },
      {
        title: 'e',
        items: [
          {
            name: '应用e1',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
          {
            name: '应用e2',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
          {
            name: '应用e3',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
          {
            name: '应用e4',
            chird: ['周一、周二、周三：09:30 ~ 12:00 '],
          },
        ],
      },
    ],
  },
  'GET /api/getUserCardList': {
    statu: 'success',
    data: [
      { id: 1, name: '李小明' },
      { id: 2, name: '小黑' },
      { id: 3, name: '小白' },
      { id: 4, name: '小绿' },
    ],
  },
  'GET /api/getModuleList': {
    statu: 'success',
    data: [
      { id: 1, name: '时间规划', path: '/timePlanning' },
      { id: 2, name: '应用保持', path: '/appKeep' },
      { id: 3, name: '网址管理', path: '/siteManage' },
      { id: 4, name: '守护人', path: '/guardInfo' },
      { id: 5, name: '应用管理', path: '/appManage' },
      { id: 6, name: '插件管理', path: '/pluginManage' },
    ],
  },
  'GET /api/getAppList': {
    statu: 'success',
    data: [
      {
        id: 1,
        url:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F82%2F97%2F5c0b4f300bb50_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654654760&t=9a9cd8a9f9353534b01cb8445f3f24d7',
        name: '语文王者',
        time: '27分钟',
      },
      {
        id: 2,
        url:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F82%2F97%2F5c0b4f300bb50_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654654760&t=9a9cd8a9f9353534b01cb8445f3f24d7',
        name: '应用宝',
        time: '4小时',
      },
      {
        id: 3,
        url:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F82%2F97%2F5c0b4f300bb50_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654654760&t=9a9cd8a9f9353534b01cb8445f3f24d7',
        name: '语文王者',
        time: '3小时47分钟',
      },
    ],
  },
};
