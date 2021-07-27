# string-plural
Change words to plural versions based on passed count
### Installation
```
npm install @jipd/string-plural
```
### Usage
```
import pluralise from '@jipd/string-plural'

const noPlural = pluralise('apple', 1)
// noPlural = 'apple'

const withPluralEx1 = pluralise('apple', 0)
// withPluralEx1 = 'apples'

const withPluralEx2 = pluralise('apple', 2)
// withPluralEx2 = 'apples'
```
