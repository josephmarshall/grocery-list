import React from "react"
import Item from "./Item"

const List = ({items, name, itemClick, deleteItem}) => (
  <div>
    <div>
    { items.map( item => <Item key={item.id} {...item} itemClick={itemClick} deleteItem={deleteItem} /> )}
    </div>
  </div>
)

export default List