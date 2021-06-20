function choice(items){
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

function remove(items, item){
    let final;
    for (let i = 0; i < items.length; i++){
        if (items[i] === item){
            return [...items.slice(0, i), ...items.slice(i+1)];
        }
    }
}

export {choice, remove};