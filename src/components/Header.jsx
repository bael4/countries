import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from "./Container";
import { Link } from "react-router-dom";
const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;
export default function Header() {
  const [theme, setTheme] = useState("light");
  const toogleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toogleTheme}>
            {theme === "light" ? <IoMoonOutline /> : <IoMoon />}

            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
}
