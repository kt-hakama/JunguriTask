import { useLocale } from '../i18n/LocaleContext'

export default function LanguageSwitcher({ className = '' }) {
  const { locale, setLocale, t } = useLocale()

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-stone-200 p-0.5 bg-stone-50/80 ${className}`}
      role="group"
      aria-label={t('lang.switch')}
    >
      <button
        type="button"
        onClick={() => setLocale('ja')}
        className={`px-2 py-1 text-xs font-medium rounded-md transition-colors ${
          locale === 'ja'
            ? 'bg-white text-stone-800 shadow-sm'
            : 'text-stone-500 hover:text-stone-700'
        }`}
        aria-pressed={locale === 'ja'}
        aria-label={t('lang.ja')}
      >
        JA
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`px-2 py-1 text-xs font-medium rounded-md transition-colors ${
          locale === 'en'
            ? 'bg-white text-stone-800 shadow-sm'
            : 'text-stone-500 hover:text-stone-700'
        }`}
        aria-pressed={locale === 'en'}
        aria-label={t('lang.en')}
      >
        EN
      </button>
    </div>
  )
}
