

export async function getVans(){
  const response = await fetch("https://vanlife-564b.onrender.com/api/vans")
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
