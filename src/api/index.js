import { request } from '@/utils/request'

// banner
export function getBanner() {
    let res = request('/banner', 'GET')
    return res
}
// page
export function getList(page) {
    let res = request(`/list?page=${page}`, 'GET')
    return res
}
// music detail
export function getDetail(id) {
    let res = request(`/detail?id=${id}`, 'GET')
    return res
}
// other
export function getOther() {
    let res = request('/other', 'GET')
    return res
}
