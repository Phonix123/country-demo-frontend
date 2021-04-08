export const state = {
  // false: to include Mdsp OSBar.
  // to add Mdsp OSBar go to index.html and change wrapper div id to _mdspcontent
  topBar: true,
  darkTheme: true,
  locale: "en",
  meta1: "",
  meta2: ""
};

export const mutations = {
  // receives in dark true or false if dark or light mode
  changeDarkTheme: (state, dark) => {
    state.darkTheme = dark;
  },
  changeLocale: (state, locale) => {
    state.locale = locale;
  },
  setNavigationMeta: (state, params) => {
    let storable = [];
    if (params.length) {
      // console.log("type received is array");
      storable = params;
    } else {
      // console.log("type received is not array");
      storable = [params];
    }
    //console.log("Storing Params-" + JSON.stringify(storable));
    state.meta1 = btoa(JSON.stringify(storable));
    // state.meta1 = storable;
  },
  setUserMeta: (state, params) => {
    // console.log("Params-" + JSON.stringify(params));
    state.meta2 = btoa(JSON.stringify(params));
    //state.meta2 = params;
    // console.log("State Params-" + state.meta);
  }
};

export const actions = {};

export const getters = {
  hasTopBar: state => {
    return state.topBar;
  },
  isDarkTheme: state => {
    return state.darkTheme;
  },
  getLocale: state => {
    return state.locale;
  },
  getNavigationMeta: state => {
    ///console.log("Returning params: " + JSON.stringify(state.meta1));
    // if (state.meta[0] === "") { console.log("Navigation meta is empty"); return {}; }
    // else console.log(JSON.parse(atob(state.meta[0])));
    return JSON.parse(atob(state.meta1));
    //return state.meta1;
  },
  getUserMeta: state => {
    // console.log("Return params: " + atob(state.meta));
    return JSON.parse(atob(state.meta2));
    //return state.meta2;
  },
  isAdmin: state => {
    // console.log("Return params: " + atob(state.meta));
    const meta = JSON.parse(atob(state.meta2));
    if (meta === undefined) return false;
    const isAdmin = meta.roles.includes("admin");
    console.log("Checking if admin: " + isAdmin);
    return isAdmin;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
