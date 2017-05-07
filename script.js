// function getRandomArbitary(min, max)
// {
//   return Math.floor(Math.random() * (max - min) + min);
// }

new Vue({

  el: "#app",
  data: {
    yourHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false

  },
  methods: {

    startGame:function(){
      this.gameIsRunning = true;
      this.yourHealth = 100;
      this.monsterHealth = 100;
    },

    attack: function(){
      var yourDamage = this.getRandomArbitary(5,10);
      var monsterDamage = this.getRandomArbitary(1,15);
      this.yourHealth  -= monsterDamage;
      if(this.checkWin()){
        return;
      }
      this.monsterHealth -= yourDamage;
      this.checkWin();

    },

    specialAttack: function(){
      this.monsterHealth -=  this.getRandomArbitary(5,10) * 1.5;
      if(this.checkWin()){
        return;
      }
      this.yourHealth -= this.getRandomArbitary(1,15);
      this.checkWin();
    },

    heal:function(){
      this.yourHealth += this.getRandomArbitary(5,25);
      this.yourHealth -= this.getRandomArbitary(1,15);
      this.checkWin();
    },
    
    giveUp:function(){
      if(confirm('Do you want to give up?')){
        this.gameIsRunning = false;
      }else{
        return;
      }

    },
    
    checkWin:function () {
      if( this.monsterHealth <= 0) {
        if(confirm('You WON! New game?')){
          this.startGame();
        }else{
          this.gameIsRunning('false');
        }
        return true;
      }else if(this.yourHealth <= 0){
        if(confirm('You LOST! New game?')){
          this.startGame();
        }else{
          this.gameIsRunning('false');
        }
        return true;
      }
      return false;
    },

    getRandomArbitary: function(min, max){
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
  
});

