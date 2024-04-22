let ready = document.getElementById("f_play");
let second = document.getElementById("s_container");
let first = document.getElementById("f_container");
let third = document.getElementById("t_container");
let p1 = document.getElementById("para1");
let p2 = document.getElementById("para2");
let a1 = document.getElementById("b1");
let a2 = document.getElementById("b2");
let a3 = document.getElementById("b3");
let a4 = document.getElementById("b4");
let a5 = document.getElementById("b5");
let a6 = document.getElementById("b6");
let a7 = document.getElementById("b7");
let a8 = document.getElementById("b8");
let a9 = document.getElementById("b9");
let bx = document.getElementsByClassName("box");
let hs = document.getElementById("history");
let pl1 = document.getElementById("player_1");
let pl2 = document.getElementById("player_2");
let rs = document.getElementById("rule");
let first_turn;
let st = [-5,-5,-5,-5,-5,-5,-5,-5,-5];
let grid = st;





function addhide(){
    first.classList.add("hide");
    hs.classList.add("hide");
    rs.classList.add("hide");
    pl1.classList.remove("hide");
    pl2.classList.remove("hide");
}

function tossForFirst(){
    let splay = document.getElementById("s_play");
    var randomNumber = Math.floor(Math.random() * 2);
    console.log(randomNumber);
    if(randomNumber == 1){
        first_turn = 1;
        document.getElementById("toss_win").innerHTML = "KABIR HAS FIRST TURN__";
    }
    else{
        first_turn = 0;
        document.getElementById("toss_win").innerHTML = "PARTH HAS FIRST TURN__";
    }
    splay.classList.remove("hide");
}

function playTheGame(){    
    second.classList.add("hide");
    adjustPointer();
}

function adjustPointer(){
    if(first_turn == 0){
        p1.classList.remove("tc");
        p2.classList.add("tc");
    }
    else{
        p2.classList.remove("tc");
        p1.classList.add("tc");
    }
}

function firstBox(){
    if(grid[0] == -5){
        grid[0] = first_turn;
        if(first_turn == 1){
            let kabir = document.createElement("img");
            kabir.src = "player-01.jpg";
            b1.appendChild(kabir);
        }
        else{
            let Parth = document.createElement("img");
            Parth.src = "player-02.jpg";
            b1.appendChild(Parth);
        }
        handleclick();
    }
}

function secondBox(){
    if(grid[1] == -5){
        grid[1] = first_turn;
        if(first_turn == 1){
            let kabir = document.createElement("img");
            kabir.src = "player-01.jpg";
            b2.appendChild(kabir);
        
        }
        else{
            let Parth = document.createElement("img");
            Parth.src = "player-02.jpg";
            b2.appendChild(Parth);
            
        }
        handleclick();
    }
}
function thirdBox(){
    if(grid[2] == -5){
        grid[2] = first_turn;
        if(first_turn == 1){
            let kabir = document.createElement("img");
            kabir.src = "player-01.jpg";
            b3.appendChild(kabir);
        }
        else{
            let Parth = document.createElement("img");
            Parth.src = "player-02.jpg";
            b3.appendChild(Parth);
        }
        handleclick();
    }
    
}

function fourthBox(){
    if(grid[3] == -5){
        grid[3] = first_turn;
        if(first_turn == 1){
            let kabir = document.createElement("img");
            kabir.src = "player-01.jpg";
            b4.appendChild(kabir);
        }
        else{
            let Parth = document.createElement("img");
            Parth.src = "player-02.jpg";
            b4.appendChild(Parth);
        }
        handleclick();
    }
    
}

function fifthBox(){
    if(grid[4] == -5){
        grid[4] = first_turn;
        if(first_turn == 1){
            let kabir = document.createElement("img");
            kabir.src = "player-01.jpg";
            b5.appendChild(kabir);
        }
        else{
            let Parth = document.createElement("img");
            Parth.src = "player-02.jpg";
            b5.appendChild(Parth);
        }
        handleclick();
    }
    
}

function sixthBox(){
    if(grid[5] == -5){
        grid[5] = first_turn;
        if(first_turn == 1){
            let kabir = document.createElement("img");
            kabir.src = "player-01.jpg";
            b6.appendChild(kabir);
        }
        else{
            let Parth = document.createElement("img");
            Parth.src = "player-02.jpg";
            b6.appendChild(Parth);
        }
        handleclick();
    }
    
}

function sevenBox(){
    if(grid[6] == -5){
        grid[6] = first_turn;
        if(first_turn == 1){
            let kabir = document.createElement("img");
            kabir.src = "player-01.jpg";
            b7.appendChild(kabir);
        }
        else{
            let Parth = document.createElement("img");
            Parth.src = "player-02.jpg";
            b7.appendChild(Parth);
        }
        handleclick();
    }
    
}

function eightBox(){
    if(grid[7] == -5){
        grid[7] = first_turn;
        if(first_turn == 1){
            let kabir = document.createElement("img");
            kabir.src = "player-01.jpg";
            b8.appendChild(kabir);
        }
        else{
            let Parth = document.createElement("img");
            Parth.src = "player-02.jpg";
            b8.appendChild(Parth);
        }
        handleclick();
    }
    
}

function ninethBox(){
    if(grid[8] == -5){
        grid[8] = first_turn;
        if(first_turn == 1){
            let kabir = document.createElement("img");
            kabir.src = "player-01.jpg";
            b9.appendChild(kabir);
        }
        else{
            let Parth = document.createElement("img");
            Parth.src = "player-02.jpg";
            b9.appendChild(Parth);
        }
        handleclick();
    }
    
}



function handleclick(){
    if(first_turn == 0){
        first_turn = 1;
    }
    else{
        first_turn = 0;
    }
    adjustPointer();
    checkWinner();
    let x = 0;
    grid.forEach(function(i) {
        if(i == -5){
            x = x+1;
        }
    });
    console.log(grid);
    if(x == 0){
        addendGame();
    }
}
function checkWinner(){
    let a = grid[0] + grid[1] + grid[2];
    let b = grid[0] + grid[3] + grid[6];
    let c = grid[0] + grid[4] + grid[8];
    let d = grid[3] + grid[4] + grid[5];
    let e = grid[2] + grid[4] + grid[6];
    let f = grid[6] + grid[7] + grid[8];
    let g = grid[1] + grid[4] + grid[7];
    let h = grid[2] + grid[5] + grid[8];
    if(a == 3 || b == 3 || c == 3 || d == 3 || e == 3 || f == 3 || g == 3 || h == 3){
        document.getElementById("endwinner").innerHTML = "KABIR WIN__";
        addendGame();
    }
    else if(a == 0 || b == 0 || c == 0 || d == 0 || e == 0 || f == 0 || g == 0 || h == 0){
        document.getElementById("endwinner").innerHTML = "PARTH WIN__";
        addendGame();
    }

}

function addendGame(){
    third.classList.add("hide");
}









