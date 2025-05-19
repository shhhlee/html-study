'use client';
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const popularPostList = [
  {id:1, date:"25.05.16", title:"오늘 점심 뭐 먹지"},
  {id:2, date:"25.05.16", title:"비트코인"},
  {id:3, date:"25.05.16", title:"비온다"},
  {id:4, date:"25.05.16", title:"여행가자"},
];


export default function Home() {
  return (
    <>

    <TopBar>
      <Logo>MaskBook</Logo>
      <SignIn>SignIn</SignIn>
    </TopBar>

    <Main>
      <LeftPanel>
        <SearchBox>
          <input type="text" placeholder="Search" />
        </SearchBox>
        <PopularArea>
          <PopularHeading>Popular</PopularHeading>
          <List>
            {popularPostList.map(({id, date, title}) => (
              <Link href={`/post/${id}`} key={id}>
                <ListRow>
                  <span>{title}</span>
                  <span>{date}</span>
                </ListRow>

              </Link>
            )
            )}
          </List>
        </PopularArea>
      </LeftPanel>
      <RightPanel>
        <Image
          src = {"/ad.PNG"}
          alt="광고"
          fill
        />
      </RightPanel>
    </Main>
    </>
  );
}


const TopBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to right, #7C38CC, #EAE1F4); 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  z-index: 999;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  font-style: bold italic;
  transform: skewX(-13deg);
`;

const SignIn = styled.button`
  background-color: #7F55B1;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  font-style: bold italic;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5f3fb4;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 3rem;
  margin: 3rem auto;
  margin-top: 130px;
  padding: 0 1rem;
  max-width: 1000px;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightPanel = styled.div`
  aspect-ratio: 1/2;
  position: relative;
  cursor: pointer;
`;


const SearchBox = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 2px solid #ccc;
  border-radius: 2rem;
  font-size: 1rem;

  &::before {
    content: '🔍';
    margin-right: 0.5rem;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
    background: transparent;
  }
`;

const PopularArea = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PopularHeading = styled.div`
  font-size: 2rem;
  font-weight: 1000;
  font-style: bold italic;
  margin-bottom: 1rem;
`;

const List = styled.div`
  border-top: 1px solid #000;
`;

const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid #eee;
  font-size: 1rem;

  span:first-child {
    font-weight: 600;
  }

  span:last-child {
    color: #333;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;
