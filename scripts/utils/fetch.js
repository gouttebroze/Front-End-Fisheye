async function getPhotographers() {
  const response = await fetch('./data/photographers.json')
  const data = await response.json()
  // console.log(data); 
  return data.photographers;   
}

async function getMedias() {
  const response = await fetch('./data/photographers.json')
  const data = await response.json()
  // console.log(data.media); 
  return data.media;   
}