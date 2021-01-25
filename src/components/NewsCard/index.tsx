import * as React from "react";

import { Button } from "src/components/Button";
import { Image } from "src/components/Image";
import { ReadTime } from "../ReadTime";

import * as S from "./NewsCard.styles";
import { NewsCardProps } from "./NewsCard.types";

const NewsCard: React.FunctionComponent<NewsCardProps> = ({
  description,
  image,
  readTime,
  title,
}) => (
  <S.Wrapper>
    <Image src={image.source} alt={image.alt} className="card-image" />
    <S.Content>
      <ReadTime time={readTime} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Button>Leia mais</Button>
    </S.Content>
  </S.Wrapper>
);

export { NewsCard };
