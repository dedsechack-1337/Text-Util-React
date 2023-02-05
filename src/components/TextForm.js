import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState("")
    const handleOnChange= (event)=>{
        console.log("handled_change")
        setText(event.target.value)
    }
    const handleOnClick = ()=>{
        let newValue = text.toUpperCase();
        setText(newValue)
        props.showAlert("Text Convert to Uppercase",'Success')
    }
    const clear = ()=>{
        let newValue = ""
        setText(newValue) 
        props.showAlert("Text Clear",'Success')   
    }
    const autoRemoveSpace = ()=>{
        let space = text.split(/ +/)
        setText(space.join(" "))
        props.showAlert("Remove All White Space",'Success')
    }
    const handleLoClick = ()=>{
        let newValue = text.toLowerCase();
        setText(newValue)
        props.showAlert("Text Convert to Lowercase",'Success')

    }
    const copyToClipBord = () =>{
        let copytext = document.getElementById('textarea')
        copytext.select()
        navigator.clipboard.writeText(copytext.value)
        props.showAlert(text,"Succesfully copied To Clipbord ")
    }
    
  return (
    <div className='container my-5 mb-3 mx-auto ' >
    <h1 className={`mb-3 text-center text-${props.mode==='light'?'dark':'light'}`}>{props.formHeading}</h1>
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} type="text" value={text} onChange={handleOnChange} id="textarea" aria-label="readonly input example" rows='8'></textarea>
    <button className="btn btn-outline-primary my-3 mx-2" onClick={handleOnClick}>Convert to Uppercase</button>
    <button className="btn btn-outline-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-outline-primary my-3 mx-2" onClick={copyToClipBord}>Copy To Clipbord</button>
    <button className="btn btn-outline-primary my-3 mx-2" onClick={autoRemoveSpace}>Remove White Space</button>
    <button className="btn btn-outline-danger my-3 mx-2" onClick={clear}>Clear Text</button>

    <h2 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>Your Text Summury</h2>
    <p className='text-danger'> {text.split(" ").length} Word & {text.length} Characters & { ((.04*text.length)/60).toFixed(2) } Miniutes</p>
    <h2 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>Word Preview</h2>
    <p className={`text-${props.mode==='light'?'primary':'info'}`}>{text.length>0?text:"Enter the text above then Preview"}</p>
    </div>
  )
  }
