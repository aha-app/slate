/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.removeMark('bold')
}

export const input = (
  <value>
    <document>
      <paragraph>
        <b>
          <anchor />
          word
        </b>
        <focus />
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        <anchor />
        word
        <focus />
      </paragraph>
    </document>
  </value>
)
