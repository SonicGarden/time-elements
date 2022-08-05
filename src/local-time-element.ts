import {formatDate, normalizeDate} from './utils'

class LocalTimeElement extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['datetime', 'format', 'locale']
  }

  connectedCallback(): void {
    this.render()
  }

  attributeChangedCallback(): void {
    this.render()
  }

  render(): void {
    const date = normalizeDate(this.datetime)
    const humanReadable = formatDate(date, this.format, this.locale)
    const title = formatDate(date, 'YYYY-MM-DD HH:mm')

    this.setAttribute('title', title)
    this.textContent = humanReadable
  }

  get format(): string {
    return this.getAttribute('format') || 'YYYY-MM-DD HH:mm'
  }

  set format(value: string) {
    this.setAttribute('format', value)
  }

  get datetime(): string | undefined {
    return this.getAttribute('datetime') ?? undefined
  }

  set datetime(value) {
    value ? this.setAttribute('datetime', value) : this.removeAttribute('datetime')
  }

  get locale(): string | undefined {
    return this.getAttribute('locale') ?? undefined
  }

  set locale(value) {
    value ? this.setAttribute('locale', value) : this.removeAttribute('locale')
  }
}

declare global {
  interface Window {
    LocalTimeElement: typeof LocalTimeElement
  }
}

export default LocalTimeElement

if (!window.customElements.get('local-time')) {
  window.LocalTimeElement = LocalTimeElement
  window.customElements.define('local-time', LocalTimeElement)
}
