import React from 'react'
import {useSelector} from 'react-redux'
import { contactSelectors } from '../../redux/contactSlice'
import Item from './Item'

function List() {
    const contacts = useSelector(contactSelectors.selectAll)
    // const total = useSelector(contactSelectors.selectTotal)
    
    // console.log(total)


  return (
    <div>
        {
            contacts.map(contact => (<Item key={contact.id} item={contact}/>) )
        }
    </div>
  )
}

export default List