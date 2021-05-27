import styled from "styled-components";
const Banner = () => {
  return (
    <Container>
      <BannerImage
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB407694131_.jpg"
        alt=""
      />
    </Container>
  );
};

export default Banner;
const Container = styled.div``;
const BannerImage = styled.img`
  width: 100%;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  margin-bottom: -150px;
  z-index: -1;
`;
