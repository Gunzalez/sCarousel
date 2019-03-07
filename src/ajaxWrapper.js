
export function getPhotos(url){
    return fetch(url)
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
                console.log(response.statusText)
            }
        })
        .then(data => {
            return data
        })
        .catch(error => {
            console.log(error);
        });
}