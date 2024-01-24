function cesar(text, n) {
    let text1 = ""
    let a = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    for(let i of text) {
        a1 = a.indexOf(i, 0)
        if (a1 + n > 33) {
            text1 = text1 + a[n - (33 - a1)]
        }
        else {
            text1 = text1 + a[a1 + n]
        }
    }
    return text1
}

console.log(cesar("криптография", 5));