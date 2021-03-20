export default function useRemoveTodo(todosRef) {

    //删除一个
    const remove = todo => {
        todosRef.value.splice(todosRef.value.indexOf(todo), 1)
    }

    //删除所有完成项
    const removeCompleted = todo => {
        todosRef.value = todosRef.value.filter(it => !it.completed)
    }

    return {
        remove,
        removeCompleted,
    }
}