import LocalTimeElement from './local-time-element'
import {timeAgoFromMs} from './relative-utils'

const DEFAULT_THRESHOLD = 86400
const DEFAULT_INTERVAL = 30

type State = {
  timer?: number
}
const states = new WeakMap<TimeAgoElement, State>()

class TimeAgoElement extends LocalTimeElement {
  static get observedAttributes(): string[] {
    return ['datetime', 'format', 'locale', 'threshold']
  }

  connectedCallback(): void {
    const timer = setInterval(() => this.render(), this.interval)
    states.set(this, {timer})
    super.connectedCallback()
  }

  disconnectedCallback(): void {
    clearInterval(states.get(this)?.timer)
  }

  get content() {
    const value = this.getAttribute('threshold')
    const threshold = value ? Number.parseInt(value, 10) : DEFAULT_THRESHOLD
    const ms = Date.now() - this.date.getTime()
    return ms < threshold * 1000 ? timeAgoFromMs(ms, this.locale) : undefined
  }

  set content(value) {
    throw new Error("TimeAgoElement doesn't support content attribute")
  }

  get threshold(): number {
    const threshold = this.getAttribute('threshold')
    return threshold ? Number.parseInt(threshold, 10) : DEFAULT_THRESHOLD
  }

  set threshold(value: number) {
    this.setAttribute('threshold', value.toString())
  }

  get interval(): number {
    const interval = this.getAttribute('interval')
    return (interval ? Number.parseInt(interval, 10) : DEFAULT_INTERVAL) * 1000
  }

  set interval(value: number) {
    this.setAttribute('interval', value.toString())
  }
}

declare global {
  interface Window {
    TimeAgoElement: typeof TimeAgoElement
  }
}

export default TimeAgoElement

if (!window.customElements.get('time-ago')) {
  window.TimeAgoElement = TimeAgoElement
  // eslint-disable-next-line custom-elements/extends-correct-class
  window.customElements.define('time-ago', TimeAgoElement)
}
