import { Link } from 'react-router-dom'
import Logo from '../assets/Logo'

export default function Header () {
  return (
    <header className='h-[7vh] flex items-center justify-between px-12 py-2'>
      <Logo />

      <nav>
        <ul className='flex gap-8 text-gray-500'>
          <Link><li className='hover:text-black'>Servicios</li></Link>
          <Link><li className='hover:text-black'>Sobre nosotros</li></Link>
          <Link><li className='hover:text-black'>Guias</li></Link>
        </ul>
      </nav>

      <article className='flex items-center gap-4'>
        <Link className='p-2 text-blue-600 font-medium hover:text-blue-700' to='/login'>Iniciar sesión</Link>
        <Link className='p-2 border rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium shadow-sm' to='/signup'>Registrarte</Link>
      </article>
    </header>
  )
}
