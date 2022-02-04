

//function creatColor() {
 //   if(index>2) {
 //       let box = document.querySelector('.box')
 //       box.style.backgroundColor = colors[index] 
 //     }
 //     else {
 //         let box = document.querySelector('.box')
 //         box.style.backgroundColor = colors[index]
 //     }
 //   index++//
//}

let btr = document.createElement('div')
btr.classList = ('button')
btr.innerHTML = '<p>Изменить цвет блока</p>'

let block = document.createElement('div')
block.classList = ('box')


let body = document.querySelector('body')

body.append(btr) // добавляет в ДОМ дерево
body.append(block)


let colors = [ 'red', 'green', 'blue' ]

btr.addEventListener('click', () => creatColor())

let index = 0
function creatColor() {
    if(index>2) {
        index = 0
    let box = document.querySelector('.box')
    box.style.backgroundColor = colors[index] 
    }
    else {
        let box = document.querySelector('.box')
        box.style.backgroundColor = colors[index]
    }
    index++
}