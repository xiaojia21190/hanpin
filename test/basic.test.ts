import { describe, expect, it } from 'vitest'
import cnchar from 'cnchar';
import 'cnchar-poly';
import pinyin from "pinyin";


describe('Hi', () => {
  it('should works', () => {
    console.log(cnchar.spell('这是下雨了吗', "array", "tone"));
    console.log(pinyin("这是下雨了吗", {
      heteronym: true,
    }));
    expect(cnchar.spell('汉字', "array")).toEqual(['Han', 'Zi'])
  })
})
