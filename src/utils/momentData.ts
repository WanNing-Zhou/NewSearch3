import moment from 'moment';

//格式化时间工具
export function formatTime(time:any, format:string):string {
    return moment(time).format(format);
}
