import {formatDate, normalizeDate} from './utils'

type State = {
  date: Date
}
const states = new WeakMap<LocalTimeElement, State>()

class LocalTimeElement extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['datetime', 'format', 'locale', 'content']
  }

  connectedCallback(): void {
    this.updateDate()
    this.render()
  }

  attributeChangedCallback(attrName: string): void {
    if (attrName === 'datetime') {
      this.updateDate()
    }

    this.render()
  }

  render(): void {
    const humanReadable = formatDate(this.date, this.format, this.locale)
    const title = formatDate(this.date, 'YYYY-MM-DD HH:mm')

    this.setAttribute('title', title)
    this.textContent = this.content ?? humanReadable
  }

  private updateDate() {
    const state = {date: normalizeDate(this.datetime)}
    states.set(this, state)
  }

  get date(): Date {
    return states.get(this)?.date ?? new Date()
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

  get content(): string | undefined {
    return this.getAttribute('content') ?? undefined
  }

  set content(value) {
    value ? this.setAttribute('content', value) : this.removeAttribute('content')
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
