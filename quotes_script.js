// Quotes Array

var quotes = [
  "Computer Science is embarrassed by the computer - Alan Perlis",
  "Computer science is one of the worst things that ever happened to either computers or to science - Neil Gershenfeld",
  "You could get an entire computer science education for free right now - Sebastian Thrun",
  "I like to think of it as this new field. Instead of computer science, it's going to be virtual science - Brendan Iribe",
  "I never took a computer science course in college, because then it was a thing you just learned on your own - Mitchel Resnick",
  "Computer science is no more about computers than astronomy is about telescopes - Edsger Dijkstra",
  "I shopped at J. Crew in high school, I studied computer science. I was a nerd-nerd, now I'm a music-nerd - Mayer Hawthorne",
  "It should be mandatory that you understand computer science - will.i.am"
  ]

// function for random  Array

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};
