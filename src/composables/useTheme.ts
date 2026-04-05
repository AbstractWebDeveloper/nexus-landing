import { ref } from 'vue'

const themes = ['theme-cosmic', 'theme-ocean', 'theme-aurora', 'theme-ember'] as const
type Theme = (typeof themes)[number]

const currentTheme = ref<Theme>(
  (document.documentElement.className.match(/theme-\w+/)?.[0] as Theme) || 'theme-cosmic'
)

export function useTheme() {
  function setTheme(theme: Theme) {
    document.documentElement.className = theme
    currentTheme.value = theme
  }

  function nextTheme() {
    const idx = themes.indexOf(currentTheme.value)
    setTheme(themes[(idx + 1) % themes.length])
  }

  return { currentTheme, themes, setTheme, nextTheme }
}
