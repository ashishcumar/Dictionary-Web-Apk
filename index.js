let container = document.querySelector('.container')
let searchInput = container.querySelector('input')
infotext = container.querySelector('.info-text')
synonyms = container.querySelector('.synonyms .list')
sound = container.querySelector(".word i")
let audio;

function Data(result,word){
    if(result.title){
        infotext.innerHTML=`can't find the meaning of <Span>'${word}'</span>, Please try to search again`
    }
    else{
        console.log(result)
        container.classList.add('active')
        let definitions = result[0].meanings[0].definitions[0];
        phonetics =`${result[0].meanings[0].partOfSpeech} :- ${result[0].phonetics[0].text}`
        audio = new Audio(result[0].phonetics[0].audio)

        
        document.querySelector('.word p').innerText = result[0].word;
        document.querySelector('.word span').innerText = phonetics;
        document.querySelector('.Meaning span').innerText = definitions.definition;
 
}
}

function fetchmeaning(word){
    infotext.style.color = "#000"
infotext.innerHTML = `Searching the meaning of <span>"${word}"</span>`
let url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
fetch(url).then(res => res.json()).then(result =>  Data(result, word))
}


searchInput.addEventListener('keyup', e => {
    if(e.key === "Enter"  && e.target.value){
        fetchmeaning(e.target.value)
        
    }
})

sound.addEventListener('click',() =>{
    audio.play()
})