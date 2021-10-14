let btn = document.getElementById("btn1");
let output = document.getElementById("output");
let quotes = [
  '"Do your best, God will do the rest ',
  '"The roots of education is bitter but the fruits are sweet',
  '"God helps those who helps themselves',
  '"Tommorow will never come, Do it today',
  '"If you have a dream and a will to achieve it, nobody can stop you',
  '"You are best known to you, nobody can know you more then you',
  '"A person who have never failed in his life has never learned anything new',
  '"Success comes from failure, if you learn from your mistakes',
  '"Nobody in this world is honest to you except your parents',
  '"Never be overconfident.',
];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML = randomQuote;
})
