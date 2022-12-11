const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prevbtn = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1
let progressValue = 0
let progressDiff = 30
// progress.style.width = `${0}%`
const users = [
    {
        name: 'Musa',
        team: 'manu'
    },
    {
        name: 'him',
        team: 'tot'
    }
]
const {name, team} = users[1]
console.log(name)
next.addEventListener('click', () => {
    currentActive++
     
    // if(currentActive > circles.length){
    //     currentActive = circles.length
    // }
    // else{  
    //     updateProgress();
    // }
    currentActive > circles.length ? currentActive = circles.length : updateProgress(progressDiff);

    if(currentActive >= circles.length){
        next.disabled = true;
    }
    else{
        prevbtn.disabled = false
    }
    
    update()
   
})

prevbtn.addEventListener('click',()=>{
    currentActive--
    console.log(currentActive)
    // currentActive <= 1 ? prevbtn.disabled = true : null
    if(currentActive < 1){
        currentActive = 1   
    }
    else{
       
        updateProgress(-progressDiff);
        next.disabled = false;
    }
    update()

})

function update(){
    circles.forEach((circle, idx)=>{
        if(idx < currentActive){
            circle.classList.add('active')
            
        }
        else{
            circle.classList.remove('active')
        }
})
}

function updateProgress(value){
    progressValue += value; 
    progress.style.width = `${progressValue}%`;
}
