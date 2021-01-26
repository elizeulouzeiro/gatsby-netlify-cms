import * as React from "react";

import { Button } from "src/components/Button";
import { Image } from "src/components/Image";
import { ReadTime } from "src/components/ReadTime";
import { Tag } from "src/components/Tag";

import * as S from "./NewsCard.styles";
import { NewsCardProps } from "./NewsCard.types";

const NewsCard: React.FunctionComponent<NewsCardProps> = ({
  description,
  image,
  readTime,
  title,
  tags,
}) => (
  <S.Wrapper>
    <Image src={image.source} alt={image.alt} className="card-image" />
    <S.Content>
      {tags?.length > 0 && (
        <S.Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </S.Tags>
      )}
      <ReadTime time={readTime} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Button>Leia mais</Button>
    </S.Content>
  </S.Wrapper>
);

export { NewsCard };
