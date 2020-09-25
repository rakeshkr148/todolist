import React from 'react';
import './ListItems.css';

const ListItems = (props)=> {
    const items = props.items;
    const listitems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>{item.text}
            <span className="del" 
            onClick={()=> props.deleteItem(item.key)}>Delete
            </span>
            </p>
            
        </div>
    })
    return(
        <div>{listitems}</div>
    )
}

export default ListItems;