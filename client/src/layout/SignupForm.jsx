import SignupFormInput from '../components/SignupFormInput.'
import AuthStore from '../stores/authStore'
import { useNavigate } from 'react-router'

export default function SignupForm () {
  const store = AuthStore()
  const navigate = useNavigate()

  const handleSignup = async (event) => {
    event.preventDefault()

    await store.signup()

    navigate('/login')
  }
  return (

    <form className='flex flex-col gap-4' onSubmit={handleSignup}>
      <div className='flex gap-6'>
        <SignupFormInput name='document' type='text' label='Cédula' placeholder='Ingrese su cedula...' />
        <SignupFormInput name='password' type='password' label='Contraseña' placeholder='Ingrese su contraseña...' />
      </div>

      <div className='flex gap-6'>
        <SignupFormInput name='name' type='text' label='Nombre' placeholder='Ingrese su nombre...' />
        <SignupFormInput name='surname' type='text' label='Apellido' placeholder='Ingrese su apellido...' />
      </div>
      <div className='flex gap-6'>
        <SignupFormInput name='age' type='number' label='Edad' placeholder='Ingrese su edad...' />
        <SignupFormInput name='residency' type='text' label='Dirección' placeholder='Ingrese su dirección...' />
      </div>

      <SignupFormInput name='phone' type='number' label='Teléfono' placeholder='Ingrese su numero teléfonico...' />

      <div className='w-full flex justify-center mt-10'>
        <button className='border border-blue-900 bg-blue-600 text-white font-medium rounded-xl h-10 w-96' type='submit'>Registarse</button>
      </div>
      {!store.signupForm.valid && <span className='text-center text-red-500'>El formulario es invalido, intenta otra vez.</span>}
    </form>
  )
}
