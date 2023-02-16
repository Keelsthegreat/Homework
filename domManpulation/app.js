

// const changeSunny = ()=>{
//     let firstpic = document.querySelector('.sImg')
//     firstpic.setAttribute('src', weather.sunny.url )
//     // -----------------------------------------------
//     // targetBlue
//     let blue = document.querySelector('.tempContainer')
//     // append Temp
//     blue.innerHTML = weather.sunny.temp

//     // target green 
//     let green = document.querySelector('.txt')

//     // append text
//     green.innerHTML = weather.sunny.text

// }


// const changeRainy = ()=>{
//     let firstpic = document.querySelector('.sImg')
//     firstpic.setAttribute('src', weather.rainy.url )
//     // -----------------------------------------------
//     // targetBlue
//     let blue = document.querySelector('.tempContainer')
//     // append Temp
//     blue.innerHTML = weather.rainy.temp

//     // target green 
//     let green = document.querySelector('.txt')

//     // append text
//     green.innerHTML = weather.rainy.text


// }

// const changeSnowy = ()=>{
//     let firstpic = document.querySelector('.sImg')
//     firstpic.setAttribute('src', weather.snowy.url )
//     // -----------------------------------------------
//     // targetBlue
//     let blue = document.querySelector('.tempContainer')
//     // append Temp
//     blue.innerHTML = weather.snowy.temp

//     // target green 
//     let green = document.querySelector('.txt')

//     // append text
//     green.innerHTML = weather.snowy.text


// }

// const changeDusty = ()=>{
//     let firstpic = document.querySelector('.sImg')
//     firstpic.setAttribute('src', weather.dusty.url )
//     // -----------------------------------------------
//     // targetBlue
//     let blue = document.querySelector('.tempContainer')
//     // append Temp
//     blue.innerHTML = weather.dusty.temp

//     // target green 
//     let green = document.querySelector('.txt')

//     // append text
//     green.innerHTML = weather.dusty.text


// }

pokemon = {
    altaria:{
        url:'https://giffiles.alphacoders.com/212/212767.gif',
        type:'Dragon/Flying',
        info:'This Pokémon catches updrafts with its buoyant wings and soars way up into the wild blue yonder. Altaria dances and wheels through the sky among billowing, cotton-like clouds. By singing melodies in its crystal-clear voice, this Pokémon makes its listeners experience dreamy wonderment.',
    },
    sylveon: {
        url:'https://i.pinimg.com/originals/87/eb/f7/87ebf774eca20c3a0fa81bfb37823825.gif',
        type:'Fairy',
        info:'Sylveon cuts an elegant figure as it dances lightly around, feelers fluttering, but its piercing moves aim straight for its opponents weak spots.'
    },
    ponyta: {
    url:'https://thumbs.gfycat.com/FrayedHandmadeCockroach-size_restricted.gif',
    type:'Fire',
     info:'Its hooves are 10 times harder than diamonds.',
    },
    cherrim: {
        url:'https://64.media.tumblr.com/7a2117703e1d84518eafc5e91d186b68/tumblr_nvpe6ydovD1scncwdo1_540.gif',
        type:'Grass',
        info:'If it senses strong sunlight, it opens its folded petals to absorb the suns rays with its whole body.',
    } 
}


const altariaFacts = ()=> {
    let firstPkmn = document.querySelector ('.trPic')
    firstPkmn.setAttribute('src', pokemon.altaria.url)

    //target next div, append 
    let firstPkmnType = document.querySelector ('.topRow2')
    firstPkmnType.innerHTML= pokemon.altaria.type
    //target last div at bottom
    let firstPkmnInfo = document.querySelector ('.txt')
    firstPkmnInfo.innerHTML = pokemon.altaria.info
}

const sylveonFacts = ()=> {
    let secondPkmn = document.querySelector ('.trPic')
    secondPkmn.setAttribute('src', pokemon.sylveon.url)
    // target next div, append 
    let secondPkmnType = document.querySelector ('.topRow2')
    secondPkmnType.innerHTML = pokemon.sylveon.type
    //target last div at bottom 
    let secondPkmnInfo = document.querySelector ('.txt')
    secondPkmnInfo.innerHTML = pokemon.sylveon.info
      
}

const ponytaFacts = ()=> {
    let thirdPkmn = document.querySelector ('.trPic')
    thirdPkmn.setAttribute('src', pokemon.ponyta.url)
    // target next div, append 
    let thirdPkmnType = document.querySelector ('.topRow2')
    thirdPkmnType.innerHTML = pokemon.ponyta.type
    //target last div at bottom 
    let thirdPkmnInfo = document.querySelector ('.txt')
    thirdPkmnInfo.innerHTML = pokemon.ponyta.info
} 

const cherrimFacts = ()=> {
    let fourthPkmn = document.querySelector ('.trPic')
    fourthPkmn.setAttribute('src', pokemon.cherrim.url)
    // target next div, append 
    let fourthPkmnType = document.querySelector ('.topRow2')
    fourthPkmnType.innerHTML = pokemon.cherrim.type
    //target last div at bottom 
    let fourthPkmnInfo = document.querySelector ('.txt')
    fourthPkmnInfo.innerHTML = pokemon.cherrim.info
}