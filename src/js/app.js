export function check(e){
    return e.sort((a, b) => a.health < b.health ? 1 : -1)
}

