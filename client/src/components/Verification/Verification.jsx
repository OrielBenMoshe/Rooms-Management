import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import './Verification.scss';

const Verification = () => {
  // const [values, setValues] = React.useState(["", "", "", ""]);
  let phone = "125";
  const digitsNum = 4;
  let textFields = [];

  const handleTextChange = (e,nextField) => {
    console.log(e.target)
    nextField = document.querySelector(nextField);
    nextField && nextField.focus();
    console.log(nextField);
   
  }


  for (let i = 0; i < digitsNum; i++) {
    const name = `digit-${i+1}`;
    const nextField = `#digit-${i+2}`;
    textFields.push(
      <TextField 
        key={name} 
        id={name} 
        className="digit-field"
        size="small" 
        required
        type="number"
        InputProps={{inputProps: { max: 1 }}}
        onInput = {(e) =>{
          e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1);
        }}
        onChange={(e) =>{handleTextChange(e, nextField)}}
      />
    )
  }
 

  useEffect(() => { 
    const firstDigit = document.querySelector('#digit-1');
    firstDigit.focus();
  }, []);

  return (
    <div className="verification">
      <div>
        <h2>אימות הרשמה</h2>
        <article>נא להזין את קוד האימות שנשלח אליך<br/>לטלפון מספר:{phone}</article>
      </div>
      <form autoComplete="off">
        {textFields}
      </form>
      <article>לא קיבלת את הקוד?<a> לקבלת קוד חדש </a></article>
    </div>
  )
}
export default Verification;
