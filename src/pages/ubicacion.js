import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <div className='home-page'>
      <div className='home-page-section-1'>
        <div className="app-menu">
          <div className="app-img">
              <img src="../images/berni.png" />
              <h4>Administrador</h4>
              <h3>Juaquin Justiniano</h3>
          </div>

          <h2></h2>

          <div className="app-nav">
            <h4>Ubicaciones</h4>
              <ul>
                  <li><a href='/ubicacion'>Todos</a></li>
                  <li><a className="active" href='/agregar'>Agregar</a></li>
              </ul>
          </div>
        </div>
      </div>
      
      <div className='home-page-section-2' color='white'>
        <h1>Ver ubicaciones</h1>

        <div className="app-ubicacion">
          <div className="container">
              <div className="app-img-3">
                <img src="../images/berni.png"/>
              </div>
          </div>
          <div className="container">
              <div className="app-img-3">
                <img src="../images/ubi.jpg"/>
              </div>
          </div>
          <div className="container">
              <div className="app-img-3">
                <img src="../images/berni.png"/>
              </div>
          </div>
          <div className="container">
              <div className="app-img-3">
                <img src="../images/ubi.jpg"/>
              </div>
          </div>
          <div className="container">
              <div className="app-img-3"> 
                <img src="../images/berni.png"/>
              </div>
          </div>
        </div>

      </div>  
    </div>
  )
}