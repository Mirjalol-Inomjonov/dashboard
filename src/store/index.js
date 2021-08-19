import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },

  getters: {
    getMale(state) {
      return state.users.filter((user) => {
        return user.gender == "Male";
      });
    },
    getFemale(state) {
      return state.users.filter((user) => {
        return user.gender == "Female";
      });
    },
    getIT(state) {
      return state.users.filter((user) => {
        return user.department == "IT";
      });
    },
    getMarketing(state) {
      return state.users.filter((user) => {
        return user.department == "Marketing";
      });
    },
    getAcounting(state) {
      return state.users.filter((user) => {
        return user.department == "Acounting";
      });
    },
    // getOneUser(state, index)
  },

  mutations: {
    PUSH_USER(state, user) {
      state.users = [...state.users, user];
    },

    REMOVE_ONE_USER(state, index) {
      state.users.splice(index, 1);
    },

    EDIT_ONE_USER(state, data) {
      state.users[data.index] = data.user;
    },
  },

  actions: {},
  modules: {},
});
