getId('blog-btn').addEventListener('click',function(){
    getWhatYouWant('blog');
    getId('donation-btn').classList.remove('bg-[#B4F461]');
    getId('history-btn').classList.remove('bg-[#B4F461]');
})
getId('donation-btn').addEventListener('click',function(){
    getWhatYouWant('donation')
    getId('history-btn').classList.remove('bg-[#B4F461]')
    getId('donation-btn').classList.add('bg-[#B4F461]','hover:bg-[#B4F461]')
})
getId('history-btn').addEventListener('click',function(){
    getWhatYouWant('history')
    getId('history-btn').classList.add('bg-[#B4F461]','hover:bg-[#B4F461]')
    getId('donation-btn').classList.remove('bg-[#B4F461]')
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

