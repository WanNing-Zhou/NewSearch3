


// 本地存储代码
export function setLocalStorage(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value))
}

// 获取本地存储
export function getLocalStorage<T>(key: string):T{
    return JSON.parse(localStorage.getItem(key) as any)
}
