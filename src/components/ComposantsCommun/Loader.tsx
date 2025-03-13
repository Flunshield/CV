import { useEffect, useState } from 'react'

interface LoaderProps {
  textToDisplay?: string
  className?: string
}

const Loader = ({ className }: LoaderProps) => {
  const [dots, setDots] = useState('') // État pour gérer les points

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : '')) // Ajoute un point ou réinitialise
    }, 500) // Intervalle de 500ms

    return () => clearInterval(interval) // Nettoie l'intervalle lors du démontage
  }, [])

  return (
    <div className={className ? className : 'flex flex-col items-center justify-center min-h-screen'}>
      <div className='relative w-12 h-12 cursor-not-allowed rounded-full border-2 border-gray-700 animate-spin shadow-[0px_0px_10px_rgba(99,89,248,1),0px_-10px_10px_rgba(156,50,226,1),10px_-10px_10px_rgba(243,104,150,1),10px_0px_10px_rgba(255,11,11,1),10px_10px_10px_rgba(255,85,0,1),0px_10px_10px_rgba(255,149,0,1),-10px_10px_10px_rgba(255,183,0,1)]'>
        <div className='absolute w-6 h-6 rounded-full border-2 border-gray-700 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
      </div>
      <p className='mt-4 text-gray-700 text-lg font-medium'>{"Chargement" + dots}</p>
    </div>
  )
}

export default Loader
