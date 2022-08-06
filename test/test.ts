import {assert, fixture, html} from '@open-wc/testing'
import '../src/local-time-element'
import '../src/time-ago-element'

describe('local-time', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('local-time')
      assert.equal('LOCAL-TIME', el.nodeName)
    })

    it('creates from constructor', function () {
      const el = new window.LocalTimeElement()
      assert.equal('LOCAL-TIME', el.nodeName)
    })
  })

  describe('after tree insertion', function () {
    beforeEach(async function () {
      await fixture(
        html`<local-time
          datetime="2022-08-01 10:00:00"
          format="YYYY年MM月DD日(ddd) HH時mm分"
          locale="ja-JP"
        ></local-time>`
      )
    })

    it('initiates', function () {
      const ce = document.querySelector('local-time')
      assert.equal(ce?.textContent, '2022年08月01日(月) 10時00分')
    })
  })
})

describe('time-ago', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('time-ago')
      assert.equal('TIME-AGO', el.nodeName)
    })

    it('creates from constructor', function () {
      const el = new window.TimeAgoElement()
      assert.equal('TIME-AGO', el.nodeName)
    })
  })

  describe('after tree insertion', function () {
    beforeEach(async function () {
      const datetime = new Date(Date.now() - 60 * 1000)
      await fixture(html`<time-ago datetime="${datetime}" locale="ja-JP"></time-ago>`)
    })

    it('initiates', function () {
      const ce = document.querySelector('time-ago')
      assert.equal(ce?.textContent, '1分前')
    })
  })
})
