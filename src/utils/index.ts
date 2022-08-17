export function GetChinese(strValue: string) {
    if (strValue != null && strValue != '') {
        var reg = /[\u4e00-\u9fa5]/g
        return strValue.match(reg)?.join('') || strValue
    } else {
        return strValue
    }
}
