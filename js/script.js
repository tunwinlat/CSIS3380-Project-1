const getRandomQuote = function() {
    const quotes = [
    {
        quote: "Technology is best when it brings people together.",
        author: "-Matt Mullenweg"
    },
    {
        quote: "It has become appallingly obvious that our technology has exceeded our humanity.",
        author: "-Albert Einstein"
    },
    {
        quote: "It is only when they go wrong that machines remind you how powerful they are.",
        author: "-Clive James"
    },
    {
        quote: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
        author: "-Tim Berners-Lee"
    },
    {
        quote: "If it keeps up, man will atrophy all his limbs but the push-button finger.",
        author: "-Frank Lloyd Wright"
    },
    {
        quote: "If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.",
        author: "-Lyndon B. Johnson"
    },
    {
        quote: "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.",
        author: "-Stewart Brand"
    },
    {
        quote: "It's not a faith in technology. It's faith in people.",
        author: "-Steve Jobs"
    },
    {
        quote: "Technology is a useful servant but a dangerous master.",
        author: "-Christian Lous Lange"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[arrayIndex].quote;
    document.getElementById('source').innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    getRandomQuote();
    document.getElementById('load-quote').addEventListener('click', getRandomQuote);
}
