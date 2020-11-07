import styles from './editable.module.scss'
import React, {useState} from 'react'
import { P } from './Typography'

export function EditableTextLabel(props) {
    
    const [bodyText, setBodyText] = useState("");
    
    function editText(e) {
        setBodyText(e.target.value);
        // props.state(e.target.value);
    }

  return (
    <div className={styles.textLabel}>
        <P style={{opacity: '0.5'}}>{props.title}</P>
        <input className={styles.textarea} value={bodyText} placeholder={props.default} onChange={(e)=>editText(e)}/>
        <hr className={styles.divider}/>
    </div>
  )
}

export function EditableTextBox(props) {
    
    const [bodyText, setBodyText] = useState("");
    
    function editText(e) {
        if (props.length) {
            if (e.target.value.length > props.length) {
                return;
            }
        }
        setBodyText(e.target.value);
        props.state[props.default] = e.target.value;
        console.log(props.state);
    }

  return (
    <div className={styles.textLabelBox} style={props.style}>
        {(props.disabled) && 
            <>
                <input className={styles.textarea} value={bodyText} placeholder={props.default} onChange={(e)=>editText(e)} disabled/>
            </>
        }
        {(!props.disabled) && 
            <>
                <input className={styles.textarea} value={bodyText} placeholder={props.default} onChange={(e)=>editText(e)}/>
            </>
        }
    </div>
  )
}

export function EditableTextComment(props) {
    
    const [bodyText, setBodyText] = useState("");
    
    function editText(e) {
        setBodyText(e.target.value);
    }

    function buttonClick() {
        props.comments.push(bodyText);
        setBodyText("");
        props.update(!props.original);
    }

  return (
    <div className={styles.textLabel}>
        <P style={{opacity: '0.5'}}>{props.title}</P>
        <input className={styles.textarea} value={bodyText} placeholder={props.default} onChange={(e)=>editText(e)}/>
        <btn style={{display: (bodyText.length === 0) ? 'none': 'flex'}} className={styles.textbutton} onClick={()=>buttonClick()} >Add Comment</btn>
    </div>
  )
}