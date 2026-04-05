import { ref } from 'vue'

const themes = ['theme-cosmic', 'theme-ocean', 'theme-aurora', 'theme-ember'] as const
type Theme = (typeof themes)[number]

const currentTheme = ref<Theme>(
  (document.documentElement.className.match(/theme-\w+/)?.[0] as Theme) || 'theme-cosmic'
)

export function useTheme() {
  function setTheme(theme: Theme) {
    const el = document.documentElement
    el.classList.add('theme-transitioning')
    // Remove old theme class, keep everything else
    themes.forEach((t) => el.classList.remove(t))
    el.classList.add(theme)
    currentTheme.value = theme
    setTimeout(() => el.classList.remove('theme-transitioning'), 550)
  }

  function nextTheme() {
    const idx = themes.indexOf(currentTheme.value)
    setTheme(themes[(idx + 1) % themes.length])
  }

  return { currentTheme, themes, setTheme, nextTheme }
}
