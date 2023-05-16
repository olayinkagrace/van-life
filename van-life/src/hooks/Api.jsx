

export async function getVans(){
  const response = await fetch("http://localhost:4000/api/vans")
    if(!response.ok){
      throw{
        message:"failed to fetch vans",
        statusText: response.statusText,
        status:response.status
      }
    }
    const data = await response.json();
    return data.vans
 
}