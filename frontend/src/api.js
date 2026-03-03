const BASE_URL = "http://localhost:8787"

export const makeRequest = async (URL) => {
  try {
    const response = await fetch(`${BASE_URL}/${URL}`)

    if(!response.ok){
      throw new Error(`HTTP error. Status ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("API call failed" + error)
    throw error
  }
}