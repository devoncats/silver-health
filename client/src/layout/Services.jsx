import { IoChatbubbles } from 'react-icons/io5'
import { GiMedicines } from 'react-icons/gi'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { HiGift } from 'react-icons/hi'

export default function Services () {
  return (
    <article className='mt-24 flex flex-col items-center justify-center gap-48 bg-white p-[11.5rem]' id='services'>
      <section className='flex flex-col items-center text-center bg-white w-fit p-4'>
        <h1 className='text-4xl font-bold'>Servicios que ofrecemos</h1>
        <h2 className='text-sm text-gray-500'>Siempre estamos disponibles para cualquier necesidad que nuestros usuarios presenten</h2>
        <div className=' mt-6 h-1 w-[12rem] bg-blue-600' />
      </section>

      <section>
        <ul className='flex gap-10'>
          <li className='w-[18rem] flex flex-col bg-white p-6 rounded-md shadow-sm border gap-6'>
            <IoChatbubbles className='text-4xl text-blue-600' />
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-medium'>Consultas en linea</h1>
              <p className='text-sm text-gray-600'>Proveemos servicios de consulta en linea gratuita todas nuestros usuarios con la suscripcion estandar de nuestro servicio.</p>
            </div>
          </li>
          <li className='w-[18rem] flex flex-col bg-white p-6 rounded-md shadow-sm border gap-6'>
            <GiMedicines className='text-4xl text-blue-600' />
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-medium'>Consultas en linea</h1>
              <p className='text-sm text-gray-600'>Proveemos servicios de consulta en linea gratuita todas nuestros usuarios con la suscripcion estandar de nuestro servicio.</p>
            </div>
          </li>
          <li className='w-[18rem] flex flex-col bg-white p-6 rounded-md shadow-sm border gap-6'>
            <BsFillCreditCardFill className='text-4xl text-blue-600' />
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-medium'>Consultas en linea</h1>
              <p className='text-sm text-gray-600'>Proveemos servicios de consulta en linea gratuita todas nuestros usuarios con la suscripcion estandar de nuestro servicio.</p>
            </div>
          </li>
          <li className='w-[18rem] flex flex-col bg-white p-6 rounded-md shadow-sm border gap-6'>
            <HiGift className='text-4xl text-blue-600' />
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-medium'>Consultas en linea</h1>
              <p className='text-sm text-gray-600'>Proveemos servicios de consulta en linea gratuita todas nuestros usuarios con la suscripcion estandar de nuestro servicio.</p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  )
}
