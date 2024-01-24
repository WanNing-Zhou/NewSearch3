// 文件上传
import request from '@/utils/request.ts'
import api from './api.ts'

export function fileUpload(formData: any){
    return request(api.fileUploadUrl, {

        method: 'POST',
        transformRequest: [function(data) {
            // 去除post请求默认的Content-Type
            // delete headers.post['Content-Type']
            return data
        }],
        data: formData
    })
}
