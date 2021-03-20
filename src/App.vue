<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          autofocus=""
          class="new-todo"
          autocomplete="off"
          placeholder="what needs to be done?"
          v-model="newTodoRef"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="todosRef.length > 0">
        <input
          type="checkbox"
          id="toggle-all"
          class="toggle-all"
          v-model="allDoneRef"
        />
        <label for="toggle-all"></label>
        <ul class="todo-list">
          <li
            class="todo"
            :class="{
              completed: todo.completed,
              editing: todo === editingTodoRef,
            }"
            v-for="todo in filteredTodosRef"
            :key="todo.id"
          >
            <div class="view">
              <input type="checkbox" class="toggle" v-model="todo.completed" />
              <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
              <button class="destroy" @click="remove(todo)"></button>
            </div>
            <input
              v-model="todo.title"
              type="text"
              class="edit"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.escape="cancelEdit(todo)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todosRef.length > 0">
        <span class="todo-count">
          <strong>{{ remainingRef }}</strong>
          <span>item{{ remainingRef === 1 ? "" : "s" }} left</span>
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" :class="{ selected: visibilityRef == 'all' }"
              >All</a
            >
          </li>
          <li>
            <a href="#/active" :class="{ selected: visibilityRef == 'active' }"
              >Active</a
            >
          </li>
          <li>
            <a
              href="#/completed"
              :class="{ selected: visibilityRef == 'completed' }"
              >Completed</a
            >
          </li>
        </ul>
        <button class="clear-completed" v-show="completedRef > 0" @click="removeCompleted">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoList from "./composition/useTodoList";
import useNewTodo from "./composition/useNewTodo";
import useFilter from "./composition/useFilter";
import useEdit from "./composition/useEditTodo";
import useRemove from "./composition/useRemoveTodo";

export default {
  setup() {
    const { todosRef } = useTodoList();

    return {
      todosRef,
      ...useNewTodo(todosRef),
      ...useFilter(todosRef),
      ...useEdit(todosRef),
      ...useRemove(todosRef),
    };
  },
};
</script>
