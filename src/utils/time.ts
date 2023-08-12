// 这里是关于time的组合式写法

import {Ref, ref} from "vue";
import {getCurrentDate, getCurrentTime} from "@/utils/momentData.ts";

const currentTime: Ref<string> = ref(getCurrentTime())
const currentDate: Ref<string> = ref(getCurrentDate())

// 当前时间数据
export function useCurrentTimeData() {
    setInterval(() => {
            currentTime.value = getCurrentTime();
            currentDate.value = getCurrentDate()
        }, 1000
    )

    // 返回当前日期与时间
    return {
        currentTime, // 当前时间
        currentDate, // 当前日期
    }
}
