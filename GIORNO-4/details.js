const imageId = new URLSearchParams(location.search).get('imageId')




fetch("https://api.pexels.com/v1/photos/" + imageId, {
        headers: {
            Authorization: 'dLmmKrIm1JvgQuoEem69yUPUyCXV2xlJyvP7CneHJkB194ElMAiBHCZo'
        },
    })
    .then((response) => {
        console.log('response pexels', response)
        if (response.ok)  {
           return response.json()
        } else {
            throw new Error('Error pexels')

        }


    
    } )
    .then(data => {
        console.log(data)
        
            })
       

    .catch((err) => {
        console.log('ERRORE', err)
    } )