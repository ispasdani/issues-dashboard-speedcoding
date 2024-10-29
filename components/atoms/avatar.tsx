import styled from "styled-components";

const AvatarImage = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
`;

const Avatar = ({ src, alt }: { src: string; alt: string }) => (
  <AvatarImage src={src} alt={alt} />
);

export default Avatar;
