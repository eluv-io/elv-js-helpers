/* global document, window, R */
// noinspection DuplicatedCode,ThisExpressionReferencesGlobalObjectJS,SillyAssignmentJS

(function() {

  const findFirst = R.find(R.prop('offsetParent'))

  function toArray(xs) {
    return Array.prototype.slice.call(xs)
  }

  // handle user click on category name in ToC
  function filterTocType(category) {
    // set text filter
    nameFilter.value = category
    // refilter
    filterToc()
  }

  function filterToc() {
    const f = filterElement.bind(null, nameFilter.value, privateFilter.checked)
    entries.forEach(f)
    cards.forEach(f)
  }

  function filterElement(nameFilter, privateFilter, elem) {
    elem.style.display =
      (privateFilter || elem.getAttribute('data-access') === 'public') &&
      (strIn(nameFilter, elem.getAttribute('data-name')) ||
      R.toLower(nameFilter) === R.toLower(elem.getAttribute('data-category'))) ?
        '' :
        'none'
  }

  function gotoFirst(e) {
    if (R.isEmpty(e.detail)) {
      return
    }

    const entry = findFirst(entries)
    if (entry) {
      const onHashChange = function() {
        e.target.focus()
        window.removeEventListener('hashchange', onHashChange)
      }

      // Hash change blurs input, put focus back to input
      window.addEventListener('hashchange', onHashChange)
      window.location.hash = entry.getAttribute('data-name')
    }
  }

  function strIn(a, b) {
    a = a.toLowerCase()
    b = b.toLowerCase()
    return b.indexOf(a) >= 0
  }

  function scrollToTop() {
    const main = document.querySelector('main')
    main.scrollTop = 0
  }

  function isTopLink(elem) {
    return elem.getAttribute('href') === '#'
  }

  function isAnchorLink(elem) {
    return elem.tagName === 'A' && elem.getAttribute('href').charAt(0) === '#'
  }

  function closeNav() {
    document.getElementById('open-nav').checked = false
  }

  function dispatchEvent(event) {
    const target = event.target
    const category = target.getAttribute('data-category')

    if (isAnchorLink(target)) {
      closeNav()
    }
    if (category) {
      filterTocType(category)
    }
    if (isTopLink(target)) {
      scrollToTop(target)
    }
  }

  function keypress(e) {
    if (e.which === 13) {
      e.target.dispatchEvent(new window.CustomEvent('enter', {
        detail: e.target.value
      }))
    }
  }

  // https://goo.gl/Zbejtc
  // function fixedEncodeURIComponent (str) {
  //   return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
  //     return '%' + c.charCodeAt(0).toString(16);
  //   });
  // }

  const nameFilter = document.getElementById('name-filter')
  const privateFilter = document.getElementById('show-private')
  const entries = toArray(document.querySelectorAll('.toc .toc-entry'))
  const cards = toArray(document.querySelectorAll('section.card'))

  filterToc()

  document.body.addEventListener('click', dispatchEvent, false)
  nameFilter.addEventListener('input', filterToc, false)
  nameFilter.addEventListener('keypress', keypress, false)
  nameFilter.addEventListener('enter', gotoFirst)
  privateFilter.addEventListener('change', filterToc, false)

  // add event listener for slash key up (move focus to filter text input)
  document.body.addEventListener('keyup', function(event) {
    if (event.key === '/')
      document.getElementById('name-filter').focus()
  })

  document.body.addEventListener('click', function(event) {
    if (event.target.className.split(' ').indexOf('toggle-params') >= 0) {
      const expanded = event.target.parentNode.getAttribute('data-expanded')
      event.target.parentNode.setAttribute(
        'data-expanded',
        expanded === 'true' ? 'false' : 'true'
      )
    }
  }, false)

  // back-button hack
  window.addEventListener('hashchange', function() {
    // eslint-disable-next-line no-self-assign
    window.location.href = window.location.href
  }, false)

}.call(this))
