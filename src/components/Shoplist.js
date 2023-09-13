import React from 'react'
import BasicExample from './Card'

function Shoplist({najiba}) {

    return (
    <div>
        {najiba.map(el=>
        <BasicExample produit={el}/>
    ) }
    </div>
  )
}

export default Shoplist