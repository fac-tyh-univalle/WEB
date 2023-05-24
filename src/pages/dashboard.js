import AuthService from '@/services/authService'
import PocketBaseService from '@/services/pocketbaseService'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
  const [currentContent, setCurrentContent] = useState(0)
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    (async () => {
      const userData = AuthService.getAuthData()
      if (!userData) {
        router.push('/')
      } else {
        setUser(userData)
      }
    })()
    
  },[])


  const logout = () => {
    AuthService.removeAuthData()
    router.push('/')
  }

  return (
    <div className='dashboard-page h-screen w-full overflow-hidden flex'>
      <div className='dashboard-page-section-1 h-full bg-secondary-bg-color flex flex-col items-center border-r border-main-text-color'>
        <div className='dashboard-user-details w-full h-2/5 flex flex-col items-center justify-center border-b border-main-text-color p-4'>
          <img className='rounded-full h-24 w-24 ' src='../images/berni.png' />
          <h4 className='text-main-text-color'>Administrador</h4>
          <h3 className='text-secondary-text-color'>Juaquin Justiniano</h3>
        </div>
        <div className='dashboard-user-navigation w-full h-2/5 border-b border-main-text-color p-4'>
          <h3 className='text-main-text-color text-3xl mb-5'>
            Opciones de usuario
          </h3>
          <ul className='text-secondary-text-color'>
            <li
              className={currentContent === 0 ? 'active' : ''}
              onClick={() => setCurrentContent(0)}>
              <h4>Puntos Registrados</h4>
            </li>
            <li
              className={currentContent === 1 ? 'active' : ''}
              onClick={() => setCurrentContent(1)}>
              <h4>Agregar Punto</h4>
            </li>
          </ul>
        </div>
        <div className='dashboard-user-options w-full h-1/5 flex items-center justify-center'>
          <button className='mx-4 py-2 px-4 rounded bg-input-bg-color text-main-text-color transition duration-200 ease-in-out hover:bg-secondary-text-color' onClick={logout}>
            Cerrar sesion
          </button>
        </div>
      </div>
      <div className='dashboard-page-section-2  h-full bg-main-bg-color flex items-center justify-center'>
        {
          currentContent === 0 ? (
            <h1 className='text-main-text-color'>Todos</h1>
          ) : (
            <h1 className='text-main-text-color'>Agregar</h1>
          )
        }
      </div>
    </div>

  )
}