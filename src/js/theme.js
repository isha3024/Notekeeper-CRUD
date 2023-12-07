'use strict';

const /* { string / null } */storedTheme = localStorage.getItem('theme');
console.log(storedTheme);
const systemThemeIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = storedTheme ?? (systemThemeIsDark ? 'dark' : 'light');
console.log(initialTheme);
document.documentElement.setAttribute('data-theme', initialTheme);