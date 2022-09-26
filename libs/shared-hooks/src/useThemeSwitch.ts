import { UITheme } from '@abc/shared-model';
import { useEffect, useState } from 'react';

export function useThemeSwitch() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' &&
      document.documentElement.classList.contains('dark')
      ? UITheme.DARK
      : UITheme.LIGHT
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === UITheme.DARK) {
      root.classList.add(theme);
    } else {
      root.classList.remove(UITheme.DARK);
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [theme, setTheme] as const;
}
