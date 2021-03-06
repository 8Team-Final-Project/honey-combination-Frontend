import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

//library
import Swal from "sweetalert2";

//function
import { postTagRankingDB } from "../../src/Redux/Async/tagRankingAsync";
import { addPostDB } from "../../src/Redux/Async/postAsync";

// componets
import HashTagWriteInput from "../../src/Components/Input/HashTagWriteInput";
import RectangleImage from "../../src/Components/Shared/RectangleImage";
import ValidationInput from "../../src/Components/Input/ValidationInput";
import RedButton from "../../src/Components/Button/RedButton";
import WhiteButton from "../../src/Components/Button/WhiteButton";

//꿀조합 작성페이지
const write = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [postTitle, setTitle] = useState("");
  const [postContent, setContent] = useState("");
  const [postImg1, setImg] = useState("");
  const [postTag, setTag] = useState("");
  const [postRecipe, setRecipe] = useState("");

  //게시물 추가하기
  const setPost = () => {
    const tagItem = {
      tagName: postTag[0]
    };
    const postItem = {
      postTitle: postTitle,
      postContent: postContent,
      postImg1: postImg1,
      postTag: postTag,
      postRecipe: postRecipe,
      mainlist: true,
      event1list: false,
      event2list: false,
      event3list: false
    };
    if (!postTitle) {
      return Swal.fire("제목을 입력해주세요", "", "error");
    }
    if (!postRecipe) {
      return Swal.fire("재료를 입력해주세요", "", "error");
    }
    if (!postContent) {
      return Swal.fire("내용을 입력해주세요", "", "error");
    }
    if (!postTag) {
      return Swal.fire("엔터로 태그를 입력해주세요", "", "error");
    }
    dispatch(addPostDB(postItem));
    dispatch(postTagRankingDB(tagItem));
    router.push("/combination");
  };

  return (
    <div>
      <WriteBox>
        <CenterBox>
          <RectangleImage edit imgUrl={postImg1 ? postImg1 : false} saveUrl={setImg}></RectangleImage>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="나의 꿀조합"
            value={postTitle}
            setValue={setTitle}
            maxValue={15}
            defaultText="제목을 입력해주세요"
            important
          ></ValidationInput>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="꿀조합 재료"
            value={postRecipe}
            setValue={setRecipe}
            maxValue={15}
            defaultText="꿀조합 재료를 입력해주세요"
            important
          ></ValidationInput>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="꿀조합 비법"
            value={postContent}
            setValue={setContent}
            maxValue={99}
            defaultText="꿀조합 비법을 설명해주세요"
            important
            multiline
            rows={3}
          ></ValidationInput>
        </CenterBox>
        <CenterBox>
          <HashTagWriteInput
            tagList={[...postTag]}
            setTagList={setTag}
            label="해시태그"
            placeholder="엔터를 눌러 태그를 완성해주세요"
            important
          />
        </CenterBox>
        <CenterBox>
          <FlexBox>
            <WhiteButton
              value="취소"
              onClick={() => {
                {
                  router.push("/combination");
                }
              }}
            />
            <RedButton value="작성" onClick={setPost} />
          </FlexBox>
        </CenterBox>
      </WriteBox>
    </div>
  );
};

// styled-component
const CenterBox = styled.div`
  width: 90%;
  margin: 20px auto;
`;

const WriteBox = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
`;

const FlexBox = styled.div`
  display: flex;
  margin-top: 60px;
`;

export default write;
