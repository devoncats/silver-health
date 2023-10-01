import { useNavigate } from 'react-router'
import authStore from '../stores/authStore'
import LoginFormInput from '../components/LoginFormInput'

export default function LoginForm () {
  const store = authStore()
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()

    await store.login()

    navigate('/dashboard')
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleLogin}>
      <LoginFormInput name='document' type='text' label='Cédula' placeholder='Ingrese su cédula...' />
      <LoginFormInput name='password' type='password' label='Contraseña' placeholder='Ingrese su contraseña...' />
      <button className=' border border-blue-900 bg-blue-600 text-white font-medium rounded-xl h-10 w-96' type='submit'>Iniciar sesión</button>
    </form>
  )
}
