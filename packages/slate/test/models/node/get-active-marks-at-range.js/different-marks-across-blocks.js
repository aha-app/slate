/** @jsx h */

import h from '../../../helpers/h'
import { Set } from 'immutable'
import { Editor } from 'slate'

export const input = (
  <value>
    <document>
      <paragraph>
        wo
        <anchor />
        <mark type="a">rd</mark>
      </paragraph>
      <paragraph>
        <paragraph>
          <mark type="b">middle</mark>
        </paragraph>
        <paragraph />
      </paragraph>
      <paragraph>unmarked</paragraph>
      <paragraph>
        <mark type="c">
          an
          <focus />
          other
        </mark>
        <mark type="d">unselected marked text</mark>
      </paragraph>
    </document>
  </value>
)

export default function(value) {
  const editor = new Editor({ value })
  const { document, selection } = value
  return editor.getActiveMarksAtRange(selection, document)
}

export const output = Set()
