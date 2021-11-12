import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { 
    postLogin,
} from "../../src/Redux/Async/userAsync";
import router from "next/router"

//Component
import ValidationInput from "../../src/Components/Input/ValidationInput"
import RedButton from "../../src/Components/Button/RedButton"
import WhiteButton from "../../src/Components/Button/WhiteButton"


const login = () => {
    const dispatch = useDispatch();

    const [userEmail, setuserEmail] = React.useState("");
    const [userPassword, setuserPassword] = React.useState("");
    
    // 로그인 버튼
    const setLogin = () => {
        const login = {
            userEmail : userEmail,
            userPassword : userPassword
        }
        dispatch(postLogin(login))
    }

    
    
    return (
        <Container>
            <div>
                <Margin>
                    <InputWrap>
                    <ValidationInput 
                        value={userEmail}
                        setValue={setuserEmail}
                        label="이메일"
                    />
                        </InputWrap>
                        <InputWrap>
                    <ValidationInput 
                        label="비밀번호" 
                        value={userPassword}
                        setValue={setuserPassword}
                        type="password"

                    />
                    </InputWrap>
                </Margin>
                    <RedButton 
                        onClick={() =>{
                            setLogin()
                        }}
                        value="로그인"
                    />

                <SignupBtn onClick={()=>router.push('/auth/signup')}>
                    회원가입
                </SignupBtn>
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: center;
`

const Margin = styled.div`
    margin: 27% 0px;
`

const InputWrap = styled.div`
   margin-bottom : 11%;
`

const SignupBtn = styled.div`
    color: #b8b8b8;
    text-align: center;
    margin: 30px;

`

export default login;


