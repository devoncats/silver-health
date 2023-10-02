import { Link } from 'react-router-dom'
import SignupForm from '../layout/SignupForm'
import Logo from '../assets/Logo'
import Tutorial from '../components/Tutorial'

export default function Signup () {
  const background = '/background.svg'
  return (
    <main className='h-screen w-screen flex'>
      <article className='absolute left-5 top-5'>
        <Tutorial />
      </article>

      <article className='flex flex-1'>
        <img className='object-cover' src={background} alt='' />
      </article>

      <article className='flex flex-1 flex-col px-12 py-8'>
        <Link to='/'><Logo /></Link>
        <section className='h-full flex flex-col items-center justify-center gap-8'>
          <h1 className='text-lg text-gray-600 w-80 text-center'>¡Bienvenido! Complete los siguientes campos para crear su cuenta.</h1>
          <SignupForm />
          <h4 className='text-sm text-blue-600'>¿Ya tienes una cuenta? Inicia sesión <Link className='underline' to='/login'>aquí</Link>.</h4>
        </section>
      </article>

    </main>
  )
}
