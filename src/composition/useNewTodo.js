import {
    ref
} from "vue"
import {
    generateId
} from "../../utils/todoPort"


export default function useNewTodo(todosRef) {
    const newTodoRef = ref(""); //新任务标题
    const addTodo = () => {
        //新增一个任务
        const value = newTodoRef.value && newTodoRef.value.trim();
        if (!value) {
            return;
        }
        //生成一个任务对象，将其加入到任务列表中
        const todo = {
            id: generateId(),
            title: value,
            completed: false, //任务是否完成
        }
        todosRef.value.push(todo)
        newTodoRef.value = "" //清空输入框
    }
    return {
        newTodoRef,
        addTodo,
    }
}