const score=JSON.parse(localStorage.getItem('score'))||{
            win:0,
            
            lose:0,
            Tie:0
        }
        updateScore()
        function playGame(playerMove){
            const computerMove=pickComputerMove()
            let result='';
            if (playerMove==='rock'){
                if(computerMove==='rock'){
                result='Tie'
                }
                else if(computerMove==='scissor'){
                    result='Win'
                }
                else{
                    result='Lose'
                }
            }
            else if(playerMove==='scissor'){
                if(computerMove==='rock'){
                result='Lose'
                }
                else if(computerMove==='scissor'){
                    result='Tie'
                }
                else{
                    result='Win'
                }
            }
            else if(playerMove==='paper'){
                if(computerMove==='rock'){
                result='Win'
                }
                else if(computerMove==='scissor'){
                    result='Lose'
                }
                else{
                    result='Tie'
                }
            }
            if(result==='Win'){
                score.win+=1
            }
            else if(result==='Lose'){
                score.lose+=1
            }
            else if(result==="Tie"){
                score.Tie+=1
            }
            localStorage.setItem('score',JSON.stringify(score))
            updateScore()
            document.querySelector('.js-result').innerHTML=result
            document.querySelector('.js-move').innerHTML=`Your Move :<img class="image2" src="${playerMove}.png" alt="Rock image">  computer move : <img class="image2" src="${computerMove}.png" alt="Rock image">`
        }
        
        function updateScore(){
        document.querySelector('.js').innerHTML=`Win :${score.win} Lose:${score.lose} Tie:${score.Tie}`
        }

        function pickComputerMove(){
            const randomnumber=Math.random()
            let computerMove='';
            if(randomnumber>=0 && randomnumber<1/3){
                computerMove='rock';
            }
            else if(randomnumber>=1/3 && randomnumber<2/3){
                computerMove='scissor'
            }
            else if(randomnumber>=2/3 && randomnumber<1){
                computerMove='paper'
            }
            return computerMove;
        }