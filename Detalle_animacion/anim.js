// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
/*var lyricsData = [
  { text: "At the time", time: 15 },
  { text: "The whisper of birds", time: 18 },
  { text: "Lonely before the sun cried", time: 27 },
  { text: "Fell from the sky", time: 32 },
  { text: "Like water drops", time: 33 },
  { text: "Where I'm now? I don't know why", time: 41 },
  { text: "Nice butterflies in my hands", time: 47 },
  { text: "Too much light for twilight", time: 54 },
  { text: "In the mood for the flowers love", time: 59 },
  { text: "That vision", time: 67 },
  { text: "Really strong, blew my mind", time: 72 },
  { text: "Silence Let me see what it was", time: 78 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
];
*/
var lyricsData = [
  { text: "(Metro) just to save you", time: 1.05 },
  { text: "(you)", time: 2.5 },
  { text: "I'd give my all", time: 6 },
  { text: "Heyy(Ooh)", time: 7 },
  { text: "Just to save you, I'd give all of me (all of me) (yeah)", time: 11 },
  { text: "I can hear you screamin' out, callin' me (callin' me)", time: 14 },
  { text: "It's my fault, made you fall for me (fall)", time: 18 },
  { text: "So, to save you, I'd give my all (my all)", time: 21 },

  { text: "Just to save you, I'd give all of me (all of me)", time: 24 },
  { text: "I can hear you screamin' out, callin' me (callin' me)", time: 28 },
  { text: "It's my fault, made you fall for me (fall for me)", time: 31 },
  { text: "So, to save you, I'd give my all (my all)", time: 35 },

  { text: "You fell for me, I count on you when times are tough", time: 38 },
  { text: "Instead of holding you down, I should lift you up", time: 41 },
  { text: "It hurts me when you start to see my flaws (my flaws)", time: 45 },
  { text: "But just to save you, I'd risk it all (all)", time: 48 },

  { text: "Short on time for you, I'd never have enough (have enough)", time: 51 },
  { text: "When I ran into ya, I didn't plan on fallin' in love", time: 54.5 },
  { text: "Always there to wipe your tears, I hate to see you cry", time: 58 },
  { text: "If you tell me to jump, I'll ask you, How high?", time: 62 },

  { text: "I know sometimes it be hard for me to tell the truth (tell the truth)", time: 65 },
  { text: "But I go through any obstacle to get to you (to you)", time: 68 },
  { text: "I'm not materialistic, but I got a thing for you", time: 72 },
  { text: "Treat the world like my guitar, I'm pulling strings for you", time: 75 },


  { text: "(Ooh) just to save you, I'd give all of me (all of me) (yeah)", time: 79 },
  { text: "I can hear you screamin' out, callin' me (callin' me)", time: 83 },
  { text: "It's my fault, made you fall for me (fall)", time: 86 },
  { text: "So, to save you, I'd give my all (my all)", time: 90 },

  { text: "Just to save you, I'd give all of me (all of me) (yeah)", time: 93 },
  { text: "I can hear you screamin' out, callin' me (callin' me)", time: 96 },
  { text: "It's my fault, made you fall for me (fall)", time: 100 },
  { text: "So, to save you, I'd give my all (my all)", time: 104 },

  { text: "Let me be your hero", time: 106 },
  { text: "You held me down, I was stuck at the bottom", time: 107 },
  { text: "Get out of here, I get you lit, oh", time: 109 },
  { text: "I know you can't stand me", time: 111 },

  { text: "I am the one that bust down your rose gold", time: 112 },
  { text: "Had your diamonds dancin'", time: 114 },
  { text: "I picked you up in that Bentley Mulsanne", time: 116 },
  { text: "When 'em sirens was glarin'", time: 117 },
  { text: "I gave you this number, it's nobody else that got it", time: 120 },
  { text: "You can call me", time: 122 },


  
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);