import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

//library
import Pagination from "react-js-pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Autoplay, Navigation]); // Autoplay : 자동 넘김, Navigation : 화살표 표시

//function
import { getCombinationListDB } from "../../src/Redux/Async/postAsync";

//Component
import Card from "../../src/Components/Card";
import SearchInput from "../../src/Components/Input/SearchInput";

//Img
import FirstEventImg from "../../src/Asset/Images/eventbnr1.svg";
import SecondEventImg from "../../src/Asset/Images/eventbnr2.svg";
import ThirdEventImg from "../../src/Asset/Images/eventbnr3.svg";

//꿀조합 페이지
const combination = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1); // 페이지

  const isloaded = useSelector((state) => state.post.loaded); //map 오류 제거용
  const postList = useSelector((state) => state.post?.postlist?.[0]); // 게시물 리스트
  const allPostList = useSelector((state) => state.post?.postlist?.[1]?.countAllpost); // 게시물 숫자

  //렌더링시 실행
  useEffect(() => {
    dispatch(getCombinationListDB(page));
  }, []);

  // 페이지 변경
  const handlePageChange = (page) => {
    setPage(page);
    pagiNation(page);
  };

  // 페이지에 게시글 가져오기
  const pagiNation = useCallback(
    (page) => {
      dispatch(getCombinationListDB(page));
    },
    [dispatch]
  );

  // 이벤트 안내 페이지로 가기
  const goEventInfo = () => {
    return router.push("/event/info");
  };

  return (
    <div>
      <PageBox>
        <SearchWrap>
          <SearchInput />
        </SearchWrap>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
        >
          <SwiperSlide>
            <EventBanner src={FirstEventImg.src} onClick={goEventInfo} />
          </SwiperSlide>
          <SwiperSlide>
            <a target="_blank" href="https://wpub6shfa65.typeform.com/to/rhCKtx33">
              <EventBanner src={SecondEventImg.src} />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <EventBanner src={ThirdEventImg.src} />
          </SwiperSlide>
        </Swiper>
        <CardWrap>
          {isloaded && (
            <>
              {postList &&
                postList?.map((post, id) => {
                  return <Card {...post} key={id} />;
                })}
            </>
          )}
        </CardWrap>
        <StylePagination>
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={allPostList}
            pageRangeDisplayed={10}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </StylePagination>
      </PageBox>
    </div>
  );
};

// styled-component
const StylePagination = styled.div`
  > .pagination {
    display: flex;
    justify-content: center;
    padding: 5px 15px 35px 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    // border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    // border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    // border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #3c3c3c;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #ffd86b;
    border-radius: 20px;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: white;
  }
  .page-selection {
    width: 48px;
    height: 30px;
    color: #ffd86b;
  }
`;

const SearchWrap = styled.div`
  padding: 5%;
`;

const EventBanner = styled.img`
  margin-top: 2%;
  width: 100%;
  cursor: pointer;
`;

const PageBox = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
`;

const CardWrap = styled.div`
  margin: 8% 6% auto;
`;

export default combination;
