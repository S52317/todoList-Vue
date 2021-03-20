const todomvc = "list"
const port = 5008

/**
 * 生成一个唯一ID，时间戳+4位随机数
 */
export function generateId() {
    return Date.now() + Math.random().toString(16).substr(2, 4)
}

/**
 * 获取目前所有的任务
 */
export async function get() {
    const resp = await fetch(`http://localhost:${port}/todolist`);

    return await resp.text()
}

/**
 * 保存所有任务
 * @param {Array} todo 任务列表
 */
export function save(todo) {
    if (!Array.isArray(todo)) {
        throw new Error("参数只能是数组");
    }
    fetch(`http://localhost:${port}/todolist`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `${todomvc}=${JSON.stringify(todo)}`
    })
}

export function filter(todos, visibility = "all") {
    if (visibility === "all") {
        return todos;
    } else if (visibility === "active") {
        return todos.filter(it => !it.completed)
    } else if (visibility === "completed") {
        return todos.filter(it => it.completed)
    }
    throw new Error("invalid visibility value")
}