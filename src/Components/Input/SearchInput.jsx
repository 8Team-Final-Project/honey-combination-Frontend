import React from "react";
import styled from "@emotion/styled";
import router from "next/router";

//materia-ui
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

//icon
import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
  return (
    <Form variant="standard" onClick={() => router.push("/search")}>
      <MuInput
        id="input-with-icon-adornment"
        placeholder=" 태그로 꿀조합을 검색해보세요! "
        startAdornment={
          <InputAdornment position="start">
            <BsSearch />
          </InputAdornment>
        }
      />
    </Form>
  );
}

// styled-component
const Form = styled(FormControl)`
  width: 100%;
`;

const MuInput = styled(Input)`
  color: #b8b8b8;
`;
