import React from "react";
import styled from "styled-components";

const CommentModalBtn = ({ closeModal, deleteComment }) => {
  return (
    <>
      <EditButton>수정</EditButton>
      <DeleteButton onClick={deleteComment}>삭제</DeleteButton>
      <CancelButton onClick={closeModal}>취소</CancelButton>
    </>
  );
};

// 수정 버튼
const EditButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  padding: 12px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 1px;
  color: #878787;
  cursor: pointer;
`;
// 삭제 버튼
const DeleteButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  color: #ff7775;
  padding: 12px 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const CancelButton = styled.button`
  width: 100%;
  height: 70px;
  background-color: white;
  color: #878787;
  padding: 12px 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export default CommentModalBtn;
