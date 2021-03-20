import {
    ref,
    onMounted,
    onUnmounted,
    computed
} from "vue"

import {
    filter
} from "../../utils/todoPort"

const validHash = ["all", "active", "completed"]


export default function useFilter(todosRef) {
    const visibilityRef = ref("all");

    const onHashChange = () => {
        const hash = location.hash.replace(/#\/?/, "");

        if (validHash.includes(hash)) {
            visibilityRef.value = hash
        } else {
            location.hash = "";
            visibilityRef.value = "all"
        }
    }

    //组件挂载完成的生命周期函数
    onMounted(() => {
        document.addEventListener("DOMContentLoaded", () => {
            location.hash = ""
        })
        window.addEventListener("hashchange", onHashChange)
    })
    //组件销毁过后的生命周期函数
    onUnmounted(() => {
        window.removeEventListener("hashchange", onHashChange)
    })

    const filteredTodosRef = computed(() => {
        return filter(todosRef.value, visibilityRef.value)
    })

    const remainingRef = computed(() => {
        return filter(todosRef.value, "active").length
    })

    const completedRef = computed(() => {
        return filter(todosRef.value, "completed").length
    })

    return {
        visibilityRef,
        filteredTodosRef,
        remainingRef,
        completedRef,
    }
}