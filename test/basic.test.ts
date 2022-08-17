import { describe, expect, it } from 'vitest'
import pinyin from 'pinyin'
import { GetChinese } from '~/utils/'

describe('test 汉字', () => {
    it('pinyin', () => {
        let cahr: string = '这是123123下雨asd1了asdada1123123吗'
        cahr = GetChinese(cahr)
        console.log(
            pinyin(cahr, {
                heteronym: true,
            })
        )
        expect(
            pinyin('汉字', {
                heteronym: true,
            })
        ).toEqual([['hàn'], ['zì']])
    })
})
