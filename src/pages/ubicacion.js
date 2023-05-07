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
              <h3>  Juaquin Justiniano</h3>
          </div>

          <h2></h2>

          <div className="app-nav">
            <h4>Ubicacion</h4>
              <ul>
                  <li><a className="active" href='/agregar'>Todos</a></li>
                  <li><a href='/agregar'>Agregar</a></li>
              </ul>
          </div>
        </div>
      </div>
      
      <div className='home-page-section-2' color='white'>
        <h1>Agregar punto turistico</h1>
        <div className="app-dental">
          <div className='home-page-1'>
            <div>
              <form className='form'>
                <label>Nombre:</label>
                <input 
                  type="text"
                  className="form-control"
                  placeholder=''
                />
                <br/>
                <label>Direccion:</label>

                <textarea 
                  type="text"
                  className="form-control"
                  placeholder=''
                  rows="4"
                />
                <br/>

                <label>Descripcion:</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder=''
                  rows="5"
                />
                <br/>
              </form>
            </div> 
          </div>
          <div className='home-page-2' color='white'>
            <div>
              <form className='form'>
                <label>Ubicacion</label>
                <div className="app-img-2">
                    <img src="../images/mapa.jpg"/>
                </div>
              </form>
            </div>
          </div>

        </div>
          
        <Link href='/ubicacion'>
          <button type="submit" className="btn btn-primary">Agregar</button>
        </Link>
        <br/>

        <Link href='/ubicacion'>
          <button type="submit" className="btn btn-primary">Eliminar</button>
        </Link>
        <br/>


      </div>  
    </div>
  )
}