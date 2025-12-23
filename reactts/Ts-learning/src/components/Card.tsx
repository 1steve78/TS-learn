import React from 'react'
import type{PropsWithChildren,ReactNode} from "react"

interface CardProps extends PropsWithChildren{
    tittle:string;
    footer? : ReactNode
}
function Card({tittle,children,footer}:CardProps) {
  return (
    <section>
        <h2>{tittle}</h2>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
    </section>
  )
}

export default Card
