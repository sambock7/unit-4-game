$(document).ready(function(){
    // crystal values
    var crystal1 = Math.floor(Math.random()*13);
    var crystal2 = Math.floor(Math.random()*13);
    var crystal3 = Math.floor(Math.random()*13);
    var crystal4 = Math.floor(Math.random()*13);
    var score = 0;
    var win = 0;
    var lose = 0;
    
    // goal number
    var goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    
    function reset(){
        crystal1 = Math.floor(Math.random()*13);
        crystal2 = Math.floor(Math.random()*13);
        crystal3 = Math.floor(Math.random()*13);
        crystal4 = Math.floor(Math.random()*13);
        goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        score = 0;
        $("#number-to-guess").text(goal)
    }
    
    function check(){
        if (score < goal){
            console.log("keep going")
        }
    
        else if (score === goal){
            alert("YOU WON!");
            win++;
            $("#winLoss").text(win+ "-"+ lose);
            reset();
        }
    
        else if (score > goal){
            alert("You lose!");
            lose++;
            $("#winLoss").text(win+ "-" +lose);
            reset();
        }
    }
    
    //Crystal consoles
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
    console.log("goal: "+ goal);
    
    $("#number-to-guess").text(goal)
    
    $('body').on('click','#crystal1',function(){
        score += crystal1
        $("#score").text(score)
        console.log("score: " + score)
        check();
    })
    
    $('body').on('click','#crystal2',function(){
        score += crystal2
        $("#score").text(score)
        console.log("score: " + score)
        check();
    })
    
    $('body').on('click','#crystal3',function(){
        score += crystal3
        $("#score").text(score)
        console.log("score: " + score)
        check();
    })
    
    $('body').on('click','#crystal4',function(){
        score += crystal4
        $("#score").text(score)
        console.log("score: " + score)
        check();
    })
    
    })