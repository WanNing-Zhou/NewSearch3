// 用于天气图标转换
const weatherMap:{[key:string]:string} = {
    qing: 'qi-sunny',
    yin: 'qi-Overcast',
    yu: 'qi-drizzle-rain-fill',
    yun: 'qi-cloudy',
    bingbao: 'qi-hail',
    wu: 'qi-dense-fog-fill',
    shachen: 'qi-dust-fill',
    lei: 'qi-thundershower-fill',
    xue:'qi-moderate-snow-fill',
}

export function getWeatherIcon(wea:string){
    return weatherMap[wea]
}
