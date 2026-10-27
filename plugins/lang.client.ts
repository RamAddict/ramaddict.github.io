export default defineNuxtPlugin(() => {
  const { lang } = useLang();
  // only once hydration is fully done (lazy pages included), so it still matches the English markup
  onNuxtReady(() => {
    lang.value = resolveInitialLang();
  });
  watch(lang, (l) => (document.documentElement.lang = l), { immediate: true });
});
