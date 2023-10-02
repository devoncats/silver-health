import { GiHealthNormal } from 'react-icons/gi'

export default function DoctorHero () {
  const doctor = 'http://localhost:3000/uploads/assets/1696109872513.png'
  const blob = 'http://localhost:3000/uploads/assets/blob.svg'
  return (
    <section>
      <img className='h-[40rem]' src={doctor} alt='' />
      <div className='relative items-center justify-center border w-[26rem] py-4 px-8 bg-white shadow rounded-lg bottom-10 left-24 gap-2'>
        <span className='flex items-center gap-4'>
          <GiHealthNormal className='text-lg text-blue-600' />
          <h1 className='text-4xl font-bold text-blue-600'>Dr. Juan Gómez</h1>
        </span>

        <span className='relative left-9'>
          <h2 className='text-xl font-medium text-gray-500'>Medico general</h2>
          <p className='text-sm text-gray-500'>15 años de experiencia en el sector de la salud.</p>
        </span>
      </div>
      <img className='absolute top-10 right-0 -z-10 ' src={blob} alt='' />
    </section>
  )
}
