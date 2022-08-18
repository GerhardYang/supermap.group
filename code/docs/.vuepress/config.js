/*
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2021-04-23 18:29:47
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-06-16 17:39:21
 * @Description: file content
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
 */

module.exports = {
    title: '超图集团',
    description: 'SuperMap资源导航',
    dest: '../docs',
    extraWatchFiles: [
        '.vuepress/config.js' // 使用相对路径
    ],
    plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
    head: [
        ['meta', {
            name: 'keywords',
            content: '超图,超图集团,超图软件,北京超图,北京超图软件,超图公司,北京超图软件股份有限公司,超图信息,超图国际,北京超图集团,超图分公司,超图开放平台,超图研究院,超图平台业务,超图子公司,chaotu,supermap.group,GIS,SuperMap,iServer,iPortal,iDesktop,iManager,iClient,iMobile'
        }],
        ['meta', {
            name: 'description',
            content: '超图集团是全球第三大、亚洲第一大地理信息系统（GIS）软件厂商，由母公司超图软件（股票代码：300036）及旗下的超图信息、超图国际、上海南康、南京国图、北京安图、上海数慧等一级 ( 全资 ) 子公司，地图慧、日本超图等二级 ( 控股 ) 子公司，以及遍布全国的分公司、办事处组成。'
        }],
        ['meta', {
            name: 'Abstract',
            content: '超图集团是全球第三大、亚洲第一大地理信息系统（GIS）软件厂商，由母公司超图软件（股票代码：300036）及旗下的超图信息、超图国际、上海南康、南京国图、北京安图、上海数慧等一级 ( 全资 ) 子公司，地图慧、日本超图等二级 ( 控股 ) 子公司，以及遍布全国的分公司、办事处组成。'
        }],
        ['meta', {
            name: 'Copyright',
            content: 'Gerhard'
        }]
    ],
    themeConfig: {
        search: true,
        logo: 'https://www.supermap.com/2017/img/logo.png',
        smoothScroll: true,
        lastUpdated: '最后更新时间',
        sidebarDepthsidebarDepth: 2,
        // 导航栏
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '服务资源',
                link: '/resource/',
                items: [
                    { text: 'iClient', link: '/resource/iclient' },
                    { text: '技术资源中心', link: '/resource/ziyuanzhongxin' },
                    { text: '在线服务', link: '/resource/online' },
                    { text: '培训资源', link: '/resource/edu' },
                ]
            },
            {
                text: '在线文档',
                link: '/doc/',
                items: [
                    { text: '技术社区', link: '/doc/wenda' },
                    { text: '产品帮助文档', link: '/doc/help' },
                    { text: '行业解决方案', link: '/doc/fangan' }
                ]
            },
            {
                text: '三维专题',
                link: '/3d/',
                items: [
                    { text: '3ds Max 精模数据处理', link: '/3d/max' }
                ]
            },
            {
                text: '办公内部',
                link: '/office/'
            },
            {
                text: '关于',
                link: '/about/'
            }
        ],
        // 侧边栏
        sidebar: {
            '/source/': [
                ['iclient', '1.SuperMap iClient'],
                ['ziyuanzhongxin', '2.资源中心'],
                ['online', '3.在线服务'],
                ['edu', '4.在线课程']
            ],
            '/doc/': [
                ['help', '1.产品在线帮助文档'],
                ['wenda', '2.技术社区'],
                ['fangan', '3.解决方案']
            ],
            '/3d/': [
                ['max', "1.Max精模"],
                // ['', "BIM模型"],
                // ['', "倾斜摄影"],
                // ['', "卫星影像"]
            ],
            '/office/': [
                ['', "内部办公系统"]
            ],
            '/about/': [
                ['', "关于"]
            ]
        }
    }
}