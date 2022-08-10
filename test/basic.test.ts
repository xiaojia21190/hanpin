import { describe, expect, it } from 'vitest'
import pinyin from 'pinyin'

describe('test 汉字', () => {
    it('pinyin', () => {
        console.log(
            pinyin('这是下雨了吗', {
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
