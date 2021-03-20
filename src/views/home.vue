<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        autofocus=""
        class="new-todo"
        autocomplete="off"
        placeholder="what needs to be done?"
      />
    </header>
    <section class="main">
      <input type="checkbox" id="toggle-all" class="toggle-all" />
      <label for="toggle-all">mark all as complete</label>
      <ul class="todo-list">
        <li class="todo">
          <div class="view">
            <input type="checkbox" class="toggle" />
            <label>学习1</label>
            <button class="destroy"></button>
          </div>
          <input type="text" class="edit" />
        </li>
        <li class="todo">
          <div class="view">
            <input type="checkbox" class="toggle" />
            <label>学习2</label>
            <button class="destroy"></button>
          </div>
          <input type="text" class="edit" />
        </li>
        <li class="todo">
          <div class="view">
            <input type="checkbox" class="toggle" />
            <label>学习3</label>
            <button class="destroy"></button>
          </div>
          <input type="text" class="edit" />
        </li>
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count">
        <strong>3</strong>
        <span>item left</span>
      </span>
      <ul class="filters">
        <li><a href="#/all" class="selected">All</a></li>
        <li><a href="#/active" class="">Active</a></li>
        <li><a href="#/completed" class="">Completed</a></li>
      </ul>
      <button class="clear-completed" style="display: none">
        Clear completed
      </button>
    </footer>
  </section>
</template>
