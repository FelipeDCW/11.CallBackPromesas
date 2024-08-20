import { heroes } from "./datos.js"

const buscarHeroePorId = (id) =>{
    const heroebuscado = heroes.find((heroe) =>{
        return heroe.id === id
    })  
    return heroebuscado
}

const buscarPorIdAsync = async(id)=>{
    const heroebuscado = heroes.find((heroe) =>{
        return heroe.id === id
    })
    if(heroebuscado){
        return heroebuscado
    }
    throw `El heroe buscado ${id} no existe`
}


export{
    buscarHeroePorId,
    buscarPorIdAsync
}