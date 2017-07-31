<template>
  <div class="autocomplete-input">
    <p class="control has-icon has-icon-right">
      <input class="input is-large" placeholder="Search..." />
    </p>
    <ul class="options-list">
      <li v-for="option in options">
        {{ option.title }}
      </li>
    </ul>
  </div>
</template>