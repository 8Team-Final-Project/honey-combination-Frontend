import React from "react";
import styled from "styled-components"
import router from "next/router"
import { useDispatch } from "react-redux";

//function
import { postLogin } from "../../src/Redux/Async/userAsync";

//Component
import ValidationInput from "../../src/Components/Input/ValidationInput"
import RedButton from "../../src/Components/Button/RedButton"



const login = () => {
    const dispatch = useDispatch();

    const [userEmail, setuserEmail] = React.useState(""); // 유저 이메일
    const [userPassword, setuserPassword] = React.useState(""); // 유저 비밀번호
    
    // 로그인하기
    const setLogin = () => {
        const login = {
            userEmail : userEmail,
            userPassword : userPassword
        }
        dispatch(postLogin(login))
    }
    
    return (
        <Container>
            <Wrap>
                <Margin>
                    <InputWrap>
                    <ValidationInput 
                        value={userEmail}
                        setValue={setuserEmail}
                        defaultText=" " 
                        label="이메일"
                    />
                        </InputWrap>
                        <InputWrap>
                    <ValidationInput 
                        label="비밀번호" 
                        value={userPassword}
                        setValue={setuserPassword}
                        defaultText=" "
                        type="password"
                    />
                    </InputWrap>
                </Margin>
                <Btn>
                    <RedButton 
                        onClick={() =>{setLogin()}}
                        value="로그인"
                    />
                <SignupBtn onClick={()=>router.push('/auth/signup')}>
                    회원가입
                </SignupBtn>
                </Btn>
            </Wrap>
        </Container>
    );
};

// styled-componenet
const Container = styled.div`
    position: center;
`

const Wrap = styled.div`
    padding : 6%;
`

const Margin = styled.div`
    margin: 8% 0px;
`

const InputWrap = styled.div`
   margin-bottom : 6%;
`

const Btn = styled.div`
    margin-top : 18%;
`

const SignupBtn = styled.div`
    color: #b8b8b8;
    text-align: center;
    margin: 30px;
    font-size : 18px;
    cursor : pointer;
`

export default login;


