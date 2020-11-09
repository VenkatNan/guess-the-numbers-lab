const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuess: [],
  //empty start variables
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    let guess = NaN;
    while(guess !== this.secretNum) {
      guess = this.getGuess();
      this.prevGuess.push(guess);
      this.render(guess);
      if (guess === this.secretNum) return;
    }
  },
 
  getGuess: function() {
      let guess = NaN;
      while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
        guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `));
      }
      return guess;
    },

  render: function(guess) {
    let msg = (guess === this.secretNum) ?
      `You Got it! It took you: ${this.prevGuess.length} guesses!
      ${console.log(this.prevGuess)};
      `
      
    :
      `
      Your guess is too ${guess > this.secretNum ? 'high' : 'low'}
      Previous guesses: ${this.prevGuess.join(', ')}
      `
    ;
    alert(msg);
  }
};