import moment from 'moment';

const weekMap :{ [key: string]: string } = {
    Monday: '星期一',
    Tuesday: '星期二',
    Wednesday: '星期三',
    Thursday: '星期四',
    Friday: '星期五',
    Saturday: '星期六',
    Sunday: '星期日'
};

//格式化时间工具
export function formatTime(time:any, format:string):string {
    return moment(time).format(format);
}

// 获取当前时间
export  function   getCurrentTime()   {
    // 使用 moment.js 获取当前时间
    const currentTime = moment().format('HH:mm');

    return currentTime;
};

// 获取当前日期
export function getCurrentDate(){
    return  moment().format('YYYY年MM月DD日') + '  ' + weekMap[moment().format('dddd')]
}
