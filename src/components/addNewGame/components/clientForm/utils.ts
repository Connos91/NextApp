export const handleError = (title: string, category: string) => {
  const newErrors = { title: "", category: "" };
  let hasError = false;

  if (title.trim() === "") {
    newErrors.title = "Game title is required!";
    hasError = true;
  }

  if (category === "") {
    newErrors.category = "Category is required!";
    hasError = true;
  }

  return { hasError, newErrors };
};
