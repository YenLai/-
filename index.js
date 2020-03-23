(function(){
    const colorPicker = document.getElementById('color-picker')
    const R_value = document.getElementById('R-value')
    const G_value = document.getElementById('G-value')
    const B_value = document.getElementById('B-value')
    const background = document.getElementById('background')
    const HEX_label = document.getElementById('HEX-label')
    let HEX ='#000000'
    let R_16 = '00', G_16 = '00', B_16 = '00';
    HEX_label.innerText = HEX
    background.setAttribute('style',`background-color: ${HEX};`)


    colorPicker.addEventListener('input',(event) => {
        if(event.target.matches('#R')){
            R_value.innerText = event.target.value
            R_16 = Number(R_value.innerText).toString(16)
            if(R_16.length === 1) R_16 = `0${R_16}`
        }
            
        else if(event.target.matches('#G')){
            G_value.innerText = event.target.value
            G_16 = Number(G_value.innerText).toString(16)
            if(G_16.length === 1) G_16 = `0${G_16}`
        }
            
        else{
            B_value.innerText = event.target.value
            B_16 = Number(B_value.innerText).toString(16)
            if(B_16.length === 1) B_16 = `0${B_16}`
        }
        HEX = `#${R_16}${G_16}${B_16}`
        HEX_label.innerText = HEX
        background.setAttribute('style',`background-color: ${HEX};`)
    })

    



})()