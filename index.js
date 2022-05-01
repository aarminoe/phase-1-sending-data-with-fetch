// Add your code here
/*
function submitData(name, email) {
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify( {
            name: name,
            email: email
        })
    }
    return fetch('http://localhost:3000/users', configObj)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        console.log(data)
    })
    .catch(function (error) {
        alert('Unauthorized Access')
        return console.log(error.message)
    })
}
*/
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        console.log(data)
        document.body.innerHTML = data.id
    })
    .catch(function (error) {
        alert('Unauthorized Access')
        console.log(error['message'])
        document.body.innerHTML = error.message
    })
}
