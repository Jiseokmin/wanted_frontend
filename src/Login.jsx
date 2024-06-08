import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState("");

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const handleEmail = (e) => {
        setEmail(e.target.value);
         const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
         if(regex.test(email)){
            setEmailValid(true);
         }else{
            setEmailValid(false);
         }
        }
    
    const handlePassWord = (e) => {
        setPw(e.target.value);
        const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
        if(regex.test(pw)){
            setPwValid(true);
        }else{
            setPwValid(false);
        }
    }

    const oncClickConfirmButton = () => {
        axios.post("/", {
            email: email
            , pw : pw
        })
        .then(response => {
            // response  
            if(response.data == "ok"){
                alert('로그인에 성공했습니다.');
            }else{
                alert('등록되지 않은 회원입니다.');
            }
            
       }).catch(error => {
           // 오류발생시 실행
       }).then(() => {  
           // 항상 실행
       });
    }

    useEffect(() =>{
        if(emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[emailValid, pwValid]);


    return (
        <div className="page">
            <div className='titleWrap'>
                악인전
            </div>
             
             <div className='contentWrap'>
                <div className='inputWrap'>
                    <input
                     type = 'text'
                     className = 'input' 
                     placeholder='아이디'
                     value= {email} 
                     onChange={handleEmail}/>
                </div>

                <div className='errorMessageWrap'>
                    {!emailValid && email.length > 0 && (
                    <div>올바른 이메일을 입력해주세요.</div>
                )}                
                </div>

                <div className='inputWrap'>
                    <input
                    type = 'password'
                    className = 'input' 
                    placeholder='비밀번호'
                    value = {pw}
                    onChange={handlePassWord}/>
                </div>
                <div className='errorMessageWrap'>
                    {!pwValid && pw.length >0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    ) }
                </div>
             </div>

             <div>
                <button onClick={oncClickConfirmButton} disabled={notAllow} className='bottomButton'>
                    확인
                </button>
             </div>
             <div>
                    회원가입
             </div>
        </div>
    );
}