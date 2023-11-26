const score_input = document.getElementById("level-input");
const multi_btn = document.getElementById("multi");
const com_btn = document.getElementById("com");
const cells_input = document.querySelectorAll("#cells-input");
const start_btn = document.getElementById("h2");
const play = document.querySelectorAll("p")
let num_of_play = 0

// add_btn.addEventListener("click", function(){
//     if(level_input.value < 5){
//         ++level_input.value
//     }
    
// });

// sub_btn.addEventListener("click", function(){
//     if(level_input.value > 1){
//         --level_input.value
//     }
    
// });
let multi_ply = false

let human_score = 0
let computer_score = 0

let list_of_cells =[0,1,2,3,4,5,6,7,8]
let player_1 = true
let player_2 = false

let computer = false

multi_btn.addEventListener("click", ()=>{
    document.getElementById("play").style.display = "none"
    document.getElementById("layer").style.display= "block"
    cells_input.forEach(e =>{
        e.disabled = false
        e.value = "" 
        })
        list_of_cells =[0,1,2,3,4,5,6,7,8]
        num_of_play = 0
        score_input.value = ""
        computer_score = 0
        human_score = 0
        multi_ply = true
})

com_btn.addEventListener("click", ()=>{
    document.getElementById("play").style.display = "none"
    document.getElementById("layer").style.display= "block"
    cells_input.forEach(e =>{
        e.disabled = false
        e.value = "" 
        })
        list_of_cells =[0,1,2,3,4,5,6,7,8]
        num_of_play = 0
        score_input.value = ""
        computer_score = 0
        human_score = 0
        multi_ply = false
        player_1= true
        player_2 = false
})
cells_input.forEach((cell, index)=> cell.addEventListener("click", ()=>{

    list_of_cells = list_of_cells.filter(e=> e !== index)
    if(player_1){
        cell.value = "O";
        cell.disabled = "true";
        cell.style.color = "white"
        player_1= false
     
        ++num_of_play
        if(multi_ply){
            computer= false
        }else{
            computer = true
        }
        
    }

    if(player_2){
        cell.value = "X";
        cell.disabled = "true";
        cell.style.color = "red"
    }

    if(cells_input[0].value === "O" && cells_input[1].value === "O" && cells_input[2].value === "O"
    || cells_input[3].value === "O" && cells_input[4].value === "O" && cells_input[5].value === "O"
    || cells_input[6].value === "O" && cells_input[7].value === "O" && cells_input[8].value === "O"
    ||cells_input[3].value === "O" && cells_input[6].value === "O" && cells_input[0].value === "O"
    || cells_input[1].value === "O" && cells_input[4].value === "O" && cells_input[7].value === "O"
    || cells_input[2].value === "O" && cells_input[5].value === "O" && cells_input[8].value === "O"
    || cells_input[0].value === "O" && cells_input[4].value === "O" && cells_input[8].value === "O"
    || cells_input[2].value === "O" && cells_input[4].value === "O" && cells_input[6].value === "O" ) {
        
       if(cells_input[0].value === "O" && cells_input[1].value === "O" && cells_input[2].value === "O"){
            cells_input[0].style.backgroundColor = "green"
            cells_input[1].style.backgroundColor = "green"
            cells_input[2].style.backgroundColor = "green"
        }
        if(cells_input[3].value === "O" && cells_input[4].value === "O" && cells_input[5].value === "O"){
            cells_input[3].style.backgroundColor = "green"
            cells_input[4].style.backgroundColor = "green"
            cells_input[5].style.backgroundColor = "green"
        }
        if(cells_input[6].value === "O" && cells_input[7].value === "O" && cells_input[8].value === "O"){
            cells_input[6].style.backgroundColor = "green"
            cells_input[7].style.backgroundColor = "green"
            cells_input[8].style.backgroundColor = "green"
        }
        if(cells_input[3].value === "O" && cells_input[6].value === "O" && cells_input[0].value === "O"){
            cells_input[6].style.backgroundColor = "green"
            cells_input[3].style.backgroundColor = "green"
            cells_input[0].style.backgroundColor = "green"
        }
        if(cells_input[1].value === "O" && cells_input[4].value === "O" && cells_input[7].value === "O"){
            cells_input[1].style.backgroundColor = "green"
            cells_input[4].style.backgroundColor = "green"
            cells_input[7].style.backgroundColor = "green"
        }
        if(cells_input[2].value === "O" && cells_input[5].value === "O" && cells_input[8].value === "O"){
            cells_input[2].style.backgroundColor = "green"
            cells_input[5].style.backgroundColor = "green"
            cells_input[8].style.backgroundColor = "green"
        }
        if(cells_input[0].value === "O" && cells_input[4].value === "O" && cells_input[8].value === "O"){
            cells_input[0].style.backgroundColor = "green"
            cells_input[4].style.backgroundColor = "green"
            cells_input[8].style.backgroundColor = "green"
        }
        if(cells_input[2].value === "O" && cells_input[4].value === "O" && cells_input[6].value === "O"){
            cells_input[2].style.backgroundColor = "green"
            cells_input[4].style.backgroundColor = "green"
            cells_input[6].style.backgroundColor = "green"
        }

        setTimeout(()=>{
            for(let i = 0; i < 9; i++){
                cells_input[i].style.backgroundColor = " rgb(25, 25, 66)"
            }
           
        },2000)
        
       computer = false
       player_1 = true
       num_of_play = 0
       ++human_score
        setTimeout(()=>{
            if(multi_ply){
                document.getElementById("game-result").textContent = "PLAYER 1 WON !!!"
                document.getElementById("game-result").style.display = "block"
            }else{
                document.getElementById("game-result").textContent = "YOU WON !!!"
                document.getElementById("game-result").style.display = "block"
            }
            

            cells_input.forEach(e =>{
                e.disabled = false
                e.value = "" 
                })
                list_of_cells =[0,1,2,3,4,5,6,7,8]
                num_of_play = 0
                score_input.value = `${human_score} - ${computer_score}`
                
        }, 500)
      
       setTimeout(()=>{
        document.getElementById("game-result").style.display = "none"
       }
       , 2000
       )
       
      
       
   }

   if(num_of_play >= 9 && !(cells_input[0].value === "O" && cells_input[1].value === "O" && cells_input[2].value === "O"
   || cells_input[3].value === "O" && cells_input[4].value === "O" && cells_input[5].value === "O"
   || cells_input[6].value === "O" && cells_input[7].value === "O" && cells_input[8].value === "O"
   ||cells_input[3].value === "O" && cells_input[6].value === "O" && cells_input[0].value === "O"
   || cells_input[1].value === "O" && cells_input[4].value === "O" && cells_input[7].value === "O"
   || cells_input[2].value === "O" && cells_input[5].value === "O" && cells_input[8].value === "O"
   || cells_input[0].value === "O" && cells_input[4].value === "O" && cells_input[8].value === "O"
   || cells_input[2].value === "O" && cells_input[4].value === "O" && cells_input[6].value === "O" ) ){

    setTimeout(()=>{
        document.getElementById("game-result").textContent = "DRAW!!!"
        document.getElementById("game-result").style.display = "block"

        player_1 = true
    
        cells_input.forEach(e =>{
         e.disabled = false
         e.value = "" 
         })
         list_of_cells =[0,1,2,3,4,5,6,7,8]
         num_of_play = 0
        computer = false
    
    },500)
   
    setTimeout(()=>{
     document.getElementById("game-result").style.display = "none"
    }
    , 2000
    )
   
   }
   
   
if(computer){
    let random_num = Math.floor(Math.random() * list_of_cells.length);
    computer_value = list_of_cells[random_num]
    cells_input[computer_value].value = "X"
     cells_input[computer_value].disabled = "true"
    list_of_cells = list_of_cells.filter(e => e !== computer_value)
    player_1 = true
    ++num_of_play
    cells_input[computer_value].style.color = "yellow"
}

if(cells_input[0].value === "X" && cells_input[1].value === "X" && cells_input[2].value === "X"
 || cells_input[3].value === "X" && cells_input[4].value === "X" && cells_input[5].value === "X"
 || cells_input[6].value === "X" && cells_input[7].value === "X" && cells_input[8].value === "X"
 ||cells_input[3].value === "X" && cells_input[6].value === "X" && cells_input[0].value === "X"
 || cells_input[1].value === "X" && cells_input[4].value === "X" && cells_input[7].value === "X"
 || cells_input[2].value === "X" && cells_input[5].value === "X" && cells_input[8].value === "X"
 || cells_input[0].value === "X" && cells_input[4].value === "X" && cells_input[8].value === "X"
 || cells_input[2].value === "X" && cells_input[4].value === "X" && cells_input[6].value === "X" ) {

    if(cells_input[0].value === "X" && cells_input[1].value === "X" && cells_input[2].value === "X"){
        cells_input[0].style.backgroundColor = "green"
        cells_input[1].style.backgroundColor = "green"
        cells_input[2].style.backgroundColor = "green"
    }
    if(cells_input[3].value === "X" && cells_input[4].value === "X" && cells_input[5].value === "X"){
        cells_input[3].style.backgroundColor = "green"
        cells_input[4].style.backgroundColor = "green"
        cells_input[5].style.backgroundColor = "green"
    }
    if(cells_input[6].value === "X" && cells_input[7].value === "X" && cells_input[8].value === "X"){
        cells_input[6].style.backgroundColor = "green"
        cells_input[7].style.backgroundColor = "green"
        cells_input[8].style.backgroundColor = "green"
    }
    if(cells_input[3].value === "X" && cells_input[6].value === "X" && cells_input[0].value === "X"){
        cells_input[6].style.backgroundColor = "green"
        cells_input[3].style.backgroundColor = "green"
        cells_input[0].style.backgroundColor = "green"
    }
    if(cells_input[1].value === "X" && cells_input[4].value === "X" && cells_input[7].value === "X"){
        cells_input[1].style.backgroundColor = "green"
        cells_input[4].style.backgroundColor = "green"
        cells_input[7].style.backgroundColor = "green"
    }
    if(cells_input[2].value === "X" && cells_input[5].value === "X" && cells_input[8].value === "X"){
        cells_input[2].style.backgroundColor = "green"
        cells_input[5].style.backgroundColor = "green"
        cells_input[8].style.backgroundColor = "green"
    }
    if(cells_input[0].value === "X" && cells_input[4].value === "X" && cells_input[8].value === "X"){
        cells_input[0].style.backgroundColor = "green"
        cells_input[4].style.backgroundColor = "green"
        cells_input[8].style.backgroundColor = "green"
    }
    if(cells_input[2].value === "X" && cells_input[4].value === "X" && cells_input[6].value === "X"){
        cells_input[2].style.backgroundColor = "green"
        cells_input[4].style.backgroundColor = "green"
        cells_input[6].style.backgroundColor = "green"
    }

    setTimeout(()=>{
        for(let i = 0; i < 9; i++){
            cells_input[i].style.backgroundColor = " rgb(25, 25, 66)"
        }
       
    },2000)

   
    setTimeout(()=>{
        num_of_play = 0
        ++computer_score
        if(multi_ply){
            document.getElementById("game-result").textContent = "PLAYER 2 WON !!!"
            document.getElementById("game-result").style.display = "block"
        }else{
            document.getElementById("game-result").textContent = "YOU LOST !!!"
            document.getElementById("game-result").style.display = "block"
        }
       

        cells_input.forEach(e =>{
            e.disabled = false
            e.value = "" 
            })
            list_of_cells =[0,1,2,3,4,5,6,7,8]
            score_input.value = `${human_score} - ${computer_score}`
    },500)
   
    setTimeout(()=>{
     document.getElementById("game-result").style.display = "none"
    }
    , 2000
    )
    
    
}
if(multi_ply){
    player_2 = !player_2
    player_1 = !player_1
}

}))

start_btn.addEventListener("click", ()=>{
    document.getElementById("play").style.display = "block"
    document.getElementById("layer").style.display= "none"
  
})


document.getElementById("button").addEventListener("click", ()=>{
    document.getElementById("play").style.display = "none"
    document.getElementById("layer").style.display= "block"
}
)





// Array.from(cells_input).slice(0,3).every(v=> v.value === "0")

