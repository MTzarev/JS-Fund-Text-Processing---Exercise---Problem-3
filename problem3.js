function problem3 (text, word){
while (text.includes(word)){
    text = text.replace(word, `*`.repeat(word.length));
}
    console.log(text);
}
problem3('A small sentence with some words', 'small');
problem3('Find the hidden word', 'hidden');