import React from 'react'
import type { FC, ReactNode } from 'react'
import "./styles.scss";

interface Props {
  title: string
  padding?: string
  background?: string
  children?: ReactNode
}

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
