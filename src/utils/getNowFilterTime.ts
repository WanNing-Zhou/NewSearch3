function addZero(num){
    num = parseInt(num);
    if (num<10){
        num  = '0' + num;
    }
    return num;
}
//获取时间
export default function getDate() {
    let date = new Date();
    let YY = date.getFullYear();
    let MM = date.getMonth() + 1;
    let DD = date.getDate();

    MM = addZero(MM)
    DD = addZero(DD)

    let d = `${YY}年${MM}月${DD}日`

    let HH = date.getHours();
    HH = addZero(HH)
    let mm = date.getMinutes();
    mm = addZero(mm)
    let time = `${HH}:${mm}`;
    return {
        day: d,
        YY,
        MM,
        DD,
        HH,
        mm,
        time
    }
}