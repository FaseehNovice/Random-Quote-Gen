const quotes = [
    "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.",
    "To go wrong in one's own way is better than to go right in someone else's",
    "What is hell? I maintain that it is the suffering of being unable to love.s",
    "I say let the world go to hell, but I should always have my tea.",
    "But how could you live and have no story to tell?",
    "Man only likes to count his troubles; he doesn't calculate his happiness.",
    "It takes something more than intelligence to act intelligently.",
    "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
    "The soul is healed by being with children.",
    "Your worst sin is that you have destroyed and betrayed yourself for nothing.",
];

const para = document.getElementById("quote");

function generateNumber(){
    return Math.floor(Math.random() * quotes.length);
}
let prevNum = generateNumber();

function generateQuote(){
    
    let quoteNumber = generateNumber();
    
    if (quoteNumber === prevNum) {
        quoteNumber = (quoteNumber + 1) % quotes.length;
    }
    
    para.textContent = quotes[quoteNumber];
    prevNum = quoteNumber
}