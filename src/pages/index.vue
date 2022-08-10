<script setup lang="ts">
import pinyin from 'pinyin'
import { useClipboard } from '@vueuse/core'
const hanzi = ref('')
const piniynText = ref<string[][]>([])
const hanziArr = ref<string[]>([])
const copyZimu = ref<HTMLElement>()
const copyHanzi = ref<HTMLElement>()
// const router = useRouter()

const { copy, isSupported } = useClipboard()
const handleCopy = async (type: number) => {
    if (!isSupported) {
        window.alert('您的浏览器不支持Clipboard API')
        return
    }
    switch (type) {
        case 1:
            if (copyZimu.value) {
                await copy(copyZimu.value.innerText.replace(/\n/g, ' '))
                window.alert(`复制成功`)
            }

            break
        case 2:
            if (copyHanzi.value) {
                await copy(copyHanzi.value.innerText.replace(/\n/g, ' '))
                window.alert(`复制成功`)
            }

            break
        default:
            break
    }
}

const go = () => {
    piniynText.value = pinyin(hanzi.value, {
        heteronym: true,
    })
    hanziArr.value = hanzi.value.split('')
    // if (name)
    //   router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
    <div>
        <div i-carbon-campsite text-4xl inline-block />
        <p>
            <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">汉字转拼音</a>
        </p>
        <p>
            <em text-sm op75>这是一个伟大的拼音</em>
        </p>

        <div py-4 />
        <div flex flex-col justify-center items-center>
            <textarea id="input" v-model="hanzi" placeholder="填入汉字" rows="3" cols="20" autocomplete="false" p="x-4 y-2" w="250px" text="center" bg="transparent" border="~ rounded gray-200 dark:gray-700" outline="none active:none" @keydown.enter="go" />
            <div p-5 v-if="piniynText.length > 0">正常拼音</div>
            <div flex flex-col justify-center items-center>
                <button v-if="piniynText.length > 0" class="m-3 text-sm btn" @click="handleCopy(1)" @keyup="handleCopy(1)">点击复制拼音</button>
                <div flex flex-row justify-center items-center ref="copyZimu">
                    <p v-for="(item, index) in piniynText" :key="index" p="x-5">
                        {{ item[0] }}
                    </p>
                </div>
                <button v-if="hanziArr.length > 0" class="m-3 text-sm btn" @click="handleCopy(2)" @keyup="handleCopy(2)">点击复制汉字</button>
                <div flex flex-row justify-center items-center ref="copyHanzi">
                    <p v-for="(item, index) in hanziArr" :key="index" p="x-5">
                        {{ item }}
                    </p>
                </div>
            </div>
            <p p-4 v-if="piniynText.length > 0">多音</p>
            <div flex flex-row>
                <div v-for="(item, index) in piniynText" :key="index" p="x-5 y-2">
                    <p v-for="(p, index) in item" :key="index">
                        {{ p }}
                    </p>
                </div>
            </div>
        </div>
        <div>
            <button class="m-3 text-sm btn" :disabled="!hanzi" @click="go">转换成拼音</button>
        </div>
    </div>
</template>
