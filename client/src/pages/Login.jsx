import { Link } from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import Logo from '../assets/Logo'

export default function Login () {
  const background = '/background.svg'
  return (
    <main className='h-screen w-screen flex'>
      <article className='flex flex-1 flex-col px-12 py-8'>
        <Link to='/'><Logo /></Link>
        <section className='h-full flex flex-col items-center justify-center gap-8'>
          <h1 className='text-lg text-gray-600'>¡Bienvenido! Por favor, ingrese en su cuenta.</h1>
          <LoginForm />
          <h4 className='text-sm text-blue-600'>¿No tienes una cuenta? Registrate <Link className='underline' to='/signup'>aquí</Link>.</h4>
        </section>
      </article>

      <article className='flex flex-1'>
        <img className='object-cover' src={background} alt='' />
      </article>
    </main>
  )
}
