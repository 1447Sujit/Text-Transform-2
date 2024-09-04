
import { useState } from 'react'
import style from './Text.module.css'

const Text = ()=>{

  const [text,setText]= useState("Sample Text")
  const [newText,setNewText] = useState("")

  function onClickHandler(){
    setText(newText)
    setNewText("")
  }

  function onChangeHandler(event){
    setNewText(event.target.value)
  }



  function lowerCase(){
    let low= text.toLowerCase()
    setText(low)
  }
  
  function upperCase(){
    let upp= text.toUpperCase()
    setText(upp)
  }


  return (
    <div className={style.text}>
            <div>
              <h1>Text Transform using input box</h1>
            </div>

            <div className={style.inputBox}>
             <input type="text" value={newText} onChange={onChangeHandler}/>
             <button onClick={onClickHandler}>Add Text</button>
            </div>


            <div className={style.textBox}>
                {
                    text
                }
            </div>

            <div className={style.buttonBox}>
              <button onClick={lowerCase}>Lower Case</button>
              <button onClick={upperCase}>Upper Case</button>
            </div>

    </div>
  )
}

export default Text;