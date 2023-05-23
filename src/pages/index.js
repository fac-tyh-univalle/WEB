import { useFormik } from "formik"
import { useState } from "react"
import PocketBase from "pocketbase"
import { toast } from "react-toastify"
import { Notify } from "notiflix"
import PocketBaseService from "@/services/pocketbaseService"
import AuthService from "@/services/authService"
import { useRouter } from "next/router"

export default function Home() {

  // State for UI loading when submitting form
  const [loading, setLoading] = useState(false)
  // Next router
  const router = useRouter()
  
  const loginForm = useFormik({
    initialValues: {
      username: "usuarioexample@gmail.com",
      password: "santiago"
    },
    onSubmit: async (values) => {
      // Set loading to true
      setLoading(true)
      try {
        // Destructure username and password from form values
        let { username, password } = values
        // Call login method from PocketBaseService to login user
        const user = await PocketBaseService.login(username, password)
        // If user and user.token exists, save user data in localStorage
        if (user && user.token) {
          // Save user data in localStorage
          AuthService.setToken(user.token)
          // Redirect to locations page
          Notify.success("Bienvenido!")
          // Redirect to dashboard
          router.push("/dashboard")
        }
      } catch (e) {
        Notify.failure("Usuario/contrasena incorrectos.")
        console.log('error:',e)
      } finally {
        setLoading(false)
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
            <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar Sesión"}
            </button>
            <br/>
          </form>
        </div>                    
      </div>  
    </div>
  )
}