let Fposx = 25
let Fposy = 125
let Rposx = 325
let Rposy = 225

setInterval(() => {
    Rposy = random(0, 622)
    Rposx = random(0, 1331)
    $('#run').css("top", `${Rposy}px`)
    $('#run').css("left", `${Rposx}px`)
    $('.positionR').html(`Cord Y : ${Rposy},Cord X : ${Rposy}`)
        
    }, 250);

const random = (a, b) => Math.floor(Math.random() * b) + a;

$(document).on("mousemove", (e) => {
    $('.cursor').html(`Cursor : Cord Y : ${e.clientY},Cord X : ${e.clientX}`)

    Fposy = e.clientY - 25
    Fposx = e.clientX - 25

    $('#follow').css("top", `${Fposy}px`)
    $('#follow').css("left", `${Fposx}px`)


    $('.positionF').html(`Cord Y : ${Fposy},Cord X : ${Fposy}`)
    
    
})

