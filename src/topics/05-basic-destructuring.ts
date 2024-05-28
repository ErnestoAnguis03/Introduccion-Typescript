interface Audioplayer{
    audioVolume: number;
    audioDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: Audioplayer={
    audioVolume: 60,
    audioDuration: 36,
    song: "Cahuates pistaches",
    details: {
        author: "Sepa la bola",
        year: 2011
    }
}

//Destructuracion del objeto audioplayer, si indicas solo el nombre, se obtendrá el valor del atributo indicado y
//se llamará igual (ejemplo song)
//De otro modo, puedes indicar que atributo quieres conseguir e indicar otro nombre a la variable (ejemplo duration)


//const { song }= audioPlayer;
//const { audioDuration:duration }= audioPlayer;
//const {audioVolume:volume} = audioPlayer;
//tambien se puede hacer de esta manera:
const { 
    song,
    audioDuration:duration ,
    audioVolume:volume ,
    details
      }= audioPlayer
//Desconsntruyendo objetos anidados
const{author,year}=details
//tambien se puede hacer de esta manera:
//Para Atributos anidados no olvides usar el '.' para llegar al atributo deseado
//const {author} = audioPlayer.details;
//const {year} = audioPlayer.details;


console.log('La cancion es:', song);
console.log('Duracion de la cancion', duration);
console.log('Volumen utilizado por la cancion:', volume);
console.log('Autor:', author);
console.log('Año de salida:', year);

export{}