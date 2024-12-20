function magicPotion(potions, target) {
    const seen = new Map()

    for (let i = 0; i < potions.length; i++) {
        const currentPotion = potions[i]
        const complement = target - currentPotion

        console.log(`ÍNDICE: ${i} / VALOR: ${potions[i]} / FALTANTE: ${complement}`)

        if (seen.has(complement)) {
            return [seen.get(complement), i]
        }

        seen[currentPotion] = i
    }
}

const potions = [4, 5, 6, 2]
const goal = 8

console.log (magicPotion(potions, goal))