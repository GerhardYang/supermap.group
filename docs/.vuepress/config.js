module.exports = {
    title: '超图集团|SuperMapGroup',
    description: 'SuperMap资源导航',
    dest: 'dist',
    head: [
        ['meta', {
            name: 'keywords',
            content: 'supermap.group,GIS,SuperMap'
        }],
        ['meta', {
            name: 'description',
            content: '本站主要用来记录经常需要访问的网站，方便工作和学习！'
        }],
        ['meta', {
            name: 'Abstract',
            content: '网址导航 supermap.group'
        }],
        ['meta', {
            name: 'Copyright',
            content: 'Gerhard'
        }]
    ],
    themeConfig: {
        search: false,
        nav: [{
            text: '集团架构',
            items: [
                { text: 'GIS基础软件', link: '/supermap/jichu' },
                { text: 'GIS应用软件心', link: '/supermap/yingyong' },
                { text: 'GIS云服务', link: '/supermap/yun' },
                { text: '国际业务线', link: '/supermap/guoji' }
            ]
        },
        {
            text: '服务资源',
            items: [
                { text: 'iClient', link: '/source/' },
                { text: '技术资源中心', link: '/source/ziyuanzhongxin' },
                { text: '在线服务', link: '/source/online' },
            ]
        },
        {
            text: '在线文档',
            items: [
                { text: '技术社区', link: '/doc/wenda' },
                { text: '产品帮助文档', link: '/doc/' },
                { text: '行业解决方案', link: '/doc/fangan' }
            ]
        },
        {
            text: '媒体传宣',
            link: '/media/'
        },
        {
            text: '在线工具',
            link: '/tool/'
        },
        {
            text: '办公内部',
            link: '/office/'
        },
        {
            text: '关于',
            link: '/abort/'
        }
        ],
        sidebar: {

            '/supermap/': supermapGenSidebarConfig('集团架构'),
            '/source/': sourceGenSidebarConfig('服务资源'),
            '/doc/': docGenSidebarConfig('在线文档')
        }
    }
}

function supermapGenSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            'jichu',
            'yingyong',
            'yun',
            'guoji'
        ]
    }]
}

function sourceGenSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'ziyuanzhongxin',
            'online'
        ]
    }]
}

function docGenSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            'wenda',
            '',
            'fangan'
        ]
    }]
}