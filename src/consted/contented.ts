export const WEATHERS = {
    wind:{
        icon:'icon-feng',
        weatherArr:['有风','微风','和风','清风','强风/劲风','强风','劲风','疾风','大风','烈风','风暴','狂爆风','飓风','热带风暴','平静']
    },
    sunny:{
        icon: 'icon-lieri',
        weatherArr: ['晴','未知',]
    },
    smog:{
        icon: 'icon-tianqitianqi',
        weatherArr: ['霾','中度霾','重度霾','严重霾','雾','浓雾','强浓雾','轻雾','大雾','特强浓雾']
    },
    rain:{
        icon: 'icon-dayu',
        weatherArr: ['阵雨','雷阵雨','雷阵雨并伴有冰雹','小雨','中雨','大雨','大雨','大暴雨','特大暴雨','强阵雨','强雷阵雨','极端降雨','毛毛雨/细雨','雨','小雨-中雨','中雨-大雨','大雨-暴雨','暴雨-大暴雨','大暴雨-特大暴雨','雨雪天气','冻雨',]
    },
    snow:{
        icon: 'icon-zhongxue',
        weatherArr: ['雨雪天气','雨夹雪','阵雨夹雪','雪','阵雪','小雪','中雪','大雪','暴雪','小雪-中雪','中雪-大雪','大雪-暴雪']
    },
    sandStorm: {
        icon: 'icon-weather-21',
        weatherArr: ['浮尘', '扬沙', '沙尘暴', '强沙尘暴', '龙卷风']
    },
    cloudy:{
        icon: 'icon-duoyun',
        weatherArr: ['多云','阴','沙尘暴','晴间多云','晴转多云',]
    }
}

export const APIS  = {
    //免费七天天气接口,不传参数默认根据ip返回当前城市天气
    weatherSevenDay : 'https://www.yiketianqi.com/free/week?unescape=1&appid=65142175&appsecret=U70OoTHF',

}

export const searchs = {
    baidu: {
        icon: 'icon-baidu',
        url: 'https://www.baidu.com/s?ie=utf-8&wd='
    },
    Bing: {
        icon: 'icon-bing',
        url: 'https://cn.bing.com/search?q='
    },
    Google: {
        icon: 'icon-guge',
        url: 'http://www.google.cn/search?q=',
    },
    San60: {
        icon: 'icon-icon-test',
        url: 'https://www.so.com/s?ie=utf-8&shb=1&src=noscript_home&q=',
    },
    SouGou: {
        icon: 'icon-sogou',
        url: 'https://www.sogou.com/sogou?query=',
    }
};
