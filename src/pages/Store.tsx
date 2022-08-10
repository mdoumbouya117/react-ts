import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Store(props:any) {

    const location = useLocation();
    const { state }: any = location
    console.log(state)
  return (
      <div>
          <h1>{state?.store.name}</h1>
        <ul>
            {state?.store.articles.map((article: any) => 
                <li key={article.id}>
                    <Link to={`/store/${state?.store.id}/article/${article.id}`}>
                        {article?.name}
                    </Link>
                </li>
            )}
        </ul>
      </div>
  )
}
