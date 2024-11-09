export const useScrambler = (finalTitle: string, speed = 33, letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
  let title = ref(finalTitle);
  let isScrambling = ref(false);

  function scramble() {
    if (isScrambling.value) return;
    isScrambling.value = true;
    let iterations = 0;

    const interval = setInterval(() => {
      title.value = finalTitle
        .split('')
        .map((l, i) => {
          if (i < iterations) {
            return finalTitle[i];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join('');
      if (iterations >= finalTitle.length) {
        clearInterval(interval);
        isScrambling.value = false;
      }
      iterations += 1 / 3;
    }, speed);
  }
  return { scramble, text: title, isScrambling };
};
