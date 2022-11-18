import React from 'react'
import Card from './Card'

function CardList({robots}) {
    
  return (
    <div>
        {
            robots.map((user,i) => {
                return ( 
                    <Card 
                        key={user.id} 
                        name={user.name} 
                        email={user.email} 
                        username={user.username}
                    />
                )
            })
        }
    </div>
  )
}

export default CardList