const makeRelativeFormat = (
  locale: string | undefined,
  options: Intl.RelativeTimeFormatOptions
): Intl.RelativeTimeFormat | void => {
  if ('Intl' in window && 'RelativeTimeFormat' in window.Intl) {
    try {
      return new Intl.RelativeTimeFormat(locale, options)
    } catch (e) {
      if (!(e instanceof RangeError)) {
        throw e
      }
    }
  }
}

export const formatRelativeTime = (
  locale: string | undefined,
  value: number,
  unit: Intl.RelativeTimeFormatUnit
): string | undefined => {
  const formatter = makeRelativeFormat(locale, {style: 'narrow'})
  return formatter?.format(value, unit)
}

export const timeAgoFromMs = (ms: number, locale?: string): string | undefined => {
  const sec = Math.round(ms / 1000)
  const min = Math.round(sec / 60)
  const hr = Math.round(min / 60)
  const day = Math.round(hr / 24)
  const month = Math.round(day / 30)
  const year = Math.round(month / 12)
  if (ms < 0) {
    return formatRelativeTime(locale, -0, 'second')
  } else if (sec < 10) {
    return formatRelativeTime(locale, -0, 'second')
  } else if (sec < 45) {
    return formatRelativeTime(locale, -sec, 'second')
  } else if (sec < 90) {
    return formatRelativeTime(locale, -min, 'minute')
  } else if (min < 45) {
    return formatRelativeTime(locale, -min, 'minute')
  } else if (min < 90) {
    return formatRelativeTime(locale, -hr, 'hour')
  } else if (hr < 24) {
    return formatRelativeTime(locale, -hr, 'hour')
  } else if (hr < 36) {
    return formatRelativeTime(locale, -day, 'day')
  } else if (day < 30) {
    return formatRelativeTime(locale, -day, 'day')
  } else if (month < 18) {
    return formatRelativeTime(locale, -month, 'month')
  } else {
    return formatRelativeTime(locale, -year, 'year')
  }
}
