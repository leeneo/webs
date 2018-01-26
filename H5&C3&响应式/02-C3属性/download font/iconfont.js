;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-piaofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M530.295692 549.739533v-55.816237h121.553426c10.275018 0 18.605753-8.329712 18.605754-18.605753 0-10.275018-8.329712-18.605753-18.605754-18.605754H543.246655l121.759111-102.329596c7.265474-7.265474 7.265474-19.045775 0-26.311249s-19.045775-7.265474-26.312272 0L512 434.548 385.306506 328.071967c-7.265474-7.265474-19.045775-7.265474-26.312272 0-7.265474 7.265474-7.265474 19.045775 0 26.311249l121.759111 102.329597H372.150882c-10.275018 0-18.605753 8.329712-18.605754 18.605753s8.329712 18.605753 18.605754 18.605753h120.934326v55.816237h-120.934326c-10.275018 0-18.605753 8.329712-18.605754 18.605753s8.329712 18.605753 18.605754 18.605754h120.934326v93.026719c0 10.276041 8.329712 18.605753 18.605754 18.605754s18.605753-8.329712 18.605753-18.605754v-93.026719H651.850142c10.275018 0 18.605753-8.329712 18.605753-18.605754 0-10.275018-8.329712-18.605753-18.605753-18.605753l-121.55445-0.001023z m428.231131 58.784847v199.76165c0 41.102117-33.379225 74.42199-74.605162 74.42199H140.078339c-41.203424 0-74.605162-33.423227-74.605162-74.42199V608.52438c56.047504 0 101.483322-43.841507 101.483322-97.922216s-45.435819-97.922217-101.483322-97.922217V212.918297c0-41.102117 33.379225-74.42199 74.605162-74.421989h743.843322c41.203424 0 74.605162 33.423227 74.605162 74.421989v199.76165c-56.047504 0-101.483322 43.841507-101.483322 97.922217s45.435819 97.922217 101.483322 97.922216z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qiu_balls" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M273.064 691.369c0.002-0.076-0.015-0.151-0.052-0.221l179.142-59.165c4.557 7.38 10.602 15.043 17.644 22.085 18.738 18.738 41.869 30.407 66.078 35.008l-4.865 39.309c-15.923 3.582-31.457 11.792-44.183 24.518-35.853 35.853-35.853 93.984 0 129.837 18.009 18.009 41.636 26.972 65.241 26.89 23.582 0.035 47.165-8.94 65.149-26.925 35.899-35.899 35.899-94.103 0-130.001-13.46-13.46-30.055-21.874-47.435-25.239l4.482-37.004c25.806-2.832 51.202-13.799 71.812-32.861l108.197 93.358c-8.369 23.091-9.946 47.218-5.047 70.241-2.782 6.038 9.659 38.654 34.542 63.537 49.761 49.761 130.441 49.761 180.202 0 49.761-49.761 49.761-130.441 0-180.202-24.884-24.884-57.5-37.324-90.115-37.321-30.293-0.030-60.592 10.731-84.643 32.279l-114.207-81.491c14.17-30.546 15.808-64.491 5.34-95.219l103.201-18.182c0.602 0.688 1.33 1.467 2.090 2.225 9.517 9.517 21.979 14.289 34.45 14.321 12.566 0 25.136-4.795 34.726-14.385 19.181-19.181 19.181-50.278 0-69.458-9.59-9.59-22.16-14.385-34.73-14.385-12.503 0.018-25.001 4.798-34.541 14.338-8.526 8.526-13.249 19.414-14.17 30.557l-100.87 33.343c-5.12-9.196-12.169-18.588-20.663-27.083-10.315-10.315-21.955-18.498-34.371-24.551l27.903-152.625c23.761-4.485 46.957-16.178 65.746-34.965 49.747-49.747 49.747-130.4 0-180.146-49.747-49.747-130.4-49.747-180.146 0-24.885 24.885-37.322 57.504-37.309 90.118 0.007 32.59 12.445 65.175 37.309 90.041 9.536 9.536 20.208 17.244 31.581 23.124l-0.826 151.55c-29.031-0.011-58.064 9.893-81.586 29.71l-39.285-46.146c12.787-30.796 6.757-66.937-17.845-91.539-32.593-32.593-85.436-32.593-118.030 0-16.258 16.258-24.406 37.554-24.445 58.865-0.002 21.358 8.145 42.721 24.445 59.020 16.306 16.306 37.68 24.453 59.052 24.445 20.002-0.063 39.989-7.341 55.721-21.838l40.34 38.315c-19.093 25.337-27.446 55.445-25.478 84.994-0.294-5.315-0.034-2.308 0.186 0.74l-187.836 38.583c-2.629-3.33-5.881-6.98-9.377-10.479-24.833-24.833-57.385-37.246-89.934-37.235-32.587 0.011-65.173 12.445-90.037 37.308-49.747 49.747-49.747 130.4 0 180.146 49.747 49.747 130.4 49.747 180.146 0 24.891-24.891 37.327-57.52 37.309-90.144z" fill="#1296db" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-nanxing_male" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M488.209 153.173h18.020v-22.642h23.107v-18.020h-23.107v-22.642h-18.020v22.642h-22.175v18.020h22.175z" fill="#f4ea2a" ></path>' +
    '' +
    '<path d="M683.807 269.157v-191.986s-186.102-144.995-372.244 0v191.986s59.244-59.244 183.83-61.264c124.567-2.038 188.414 61.264 188.414 61.264zM428.77 99.637c0.027-21.729 17.647-39.334 39.379-39.334 11.742 0 22.284 5.139 29.498 13.291 7.301-8.384 17.988-13.685 29.914-13.685 21.749 0 39.379 17.63 39.379 39.379 0 12.182-5.532 23.072-14.22 30.295l-0.045 0.052-54.176 53.167-55.827-53.167c-8.528-7.259-13.904-18.002-13.904-30.001z" fill="#d81e06" ></path>' +
    '' +
    '<path d="M297.504 341.723c0 110.527 89.634 249.172 200.18 249.172 110.508 0 200.161-138.626 200.161-249.172 0-5.243-0.388-10.37-0.778-15.495l-31.361-31.108c-2.835-2.699-56.779-52.973-162.141-52.973l-5.398 0.058c-109.79 1.787-161.713 50.817-163.87 52.914l-36.176 35.010c-0.253 3.844-0.621 7.669-0.621 11.593z" fill="#f4ea2a" ></path>' +
    '' +
    '<path d="M721.78 530.786l-217.875 372.516-196.065-372.516s-180.138 16.218-230.819 266.51c-9.072 44.842 11.246 113.174 51.347 135.19 59.922 32.871 174.048 68.518 386.436 66.695 212.388 1.824 326.514-33.804 386.436-66.695 40.121-21.997 60.439-90.349 51.347-135.19-50.666-250.292-230.798-266.51-230.798-266.51zM342.054 951.087c-76.927 0-147.536-29.308-151.182-30.861l16.077-38.174c0.994 0.414 99.629 41.239 181.318 22.847l9.092 40.411c-18.207 4.121-36.931 5.775-55.303 5.775zM666.85 958.998c-18.351 0-37.054-1.677-55.303-5.775l9.092-40.411c81.919 18.476 180.303-22.431 181.299-22.847l16.094 38.174c-3.625 1.553-74.235 30.861-151.182 30.861z" fill="#1296db" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)