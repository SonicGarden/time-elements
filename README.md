# &lt;time&gt; element extensions

## Installation

```
$ npm install @sonicgarden/time-elements
```

## Usage

### local-time

```js
import '@sonicgarden/time-elements/dist/local-time-element'
```

```html
<local-time datetime="2022-08-01 10:00:00" format="YYYY年MM月DD日(ddd) HH時mm分">
</local-time>
```

**Attributes**

- `datetime`: Datetime string.
- `format`: Format string. (default: `YYYY-MM-DD HH:mm`)
- `locale`: Locale string. (default: `undefined`)

**List of all available formats (YYYY-MM-DD HH:mm by default):**

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `YY`   | 18               | Two-digit year                        |
| `YYYY` | 2018             | Four-digit year                       |
| `M`    | 1-12             | The month, beginning at 1             |
| `MM`   | 01-12            | The month, 2-digits                   |
| `D`    | 1-31             | The day of the month                  |
| `DD`   | 01-31            | The day of the month, 2-digits        |
| `H`    | 0-23             | The hour                              |
| `HH`   | 00-23            | The hour, 2-digits                    |
| `h`    | 1-12             | The hour, 12-hour clock               |
| `hh`   | 01-12            | The hour, 12-hour clock, 2-digits     |
| `m`    | 0-59             | The minute                            |
| `mm`   | 00-59            | The minute, 2-digits                  |
| `s`    | 0-59             | The second                            |
| `ss`   | 00-59            | The second, 2-digits                  |
| `SSS`  | 000-999          | The millisecond, 3-digits             |
| `d`    | 0-6              | The day of the week, with Sunday as 0 |
| `dd`   | S-S              | The min name of the day of the week   |
| `ddd`  | Sun-Sat          | The short name of the day of the week |
| `dddd` | Sunday-Saturday  | The name of the day of the week       |

### time-ago

```js
import '@sonicgarden/time-elements/dist/time-ago-element'
```

```html
<time-ago datetime="2022-08-01 10:00:00" format="YYYY年MM月DD日(ddd) HH時mm分">
</time-ago>
```

**Attributes**

- `datetime`: Datetime string.
- `format`: Format string. (default: `YYYY-MM-DD HH:mm`)
- `locale`: Locale string. (default: `undefined`)
- `interval`: Interval seconds. (default: `30`)
- `threshold`: Threshold seconds. (default: `86400`)

## Browser support

Browsers without native [custom element support][support] require a [polyfill][].

- Chrome
- Firefox
- Safari
- Microsoft Edge

[support]: https://caniuse.com/#feat=custom-elementsv1
[polyfill]: https://github.com/webcomponents/custom-elements

## Development

```
pnpm install
pnpm test
```

## License

Distributed under the MIT license. See LICENSE for details.
