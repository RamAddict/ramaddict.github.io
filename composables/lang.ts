export type Lang = 'en' | 'es';

const STORAGE_KEY = 'lang';

// timezones of Spanish-speaking countries, a rough stand-in for "where you are"
const SPANISH_TIMEZONES = new Set([
  'America/Asuncion',
  'America/Montevideo',
  'America/Santiago',
  'America/Punta_Arenas',
  'America/Lima',
  'America/Bogota',
  'America/Caracas',
  'America/La_Paz',
  'America/Guayaquil',
  'America/Mexico_City',
  'America/Cancun',
  'America/Merida',
  'America/Monterrey',
  'America/Matamoros',
  'America/Chihuahua',
  'America/Ciudad_Juarez',
  'America/Ojinaga',
  'America/Hermosillo',
  'America/Mazatlan',
  'America/Bahia_Banderas',
  'America/Tijuana',
  'America/Guatemala',
  'America/El_Salvador',
  'America/Tegucigalpa',
  'America/Managua',
  'America/Costa_Rica',
  'America/Panama',
  'America/Havana',
  'America/Santo_Domingo',
  'America/Puerto_Rico',
  'Pacific/Easter',
  'Pacific/Galapagos',
  'Europe/Madrid',
  'Atlantic/Canary',
  'Africa/Ceuta',
  'Africa/Malabo',
]);

function detectLang(): Lang {
  const browser = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase();
  if (browser.startsWith('es')) return 'es';
  // an English browser wins over location; anything else follows the timezone
  if (browser.startsWith('en')) return 'en';
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? '';
  return SPANISH_TIMEZONES.has(tz) || tz.startsWith('America/Argentina/') ? 'es' : 'en';
}

export const useLang = () => {
  const lang = useState<Lang>('lang', () => 'en');
  const es = computed(() => lang.value === 'es');

  // an explicit pick is remembered and beats detection on the next visit
  function setLang(l: Lang) {
    lang.value = l;
    localStorage.setItem(STORAGE_KEY, l);
  }

  return { lang, es, setLang };
};

// client only: the static build is rendered in English, then swapped after hydration
export function resolveInitialLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === 'en' || saved === 'es' ? saved : detectLang();
}
