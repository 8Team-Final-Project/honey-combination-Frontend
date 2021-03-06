import React from "react";
import styled from "styled-components";

//component
import DetailContentsBox from '../../../src/Components/DetailContentsBox';

//꿀조합 상세페이지
const CombinationDetail = () => {
  return (
    <React.Fragment>
        <Wrap>
            <DetailContentsBox/>
        </Wrap>
    </React.Fragment>
  );
};

// styled-component
const Wrap = styled.div`
    text-align : center;
` 

export default CombinationDetail;
