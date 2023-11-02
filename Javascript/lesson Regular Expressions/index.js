
function replaceLongColors(text) {
    return text.replace(/#([\da-f])\1([\da-f])\2([\da-f])\3/gi,
        (_, r, g, b) => `#${r}${g}${b}`,

    );
}


function toCamelCase(text) {
    return text.replace(/_[a-z]/gi, (match) => {
        return match.charAt(1).toUpperCase();
    });
}
//Метод charAt() возвращает символ по указанному индексу в строке.

function toCamelCase2(text) {
    return text.replace(/_([a-z])/gi, (_, letter) => letter.toUpperCase());
}

// How to check if character is a letter in Javascript?
// как проверить, является ли символ буквой в Javascript?

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }


  let cat = {
    name: 'Tom',
    isHunter: true
  }
  
  let mouse = {
    name: 'Jerry',
    isHunter: false
  }
  
  mouse = cat;
  cat.isHunter = false;
  mouse.isHunter = undefined;
  
  console.log(mouse.isHunter);

