import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <div className='home-page'>
      <div className='home-page-section-1'>
        <div className="app-img-1">
            <img src="../images/Logo3.png" />
        </div>
      </div>
      <div className='home-page-section-2' color='white'>
        <h1>Iniciar Sesión.</h1>
        <div>
          <form className='form'>
            <input 
              type="text"
              className="form-control"
              placeholder='Email'
            />
            <br/>
            <input
              type="password"
              className="form-control"
              placeholder='Contraseña'
            />
            <br/>
            <Link href='/ubicacion'>
              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </Link>
            <br/>
            <Link href="" passHref>
                <span className="forget-password-a">Olvidaste tu contraseña?</span>
            </Link>
          </form>
        </div>                    
      </div>  
    </div>
  )
}