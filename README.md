# js-leet

Implements leetspeak converter at JavaScript. <br>
This is created to learn JavaScript.

## Example

```bash
$node
> const { getLeet }  = require('./leet')
undefined
> getLeet('hello')
'!-!3|_1<>'
> getLeet('1234567890')
'1234567890'
> getLeet('he11o')
':-:€11<>'
```

## Development

Test

```bash
yarn test
```

## About string for leet conversion

As for the string for leet conversion, I using the string described in this page.

[Wikipedia(Ja) - Leet](https://ja.wikipedia.org/wiki/Leet)

## Licence

MIT & [CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/legalcode)

In the getLeetList function, character combinations taken from Wikipedia are used.
For this reason, only this function is CC-BY-SA 3.0 Licence.

## Author

[Yuki Shindo](https://shinshin86.com/en)
