import {
    ref,
    computed
} from "vue"

export default function useEditTodo(todosRef) {
    const editingTodoRef = ref(null);
    let originTitle = null;

    const editTodo = (todo) => {
        originTitle = todo.title
        editingTodoRef.value = todo
    }

    const doneEdit = (todo) => {
        editingTodoRef.value = null
        const title = todo.title.trim()
        if (title) {
            todo.title = title
        } else {
            //删除
            todosRef.value.splice(todosRef.value.indexOf(todo), 1)
        }
    }

    const cancelEdit = (todo) => {
        editingTodoRef.value = null;
        todo.title = originTitle;
    }

    const allDoneRef = computed({
        get() {
            return todosRef.value.every(it => it.completed)
        },
        set(checked) {
            todosRef.value.forEach(todo => {
                todo.completed = checked
            })
        }
    })

    return {
        editingTodoRef,
        editTodo,
        doneEdit,
        cancelEdit,
        allDoneRef,
    }
}