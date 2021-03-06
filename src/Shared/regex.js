//글자수(3글자 이상,10글자 이하)
const nickname = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣0-9]{3,10}$/;

//email형식
const email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

//영어대소문자+숫자+특수문자(_,-)+글자수(6글자 이상, 10글자 이하)
const password = /^[a-zA-Z0-9_-]{6,10}$/;

const regex = { nickname, email, password };

export default regex;
