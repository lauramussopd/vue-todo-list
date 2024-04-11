<!--  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const textElement = ref(null);
  const text = "Starting...";
  let currentIndex = 0;
  
  const displayText = ref("");
  
  const typeText = () => {
	if (currentIndex < text.length) {
	  displayText.value += text[currentIndex];
	  currentIndex++;
	  setTimeout(typeText, 100); // Aggiungi il ritardo tra ogni lettera
	}
  }
  
  onMounted(() => {
	typeText(); // Avvia la funzione per scrivere la lettera alla volta quando il componente viene montato
  });
  </script>
  
  <template>
	<main class="main-home d-flex justify-content-center align-items-center">
	  <h1 ref="textElement">{{ displayText }}</h1>
	</main>
  </template>

  <style scoped>
  .main-home {
	background-color: var(--light-color);
	height: 100vh;
	color: var(--primary-color);
  }
  </style>
  <template>
  <main class="main-home d-flex justify-content-center align-items-center">
    <h1 ref="textElement">Starting...</h1>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const textElement = ref(null);
    const text = "Starting...";
    let idx = 0;

    const writeText = () => {
      textElement.value.innerHTML = text.slice(0, idx); // Aggiorna il contenuto dell'elemento con il testo fino all'indice corrente

      idx++; // Incrementa l'indice per il prossimo carattere

      if (idx <= text.length) { // Se non abbiamo ancora scritto tutto il testo
        setTimeout(writeText, 100); // Richiama la funzione dopo 100 millisecondi per scrivere il prossimo carattere
      } else {
        idx = 1; // Resetta l'indice per ricominciare a scrivere il testo
      }
    };

    onMounted(() => {
      writeText(); // Avvia la funzione per scrivere il testo alla volta quando il componente viene montato
    });

    return {};
  }
}
</script>

<style scoped>
.main-home {
  background-color: var(--light-color);
  height: 100vh;
  color: var(--primary-color);
}
</style> -->

<template>
	<main class="main-home d-flex justify-content-center align-items-center">
	  <h1 ref="textElement">Starting...</h1>
	</main>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  
  export default {
	setup() {
	  const textElement = ref(null);
	  const text = "Starting...";
	  let currentIndex = 0;
  
	  const writeText = () => {
		if (currentIndex < text.length) {
		  textElement.value.textContent += text[currentIndex];
		  currentIndex++;
		  setTimeout(writeText, 100);
		}
	  };
  
	  onMounted(() => {
		writeText();
	  });
  
	  return {};
	}
  }
  </script>
  
  <style scoped>
  .main-home {
	background-color: var(--light-color);
	height: 100vh;
	color: var(--primary-color);
  }
  </style>
  