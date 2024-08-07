import React from 'react'
import type { FC } from 'react'
import "./styles.scss";

type Props = React.PropsWithChildren<{title?: string,padding?:string,background?:string}>

export const Demos: FC<Props> = props => {
  return (
    <div className="demoBlock">
      <div className="title">{props.title}</div>
      <div
        className="main"
        style={{
          padding: props.padding,
          background: props.background,
        }}
      >
        {props.children}
      </div>
    </div>
  )
};
