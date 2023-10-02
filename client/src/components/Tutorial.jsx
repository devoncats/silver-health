import { Link } from 'react-router-dom'

export default function Tutorial () {
  return (
    <Link to='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
      <h1 className='w-44 h-10 flex items-center justify-center rounded-xl font-bold text-blue-600 bg-white hover:bg-gray-100 shadow-lg'>¿Necesitas ayuda?</h1>
    </Link>
  )
}
