import styles from './typography.module.scss'
import React from 'react'


export function H2(props) {
    return (
      <div>
        <div className={styles.h2} style={props.style}>
          {props.children}
        </div>
      </div>
    )
}


export function H3(props) {
    return (
      <div>
        <div className={styles.h3} style={props.style}>
          {props.children}
        </div>
      </div>
    )
}

export function H4(props) {
  return (
    <div>
      <div className={styles.h4} style={props.style}>
        {props.children}
      </div>
    </div>
  )
}

export function P(props) {
    return (
      <div>
        <div className={styles.p} style={props.style}>
          {props.children}
        </div>
      </div>
    )
}


export function Subtitle(props) {
    return (
      <div>
        <div className={styles.subtitle} style={props.style}>
          {props.children}
        </div>
      </div>
    )
}

