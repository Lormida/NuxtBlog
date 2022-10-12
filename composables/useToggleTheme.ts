export const useToggleTheme = () => {
  const color = useColorMode();

  function toggleTheme() {
    color.value = color.value === "light" ? "dark" : "light";
  }

  return { toggleTheme };
};
