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
    verifyIfHasUser(context) {
      context.commit('increment')
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
          result();
        } else {
          reject(errors);
        }
      })
    }
  }
}

export default User