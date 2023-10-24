const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"]
// Колбэк-функция будет вызвана для каждого элемента массива 
// и по результату функции примет решение включать этот элемент в новый массив или нет.
const jLanguages = languages.filter(function (language) {
  return language.startsWith("J")
})
console.log (jLanguages);
