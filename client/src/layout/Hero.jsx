import DoctorHero from '../components/DoctorHero'
import { Link } from 'react-router-dom'

export default function Hero () {
  return (
    <main className='pt-12 px-14 flex items-center'>
      <article className='flex-1'>
        <section className='flex flex-col gap-8'>
          <h1 className='text-5xl font-bold w-[65%]'>Ayudando a las personas mayores.</h1>
          <p className='text-sm text-gray-500 w-[65%]'>Nos enfocamos en tratar de ayudar a las personas mayores a vivir una vida plena y feliz, reconociendo la riqueza de experiencia y sabiduría que aportan a nuestra sociedad. Nuestra misión es proporcionar un apoyo integral que abarque no solo sus necesidades físicas, sino también sus aspectos emocionales y sociales.</p>
          <Link className='w-fit px-4 py-2 border rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium shadow-sm' to='/dashboard'>Agenda una cita</Link>
        </section>
      </article>

      <article className='flex flex-1 justify-center'>
        <DoctorHero />
      </article>
    </main>
  )
}
