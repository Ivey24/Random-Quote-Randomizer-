let quotes = [
    'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
    'The way to get started is to quit talking and begin doing. -Walt Disney',
    'Your time is limited, so dont waste it living someone else life. Dont be trapped by dogma which is living with the results of other peoples thinking. -Steve Jobs',
    'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt',
    'When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt',
    'Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead',
    'Dont judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson',
    'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
    'Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin',
    'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller',
]



// document.getElementById("btn").document.addEventListener('click',function(){

// })
function random(){
    var random = Math.floor(Math.random()* (quotes.length));
    document.getElementById('quote').innerHTML = quotes[random];
    console.log("Working");
}