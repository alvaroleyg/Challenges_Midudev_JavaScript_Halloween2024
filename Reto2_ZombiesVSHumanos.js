function battleHorde(zombies, humans) {
    let z = 0, h = 0

    for (let i = 0; i < zombies.length; i++) {
        const zombieAttack = Number(zombies[i])
        const humanAttack = Number(humans[i])
        let zRound = 0, hRound = 0

        if (zombieAttack > humanAttack) {
            zRound = zombieAttack - humanAttack
        } else if (zombieAttack < humanAttack) {
            hRound = humanAttack - zombieAttack
        }

        z += zRound
        h += hRound

        console.log(`RONDA ${i+1}: Zombie ${zombieAttack} vs Humano ${humanAttack}`)
        console.log(`RESULTADO ACTUAL: Zombies ${z} / Humanos ${h}`)
    }

    if (z > h) {
        return `${Math.abs(z - h)}z`
    } else if (h > z) {
        return `${Math.abs(h - z)}h`
    } else {
        return 'x'
    }
}


console.log(battleHorde('242', '334'))
console.log(battleHorde('444', '282'))
console.log(battleHorde('323', '123'))
console.log(battleHorde('8989898999', '7779998811'))
