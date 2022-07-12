import { createStore } from "vuex";
import axios from "axios";

const url = "http://localhost:1338";

const store = createStore({
  state: {
    user: null,
    profile: null,
    isAuthReady: false,
    messageError: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setProfile(state, payload) {
      state.profile = payload;
    },
    setAuthIsReady(state, payload) {
      state.isAuthReady = payload;
    },
    setMessageError(state, payload) {
      state.messageError = payload;
    },
  },
  actions: {
    // login action
    async login(context, { email, password }) {
      // console.log('login action')

      await axios(`${url}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json" || "text/html",
        },
        withCredentials: true,
        data: JSON.stringify({
          username: email,
          password: password,
        }),
      })
        .then((response) => {
          // console.log(response);
          
          if (response.data.user) {
            const profile = checkProfile();
            const user = response.data.user;
            context.commit("setUser", user);
            context.commit("setAuthIsReady", true);
            context.commit("setProfile", profile);  
            context.commit("setMessageError", null);
          }
        })
        .catch((err) => {
          // console.log(err)
          context.commit("setUser", null);
          context.commit("setProfile", null);
          context.commit("setAuthIsReady", false);

          // set error and reset errors
          context.commit("setMessageError", 'Invalid email or password');
        });
    },

    // signup action
    async signup(context, { email, password }) {
      // console.log('login action')

      await axios(`${url}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: JSON.stringify({
          username: email,
          password: password,
        }),
      })
        .then((response) => {
          // console.log(response);
          
          if (response.data.user) {
            const profile = checkProfile();
            const user = response.data.user;
            context.commit("setUser", user);
            context.commit("setAuthIsReady", true);
            context.commit("setProfile", profile);
            context.commit("setMessageError", null);
          }
        })
        .catch((err) => {
          // console.log(err)
          context.commit("setUser", null);
          context.commit("setProfile", null);
          context.commit("setAuthIsReady", false);

          // set error and reset errors
          context.commit("setMessageError", err.response.data.message);
        });
    },

    // logout action
    async logout(context) {
      // console.log('login action')

      await axios(`${url}/api/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
        .then((response) => {
          if (response) {
            context.commit("setUser", null);
            context.commit("setProfile", null);
            context.commit("setAuthIsReady", false);
            context.commit("setMessageError", null);
            console.log("logout with success");
          }
        })
        .catch((err) => {
          // console.log(err)
          context.commit("setUser", null);
            context.commit("setProfile", null);
            context.commit("setAuthIsReady", false);
            context.commit("setMessageError", null);
            console.log("logout with success");
        });
    },
    
  },
});
// ------___END_CREATE_STORE___----- //

const checkProfile = async () => {
  console.log("check profile");
  await axios(`${url}/api/profile/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json" || "text/plain",
    },
    withCredentials: true,
  })
    .then((response) => {
      if (response.data) {
        const profile = response.data.profile;
        if (!profile) {
          store.commit("setProfile", null);
          // console.log(store.state.profile)
        } else {
          store.commit("setProfile", profile);
          // console.log(store.state.profile)
        }
      }
    })
    .catch((err) => {
      console.log(err.message, "error");
    });
};

const checkUser = async () => {
  console.log("check user");
  await axios(`${url}/api/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json" || "text/plain",
    },
    withCredentials: true,
  })
    .then((response) => {
      if (response.data.user) {
        const user = response.data.user;
        store.commit("setUser", user);
        store.commit("setAuthIsReady", true);
        store.commit("setMessageError", null);
        checkProfile();
      }
    })
    .catch((err) => {
      console.log(err.message);
      store.commit("setUser", null);
      store.commit("setProfile", null);
      store.commit("setAuthIsReady", false);
      // console.log(store.state)
    });
};

checkUser();

export default store;
