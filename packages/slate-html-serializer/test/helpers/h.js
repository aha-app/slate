import { createHyperscript } from 'slate-hyperscript'

/**
 * Define a hyperscript.
 *
 * @type {Function}
 */

const h = createHyperscript({
  annotations: {
    highlight: 'highlight',
  },
  blocks: {
    line: 'line',
    paragraph: 'paragraph',
    quote: 'quote',
    code: 'code',
    image: 'image',
  },
  inlines: {
    link: 'link',
    hashtag: 'hashtag',
    comment: 'comment',
    emoji: 'emoji',
    linebreak: 'linebreak',
  },
  marks: {
    b: 'bold',
    i: 'italic',
    u: 'underline',
  },
})

/**
 * Export.
 *
 * @type {Function}
 */

export default h
