import ucFirst from '@jipd/string-ucfirst'

/**
 * Take a string and pluralise it
 *
 * @param {string} str string to pluralise
 * @param {integer} num amount to pluralise by
 * @returns {string} pluralised string
 */
export default (str = '', num = 0) => {
    const key = str.toLowerCase()
    const neverPlural = [
        'deer',
        'fish',
        'sheep',
        'species'
    ]
    const swapsies = {
        goose: 'geese',
        man: 'men',
        mouse: 'mice',
        tooth: 'teeth'
    }
    if (parseInt(num, 10) === 1 || neverPlural.indexOf(key) !== -1) {
        return str
    }
    if (Object.keys(swapsies).indexOf(key) !== -1) {
        const charCode = str.charCodeAt(0)
        return (charCode >= 65 && charCode <= 90) ? ucFirst(swapsies[key]) : swapsies[key]
    }
    if (str.match(/(ch|sh|s|x|z)$/i)) {
        // e.g. box, boxes; bus, buses; prize, prizes
        return `${str}es`
    }
    if (str.match(/[a,e,i,o,u]y$/i)) {
        // e.g. boy, boys; day, days; key, keys
        return `${str}s`
    }
    if (str.match(/y$/)) {
        // e.g. baby, babies; country, countries; spy, spies
        return `${str.replace(/y$/i, '')}s`
    }
    if (str.match(/fe?$/)) {
        // elf, elves; loaf, loaves; thief, thieves
        return `${str.replace(/fe?$/i, '')}ves`
    }
    return `${str}s`
}
