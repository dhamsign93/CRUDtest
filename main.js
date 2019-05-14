// CRUD

// 1. llamamos nuestra libreria
const request = require ('request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

// 2. read, con endpoint "authors"

getAllAuthors = () => {
    const URI = 'authors/'
    return new Promise ((resolve, reject) =>{
        request.get (`${URL_BASE}${URI}`,(err, response, body)=>{
            const json = JSON.parse(body);
            response.statusCode === 200
            ? resolve (json)
            : reject(err);
        })
    });
}

// -- author uno por uno
const getAuthorById = (id) => {
    const URI = 'authors/';
    return new Promise ((resolve, reject)=>{
        request.get(`${URL_BASE}${URI}${id}`,(err, response, body)=>{
            const json = JSON.parse(body)
            response.statusCode === 200
            ? resolve(json)
            : reject (err);
        })
    })
}

// 3. ejecucion
// getAuthorById ('1962')
//     .then (respuesta => console.log(respuesta))
//     .catch (err => console.log(err));

// CREATE - POST
const createAuthor = (nombre, apellidos, bio, genero, edad) =>{
    const URI = 'authors/';
    const autorEnviar = {
        name : nombre,
        last_name : apellidos,
        nacionalidad: 'MX',
        biography: bio,
        gender: genero,
        age: edad
    }
    const URL = `${URL_BASE}${URI}`
    return new Promise ((resolve, reject)=>{
        request.post({
            url: URL, 
            form: autorEnviar
            },
            (err, response, body)=>{
                const json = JSON.parse(body);
                console.log(response.statusCode);
                response.statusCode == 201
                    ? resolve(json)
                    : reject(err);
            }
        )
    })
}

// EJECUCION DEL POST
// createAuthor(
//     'Daniel',
//     'Arellano',
//     'Another Author',
//     'M',
//     26
// ).then(respuesta=> console.log(respuesta))
// .catch (err => console.log(err));

// UPDATE

const updateAuthor = (nombre,apellidos, bio, genero, edad,id) =>{
    const URI = 'authors/';
    const autorNuevo = {
        name : nombre,
        last_name : apellidos,
        nacionalidad: 'MX',
        biography: bio,
        gender: genero,
        age: edad,
        
    }
    const URL = `${URL_BASE}${URI}${id}/`;
    return new Promise ((resolve,reject)=>{
        request.put({url:URL,form:autorNuevo},
            (err, response, body)=>{
                const json = JSON.parse(body);
                response.statusCode === 200
                    ? resolve(json)
                    : reject(err);
            })
    })
}

// ejecucion POST
// updateAuthor(
//     'Daniel',
//     'Medina',
//     'Tenemos actualización',
//     'M',
//     26,
//     '2588'
// )

// .then(respuesta => console.log(respuesta))
// .catch(err => console.log(err));


// DELETE

const deleteAuthor = (id) => {
    const URI = 'authors/';
    return new Promise((resolve, reject)=>{
        request.delete(`${URL_BASE}${URI}${id}/`, (err, response, body)=>{
            response.statusCode === 204
            ? resolve('borrado')
            : reject(err)
        })
    })
}

// ejecucion delete
deleteAuthor(2588)
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))