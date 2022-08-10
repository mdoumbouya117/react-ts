import React from 'react'
import { Link } from 'react-router-dom';
import stores from '../db/stores.json'

export default function Home() {
  
    return (
        <>
        <ul>
            {stores.map(store =>
                <li key={store.id}>
                    <Link to={`/store/${store.id}`} state={{
                        store
                    }}>
                        {store.name}
                    </Link> 
                </li>
            )}
        </ul>
        </>
    )
}
