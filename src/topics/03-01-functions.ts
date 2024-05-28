interface character {
    name: string;
    hp: number;
    showHp: () => void;
}

const WeakWarrior: character={
    name: 'WeakWarrior',
    hp: 50,
    showHp() 
    {
        console.log(`Puntos de vida: ${this.hp}`)
    }

}

const healHp = (character: character, amount: number) => {
    character.hp += amount;
}

console.log(`${WeakWarrior.name} observa con detenimiento su salud`);
console.log(`La saluda actual de ${WeakWarrior.name} es ${WeakWarrior.hp}`);


console.log('WeakWarrior usa curación pequeña');
healHp(WeakWarrior, 10);

console.log(`${WeakWarrior.name} observa con detenimiento su salud de nuevo (Combox2)`);
console.log(`La saluda actual de ${WeakWarrior.name} es ${WeakWarrior.hp}`);

WeakWarrior.showHp();
