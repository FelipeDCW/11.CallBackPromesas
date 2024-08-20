import { buscarHeroePorId, buscarPorIdAsync } from "./promesa.js";
import { buscarHeroePorIdPromesa } from "./callback.js";

console.log(`Inicio programa`);
const heroe = buscarHeroePorId(`5d86371f1efebc31def272e2`)
console.log(heroe);

const parrafo = document.querySelector(`#parrafo`)

parrafo.innerHTML = `ID: ${heroe.id}, name: ${heroe.name}`

console.log(`Fin programa`);
console.log(`-------------------------------------------`);

console.log(`Inicio segundo programa`);
buscarHeroePorIdPromesa(`5d86371f1efebc31def272e2`).then((heroe2) =>{
    console.log(heroe2)
    const parrafo2 = document.querySelector(`#parrafo2`)
    parrafo2.innerHTML = `ID: ${heroe2.id}, name: ${heroe2.name}`

} ).catch((error)=>{
    const parrafo2 = document.querySelector(`#parrafo2`)
    parrafo2.innerHTML = error
})

console.log(`Fin segundo programa`);
console.log(`-------------------------------------------`);

console.log(`Inicio tercer programa`);
buscarPorIdAsync(`15d86371f1efebc31def272e2`).then((heroe3)=>{
    console.log(heroe3)
    const parrafo3 = document.querySelector(`#parrafo3`)
    parrafo3.innerHTML = `ID: ${heroe3.id}, name: ${heroe3.name}`

}).catch((error)=>{
    const parrafo3 = document.querySelector(`#parrafo3`)
    parrafo3.innerHTML = error
})
console.log(`Fin tercer programa`);
console.log(`-------------------------------------------`);

console.log(`Inicio cuarto programa`);
console.log(buscarPorIdAsync(`5d86371f1efebc31def272e2`));
console.log(`Fin  cuarto programa`);

console.log(`Inicio await cuarto programa`);
console.log(await buscarPorIdAsync(`5d86371f1efebc31def272e2`));
console.log(`Fin await cuarto programa`);

console.log(`-------------------------------------------`);
console.log(`Inicio quinto programa`);
const renderizarHeroe = async()=>{
    try {
        const heroebuscado = await buscarPorIdAsync(`15d86371f1efebc31def272e2`)
        console.log(heroebuscado);    
    } catch (error) {
        console.log(error + ` error trycatch`)
    }
    
}

renderizarHeroe()
console.log(`Fin quinto programa`);














