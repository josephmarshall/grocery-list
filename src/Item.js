import React from 'react'

const Item = ({ id, name, complete, itemClick, deleteItem }) => (
<div>
  <span
    style={ complete ? { ...styles.item, ...styles.complete } : styles.item }
    onClick={ () => itemClick(id) }
  >
  {id} { name }
  </span>
  <button onClick={ () => deleteItem(id) }> x </button>
</div>
)


const styles = {
item: { cursor: 'pointer' },
complete: { color: 'grey', textDecoration: 'line-through' },
}

export default Item
