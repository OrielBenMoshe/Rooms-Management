import React, { useEffect, useContext, useState } from 'react';
import './Verification.scss';
import Context from './../../Context';
import TextField from '@material-ui/core/TextField';

const Verification = () => {
  const digitsNum = 4;
  let textFields = [];
  const user = useContext(Context);
  const [password, setPassword] = useState([0, 0, 0, 0]);
  const [lastField, setLastField] = useState(false);
  const node = document.createElement("P");
  
  for (let i = 0; i < digitsNum; i++) {
    const name = `digit-${i + 1}`;
    const nextField = `#digit-${i + 2}`;
    const prevField = `#digit-${i}`;
    textFields.push(
      <TextField
        key={name}
        id={name}
        name={name}
        className="digit-field"
        size="small"
        required
        type="number"
        InputProps={{ inputProps: { max: 9 } }}
        onInput={(e) => {
          e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 1);
          let newCode = password;
          newCode[i] = e.target.value;
          setPassword(newCode);
        }}
        onChange={(e) => { handleTextChange(e, nextField, prevField) }}
      />
    )
  }

  const handleTextChange = (e, nextField, prevField) => {
    /** control on inputs focus. */
    nextField = document.querySelector(nextField);
    prevField = document.querySelector(prevField);
    const inputWrapper = document.querySelector('.input_wrapper');

    if (e.target.value) {
      if (nextField) {
        nextField.focus();
      } else {
        /** Auth the code after the last field. */
        console.log(user.password);
        setLastField(true);
        let enteredCode = password.join('');
        if (enteredCode === user.password) {
          console.log('החיבור הצליח');
          let textnode = document.createTextNode("ברוכים הבאים! כבר נכנסים..");
          node.appendChild(textnode);
          node.classList.add('sucsses');
          window.location = '/';
        } else {
          /** Invalid password */
          inputWrapper.classList.add('shake');

          setTimeout(() => {
            let inputs = document.querySelectorAll('.digit-field input');
            inputs.forEach(element => {
              element.value = '';
            });
            let textnode = document.createTextNode("קוד האימות שגוי!");
            node.appendChild(textnode);
            node.classList.add('error');
          }, 1000);

          setTimeout(() => {
            inputWrapper.classList.remove('shake');
          }, 1500);
          setPassword([0, 0, 0, 0]);
        }

        const message = document.querySelector('.verification p');
        message && message.parentElement.removeChild(message);
        inputWrapper.after(node);
        document.querySelector('#digit-1').focus();
      }
    } else {
      // prevField && prevField.focus();
    }
    // document.addEventListener("keydown", (e) =>{ (e.keyCode === 8 && prevField) && prevField.focus(); })
    // console.log(nextField);

  }
  
  
 


  useEffect(() => {
    const firstDigit = document.querySelector('#digit-1');
    firstDigit.focus();
  }, []);
  useEffect(() => {
    //  console.log('password: ', password);
  }, [password]);

  return (
    <div className="verification">
      <div>
        <h2>אימות הרשמה</h2>
        <reservation>נא להזין את קוד האימות שנשלח אליך<br />לטלפון מספר: {user.phone}</reservation>
      </div>
      <div className="input_wrapper">
        {textFields}
      </div>
      <reservation>לא קיבלת את הקוד?<a> לקבלת קוד חדש </a></reservation>
    </div>
  )
}
export default Verification;
