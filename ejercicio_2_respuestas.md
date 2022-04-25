2.1 ¿Cómo implementarías las acciones del frontend utilizando redux? (por
ejemplo autenticación, solicitud de clientes activos para el usuario y
solicitud de casos por cliente)

//slices/auth.
//Ejemplo autenticacion redux toolkit

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const user = JSON.parse(localStorage.getItem("user"))
const baseUrl = "https://admindev.inceptia.ai"

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
		try {
		    const response = await axios({
		      method: 'post',
		      url: `${baseUrl}/api/v1/login/`,
		      data: {
		        email, 
		        password,
		      },
		    })
		    return response.data
		  } catch (error) {
		    console.error(error)
		  }
)

const initialState = user
  ? { isLogin: true, user }
  : { isLogin: false, user: null }

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLogin = true
      state.user = action.payload.user
    },
    [login.rejected]: (state, action) => {
      state.isLogin = false
      state.user = null
    },
  },
})

const { reducer } = authSlice
export default reducer

2.2 Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías
el index.js?
  En el caso de Next.js tiene un routing basado en file system, con esto se logra que cada archivo dentro de la carpeta “pages” sea una ruta distinta de nuestra app.
  Por lo que para agregar nueva ruta solo hace falta crear un nuevo archivo dentro de dicha carpeta.