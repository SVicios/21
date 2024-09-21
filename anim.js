// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
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

var lyricsData2 = [
  { text: "En ese momento", time: 15 },
  { text: "El susurro de los pájaros", time: 18 },
  { text: "Antes de que el sol llorara en soledad", time: 27 },
  { text: "Caía desde el cielo", time: 32 },
  { text: "Como gotas de agua", time: 33 },
  { text: "¿Dónde estoy ahora? No sé por qué", time: 41 },
  { text: "Hay unas lindas mariposas en mis manos", time: 47 },
  { text: "Demasiada luz para el atardecer", time: 54 },
  { text: "En el ambiente de las flores con amor", time: 59 },
  { text: "Ese recuerdo", time: 67 },
  { text: "Fue tan fuerte, me dejó alucinado", time: 72 },
  { text: "El silencio me dejó ver lo qué fue todo", time: 78 },
  { text: "Solo quiero vivir en las nubes", time: 83 },
  { text: "¿Dónde estoy ahora? No sé por qué", time: 91 },
  { text: "Hay unas lindas mariposas en mis manos", time: 97 },
  { text: "Demasiada luz para el atardecer", time: 104 },
  { text: "En el ambiente de las flores con amor", time: 108 },
  { text: "Ese recuerdo", time: 144 },
  { text: "El susurro de los pájaros", time: 148 },
  { text: "Antes de que el sol llorara en soledad", time: 153 },
  { text: "Caía desde el cielo", time: 158 },
  { text: "Como gotas de agua", time: 164 },
  { text: "¿Dónde estoy ahora? No sé por qué", time: 169 },
  { text: "Hay unas lindas mariposas en mis manos", time: 176 },
  { text: "Demasiada luz para el atardecer", time: 183 },
  { text: "En el ambiente de las flores con amor", time: 188 },
  { text: "Amor.", time: 140 },
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