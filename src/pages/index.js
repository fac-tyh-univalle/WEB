import { useFormik } from "formik"
import { useState } from "react"
import PocketBase from "pocketbase"
import { toast } from "react-toastify"

export default function Home() {

  const pb = new PocketBase('https://magnificent-painter.pockethost.io')
  
  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: async (values) => {
      try {
        let { username, password } = values
        
        username = username.trim()
        password = password.trim()

        if (username && password) {
          const authData = await pb.collection("users").authWithPassword(
            username,
            password
          )
          console.log(authData)
        }

        console.log(values.username)
        console.log(values.password)
      } catch (e) {
        toast.error("Usuario/contrasena incorrectos.")
        console.log(e)
      }
    }
  })

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
          <form className='form' onSubmit={loginForm.handleSubmit}>
            <input 
              type="text"
              value={loginForm.values.username}
              onChange={loginForm.handleChange("username")}
              className="form-control"
              placeholder='Email'
            />
            <br/>
            <input
              type="password"
              className="form-control"
              placeholder='Contraseña'
              value={loginForm.values.password}
              onChange={loginForm.handleChange("password")}
            />
            <br/>
              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            <br/>
          </form>
        </div>                    
      </div>  
    </div>
  )
}