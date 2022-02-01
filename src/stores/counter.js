import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),

  actions: {
    increment() {
      this.count += 1;
    },
  },
});
