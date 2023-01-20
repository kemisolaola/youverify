// transfer

export default {
    state: () => ({
        openMenu: false
    }),
    getters: { },
    mutations: {
        SHOW_MENU: (state) => {
            state.openMenu = !state.openMenu
        }
    },
    actions: {
    },
  }
  