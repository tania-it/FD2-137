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

function toCamelCase2(text) {
    return text.replace(/_([a-z])/gi, (_, letter) => letter.toUpperCase());
}

