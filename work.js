const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volume = document.getElementById('vol')
const check = document.getElementById('check')
console.log(volume)


let audio = new Audio("tunes/a.wav")

const playtune = function (key){
    audio.src = `tunes/${key}.wav`
    audio.play()

}


pianoKeys.forEach(key =>{
    key.addEventListener('click',function (){
        playtune(key.dataset.key)
    })
    
})

const pressdKey = (e)=>{

    playtune(e.key)
    
}
document.addEventListener('keydown',pressdKey)

volume.addEventListener('input',(e) => {
     audio.volume = e.target.volume
})

check.addEventListener('click',()  => {
  pianoKeys.forEach(key => key.classList.toggle('hide'))
})
