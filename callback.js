import { heroes } from "./datos.js"

const buscarHeroePorIdPromesa = (id) =>{
     const promesa = new Promise((resolve, reject) => {
        const heroebuscado = heroes.find((heroe) =>{
            return heroe.id === id
        })
        if(heroebuscado){
            resolve(heroebuscado)
        }
        reject(`heroe no encontrado`)
     })
    return promesa
}

export{
    buscarHeroePorIdPromesa
}