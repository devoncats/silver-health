import { create } from 'zustand'
import axios from 'axios'

const AuthStore = create(set => ({
  loggedIn: null,

  loginForm: {
    document: '',
    password: ''
  },

  signupForm: {
    document: '',
    password: '',
    name: '',
    surname: '',
    age: '',
    residency: '',
    phone: ''
  },

  handleLoginFormChange: (e) => {
    const { name, value } = e.target

    set(state => ({
      loginForm: {
        ...state.loginForm,
        [name]: value
      }
    }))
  },

  login: async () => {
    const { loginForm } = AuthStore.getState()

    set({ loginForm: { document: '', password: '' } })

    const res = await axios.post('user/login', loginForm)

    set({ loggedIn: true })

    console.log(res)
  },

  handleSignupFormChange: (e) => {
    const { name, value } = e.target

    set(state => ({
      signupForm: {
        ...state.signupForm,
        [name]: value
      },
      signupFormData: {
        ...state.signupFormData,
        [name]: value
      }
    }))
  },

  signup: async () => {
    const { signupForm } = AuthStore.getState()

    const res = await axios.post('user/signup', signupForm)

    console.log(res)
  },

  checkAuth: async () => {
    try {
      const res = await axios.get('user/check-auth')

      set({ loggedIn: true })

      console.log(res)
    } catch {
      set({ loggedIn: false })
    }
  }
}))

export default AuthStore
