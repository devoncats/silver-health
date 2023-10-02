import Header from '../layout/Header'
import Hero from '../layout/Hero'
import { IoChatbubbles } from 'react-icons/io5'

export default function Landing () {
  return (
    <>
      <Header />
      <Hero />
      <article className='mt-12 flex flex-col items-center justify-center gap-10'>
        <section className='flex flex-col text-center bg-white border w-fit p-4 rounded-xl shadow-md'>
          <h1 className='text-4xl font-bold'>Servicios que ofrecemos</h1>
          <h2 className='text-sm text-gray-500'>Siempre estamos disponibles para cualquier necesidad que nuestros usuarios presenten</h2>
        </section>

        <section>
          <ul className='flex gap-10'>
            <li className='w-[18rem] bg-white p-2 rounded-md shadow-md border'>
              <IoChatbubbles />
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-medium'>Consultas en linea</h1>
                <p className='text-sm text-gray-600'>Proveemos servicios de consulta en linea gratuita todas nuestros usuarios con la suscripcion estandar de nuestro servicio.</p>
              </div>
            </li>
            <li className='w-[18rem] bg-white p-2 rounded-md shadow-md border'>
              <IoChatbubbles />
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-medium'>Consultas en linea</h1>
                <p className='text-sm text-gray-600'>Proveemos servicios de consulta en linea gratuita todas nuestros usuarios con la suscripcion estandar de nuestro servicio.</p>
              </div>
            </li>
            <li className='w-[18rem] bg-white p-2 rounded-md shadow-md border'>
              <IoChatbubbles />
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-medium'>Consultas en linea</h1>
                <p className='text-sm text-gray-600'>Proveemos servicios de consulta en linea gratuita todas nuestros usuarios con la suscripcion estandar de nuestro servicio.</p>
              </div>
            </li>
            <li className='w-[18rem] bg-white p-2 rounded-md shadow-md border'>
              <IoChatbubbles />
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-medium'>Consultas en linea</h1>
                <p className='text-sm text-gray-600'>Proveemos servicios de consulta en linea gratuita todas nuestros usuarios con la suscripcion estandar de nuestro servicio.</p>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}
