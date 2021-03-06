import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

//function
import { editPostDB } from "../../../src/Redux/Async/postAsync";

//component
import RectangleImage from "../../../src/Components/Shared/RectangleImage";
import ValidationInput from "../../../src/Components/Input/ValidationInput";
import RedButton from "../../../src/Components/Button/RedButton";
import WhiteButton from "../../../src/Components/Button/WhiteButton";

//꿀조합 수정페이지
const combinationEdit = () => {
  const disPatch = useDispatch();
  const router = useRouter();
  const postId = useRouter().query.id;

  // state관리
  const [postImg, setPostImg] = useState(""); //게시물 이미지 관리
  const [postTitle, setPostTitle] = useState(""); //게시물 제목 관리
  const [postRecipe, setPostRecipe] = useState(""); // 게시물 레시피 관리
  const [postContent, setPostContent] = useState(""); // 게시물 본문 관리

  // state에서 값 가져오기 
  const getPostImg = useSelector((state) => state.post.post?.postImg); //게시물 이미지
  const getPostTitle = useSelector((state) => state.post.post?.postTitle); //게시물 제목
  const getPostRecipe = useSelector((state) => state.post.post?.postRecipe); //게시물 레시피
  const getPostContent = useSelector((state) => state.post.post?.postContent); // 게시물 본문

  //렌더링시 동작
  React.useEffect(() => {
    if (getPostImg && getPostImg !== postImg) setPostImg(getPostImg);
    if (getPostTitle && getPostTitle !== postTitle) setPostTitle(getPostTitle);
    if (getPostRecipe && getPostRecipe !== postRecipe) setPostRecipe(getPostRecipe);
    if (getPostContent && getPostContent !== postContent) setPostContent(getPostContent);
  }, [getPostImg, getPostTitle, getPostRecipe, getPostContent]);

  //게시글 수정하기
  const editPost = () => {
    const postItem = {
      postImg: postImg,
      postTitle: postTitle,
      postRecipe: postRecipe,
      postContent: postContent,
      postId: postId
    };
    disPatch(editPostDB(postItem));
    router.push(`/combination/detail/${postId}`);
  };

  return (
    <Wrap>
      <WriteBox>
        <CenterBox>
          <RectangleImage edit imgUrl={postImg ? postImg : false} saveUrl={setPostImg}></RectangleImage>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="제목을 입력해주세요"
            value={postTitle}
            setValue={setPostTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            maxValue={10}
            defaultText
            important
          ></ValidationInput>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="재료를 입력해주세요"
            value={postRecipe}
            setValue={setPostRecipe}
            onChange={(e) => setPostRecipe(e.target.value)}
            maxValue={15}
            defaultText
            important
          ></ValidationInput>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="내용을 입력해주세요"
            value={postContent}
            setValue={setPostContent}
            onChange={(e) => setPostContent(e.target.value)}
            maxValue={99}
            defaultText
            important
            multiline
            rows={5}
          ></ValidationInput>
        </CenterBox>

        <CenterBox>
          <FlexBox>
            <WhiteButton
              value="취소"
              onClick={() => {
                {
                  router.push(`/combination/detail/${postId}`);
                }
              }}
            />
            <RedButton
              value="저장"
              onClick={() => {
                editPost();
                {
                  router.push(`/combination/detail/${postId}`);
                }
              }}
            />
          </FlexBox>
        </CenterBox>
      </WriteBox>
    </Wrap>
  );
};

// styled-component
const Wrap = styled.div`
  margin: auto;
`;

const CenterBox = styled.div`
  width: 90%;
  margin: 10px auto;
`;

const WriteBox = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
`;

const FlexBox = styled.div`
  display: flex;
`;

export default combinationEdit;
