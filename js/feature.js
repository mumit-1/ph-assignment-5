getId('donation-btn').addEventListener('click',function(){
    getWhatYouWant('donation')
})
getId('blog-btn').addEventListener('click',function(){
    getWhatYouWant('blog')
})
getId('history-btn').addEventListener('click',function(){
    getWhatYouWant('history')
})

function getWhatYouWant (id){
    const displayA = getId('donation');
    const displayB = getId('history');
    const displayC = getId('blog');

    displayA.classList.add('hidden');
    displayB.classList.add('hidden');
    displayC.classList.add('hidden');

    getId(id).classList.remove('hidden')
}