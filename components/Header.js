import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge, Button, IconButton } from "@material-ui/core";
const Header = ({ categories }) => {
  const router = useRouter();
  const basket = [];
  const logginFn = () => {};
  const totalItems = () => {};
  const user = null;
  console.log(categories);
  const filterProducts = (category) => {
    if (category === "all") {
      router.push("/");
    }
    router.push(`/category/${category}`);
  };
  return (
    <MainContainer>
      <Container>
        {/* logo on the left */}
        <ImageLogo src="data:image/jpeg;base64,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" />
        {/*search-box */}
        <SearchContainer>
          <InputSearch type="text" />
          <SearchIcon />
        </SearchContainer>
        {/* ! 3 links  */}
        <NavContainer>
          <NavLink href="/">
            <HeaderOption>
              <SpanItem>hello </SpanItem>
              <SpanItem2>& tomastesfamariam </SpanItem2>
            </HeaderOption>
          </NavLink>

          <NavLink href="/">
            <HeaderOption>
              <SpanItem>returns </SpanItem>
              <SpanItem2>& orders </SpanItem2>
            </HeaderOption>
          </NavLink>

          <NavLink href="/">
            <HeaderOption>
              <SpanItem>your </SpanItem>
              <SpanItem2>& prime </SpanItem2>
            </HeaderOption>
          </NavLink>

          <NavLink href="/">
            <OptionBasket>
              <IconButton>
                {" "}
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartOutlined color="primary" />
                </Badge>
              </IconButton>
            </OptionBasket>
          </NavLink>
        </NavContainer>
      </Container>
      <Catogories>
        {categories?.map((cat, index) => (
          <Category onClick={(e) => filterProducts(cat)} key={index}>
            {cat}
          </Category>
        ))}
      </Catogories>
    </MainContainer>
  );
};

export default Header;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 100;
`;
const Catogories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #131921;
`;
const Category = styled(Button)`
  color: whitesmoke !important;
`;
const Container = styled.div`
  background-color: #131921;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 0.7rem;
`;
const ImageLogo = styled.img`
  width: 100px;
  color: white;
  object-fit: contain;
  margin-top: 15px;
`;
const SearchContainer = styled.div`
  display: flex;
  flex: 1;
`;
const InputSearch = styled.input`
  width: 100%;
  height: 27px;
  border: none;
  padding: 5px;
  outline: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

const SearchIcon = styled(SearchOutlined)`
  background-color: #febd68;
  height: 27px !important;
  padding: 5px !important;
  font-size: 25px !important;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const NavLink = styled(Link)`
  display: flex;
  color: whitesmoke;
  text-decoration: none;
`;
const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: whitesmoke;
  cursor: pointer !important;
`;
const SpanItem = styled.span`
  font-size: 10px;
`;
const SpanItem2 = styled.span`
  font-size: 13px;
  font-weight: 800;
`;
const OptionBasket = styled.div`
  font-size: 13px;
  font-weight: 800;
`;
