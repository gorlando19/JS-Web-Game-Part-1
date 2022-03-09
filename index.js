//declaring variables
let hRuns = 0
let vRuns = 0
let hPos = 0
let vPos = 0
let k=0

let backgroundPics = [
    {pic:'assets/grass.png', backgroundPercent: 55},
    {pic:'assets/sky.png', backgroundPercent: 45}
]

//declaring functions
function newImage(image, hPos, vPos) {
    let newElement = document.createElement('img')
    newElement.src = image
    newElement.style.position = 'fixed'
    newElement.style.left = hPos
    newElement.style.bottom = vPos
    document.body.append(newElement)
    return newElement
}

function newItem(image, hPos, vPos){
    let newElement = newImage(image, hPos, vPos)
    newElement.addEventListener('dblclick', function() {
        newElement.remove()
    })
}

//setting up background
hRuns = Math.round(window.innerWidth/100)
while (k<backgroundPics.length) {
    vRuns = Math.round(window.innerHeight/100)*backgroundPics[k].backgroundPercent/100
    for (let i=0; i<= vRuns; i++) {
        hPos = 0
        for (let j=0; j <=hRuns; j++) {
            console.log('vPos' + vPos + ' - hPos' + hPos)
            newImage(backgroundPics[k].pic, hPos + 'px',vPos + 'px' )  
            hPos+=100  
        }
        vPos+=100
    }
    k++
    console.log(k)
}

//running code
newImage('assets/green-character.gif', '100px','100px')
newImage('assets/pine-tree.png', '450px','200px')
newImage('assets/tree.png', '200px','300px')
newImage('assets/pillar.png', '350px','100px')

newItem('assets/crate.png', '150px','200px')
newItem('assets/well.png', '500px','425px')
newItem('assets/sword.png', '500px','405px')
newItem('assets/sheild.png', '165px','185px')
newItem('assets/staff.png', '600px','100px')