document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.jikan.moe/v4/anime?q=${choice}&sfw`
  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.data[0]) 
        data.data[0].genres.forEach( obj => {
          document.querySelector('.GE').innerText = obj.name
        })
       document.querySelector('.DE').innerText = data.data[0].synopsis
       document.querySelector('img').src = data.data[0].images.jpg.image_url
    
      })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// const li = document.createElement('li')
//             li.textContent = obj.name
//             document.querySelector('ul').appendChild(li)
//             document.querySelector('.GE').innerText = obj.name