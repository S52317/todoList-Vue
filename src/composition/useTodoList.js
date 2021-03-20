import {
    ref,
    watchEffect,
    watch
} from "vue";
import * as todoPort from "../../utils/todoPort";
let flag = false;

export default function useTodoList() {
    const todosRef = ref([]);

    watchEffect(async () => {
        console.log(1);
        todosRef.value = JSON.parse(await todoPort.get());
        flag = true;
    });

    watchEffect(async () => {
        window.todosRef = todosRef.value;//让数据具备响应式
        // console.log(2);
        if (flag) {
            todoPort.save(todosRef.value);
        }
    });

    return {
        todosRef,
    }
}