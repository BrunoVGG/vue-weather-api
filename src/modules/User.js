const User = {
  state: {
    myUser: {
      avatar: null,
      name: 'TEST',
      email: '',
      token: ''
    },
    fakeUser: {
      login: 'admin',
      password: '123456'
    }
  },
  mutations: {
    refreshUser(state) {
      state.count++
    }
  },
  actions: {
    verifyIfHasUser(context, data) {
      context.commit('MyUser', userData)
    },
    getUser(context) {

    },
    login(context, data) {
      // Only to test, use a local FakeUser;
      // In real application, it must access a API to check 
      // user data.
      return new Promise((result, reject) => {

        let errors = {
          login: false,
          password: false
        };

        if (data.login !== context.state.fakeUser.login ) {
          errors.login = true
        }

        if (data.password !== context.state.fakeUser.password) {
          errors.password = true
        }

        if (!errors.login && !errors.password) {
          let _userData = {
            avatar: null,
            name: 'User Name',
            email: '',
            token: 'token_from_api'
          }

          context.dispatch('saveLocalUserData', _userData);
          context.commit('refreshUser', _userData);
          result();
        } else {
          reject(errors);
        }
      })
    },
    saveLocalUserData(context, data) {
      sessionStorage.setItem('user', JSON.stringify(data));
    }
  }
}

export default User