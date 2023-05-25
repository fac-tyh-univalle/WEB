import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { Notify } from "notiflix"
import PocketBaseService from "@/services/pocketbaseService"
import AuthService from "@/services/authService"
import { useRouter } from "next/router"
import Image from "next/image"

export default function Home() {

  useEffect(() => {
    // Get token from localStorage using AuthService and check if exists
    const token = AuthService.getAuthData()
    // If token exists, redirect to locations page
    if (token) {
      // Redirect to dashboard
      router.push("/dashboard")
    }
  },[])

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
          AuthService.setAuthData(user.token, user.record)
          // Redirect to locations page
          Notify.success("Bienvenido!")
          // Redirect to dashboard
          router.push("/dashboard")
        }
      } catch (e) {
        console.log(e)
        // Show error message using Notify
        Notify.failure("Usuario/contrasena incorrectos.")
      } finally {
        // Set loading to false
        setLoading(false)
      }
    }
  })

  return (
    <>
      <Head>
        <title>TOURISTA</title>
      </Head>
      <div className='home-page'>
        <div className='home-page-section-1 secondary-bg-color'>
          <div className="app-img-1">
              <Image src="/images/Logo3.png" width={200} height={200} />
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
              <button type="submit" className="bg-secondary-text-color" disabled={loading}>
              {loading ? "Cargando..." : "Iniciar Sesión"}
              </button>
              <br/>
            </form>
          </div>                    
        </div>  
      </div>
    </>
  )
}