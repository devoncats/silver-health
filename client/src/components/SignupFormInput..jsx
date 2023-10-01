import AuthStore from '../stores/authStore'

export default function SignupFormInput (props) {
  const { name, type, label, placeholder } = props
  const store = AuthStore()

  return (
    <section className='flex flex-col'>
      <label className='font-medium' htmlFor={name}>{label}</label>
      <input
        className='w-96 h-10 p-4 border border-gray-400 rounded-xl text-sm'
        onChange={store.handleSignupFormChange}
        value={store.signupForm[name]}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </section>
  )
}
