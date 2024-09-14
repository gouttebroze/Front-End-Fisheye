/**
 * fetch photographers datas
 */
async function getPhotographers() {
  const response = await fetch('./data/photographers.json')
  const data = await response.json()
      
  console.log(data); 
  return data.photographers;   
}

/**
 * fetch media datas
 */
async function getMedias() {
  const response = await fetch('./data/photographers.json')
  const data = await response.json()
      
  console.log(data); 
  return data.media;   
}

async function displayData(media) {

  
}

async function init() {
  const photographers = await getPhotographers();
  const media = await getMedias();
}

init();