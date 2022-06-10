
    //The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

    

    document.querySelector('button').addEventListener('click', getFetch)

    function getFetch(){
      const date = document.querySelector('input').value
      const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    
      fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)


            document.querySelector('h2').innerText = data.title
            // checking to see if the media coming through from the data is an image or a video
            if(data.media_type === 'image') {
              document.querySelector('img').src = data.hdurl
            } else if (data.media_type === 'video') {
              document.querySelector('img').src = null
              document.querySelector('iframe').src = data.url
            }
          

            document.querySelector('h3').innerText = data.explanation
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
    }
    
  







       
    