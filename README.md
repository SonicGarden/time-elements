# &lt;time&gt; element extensions

## Installation

```
$ npm install @sonicgarden/time-elements
```

## Usage

```js
import '@sonicgarden/time-elements'
```

```html
<local-time datetime="2022-08-01 10:00:00" format="YYYY年MM月DD日(ddd) HH時mm分">
</local-time>
```

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
