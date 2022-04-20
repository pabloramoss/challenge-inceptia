import axios from "axios"

const baseUrl = "https://admindev.inceptia.ai"
const email = "reactdev@iniceptia.ai"
const password = "4eSBbHqiCTPdBCTj"

async function login() {
  try {
    const response = await axios({
      method: 'post',
      url: `${baseUrl}/api/v1/login/`,
      data: {
        email, 
        password,
      },
    })
    return response.data.token
  } catch (error) {
    console.error(error)
  }
}

async function getClients( token: string ) {
  try {
    const response = await axios.get(`${baseUrl}/api/v1/clients/`, { 
      headers: {
        Authorization: `JWT ${token}`
      },
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

async function getInboundCase( 
  token: string, 
  local_updated__date__gte: string, 
  local_updated__date__lte: string,
  ) {
  const params = {
    client: 28, 
    local_updated__date__gte, 
    local_updated__date__lte,
  }
  try {
    const response = await axios.get(`${baseUrl}/api/v1/inbound-case/`, { 
      headers: {
        Authorization: `JWT ${token}`
      },
      params,
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export { login, getClients, getInboundCase }