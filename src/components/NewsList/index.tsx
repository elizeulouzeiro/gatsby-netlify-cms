import React, { useMemo } from "react";

import path from "path";
import { graphql, useStaticQuery } from "gatsby";

import { NewListProps, NewsListQuery, NewsListType } from "./NewsList.types";
import * as S from "./NewsList.styles";

const NewsList = ({ children }: NewListProps) => {
  const data: NewsListQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              image
              resume
            }
          }
        }
      }
    }
  `);

  const news: NewsListType[] = useMemo(
    () =>
      data.allMarkdownRemark.edges.map(({ node }) => ({
        ...node.frontmatter,
        id: node.id,
        image: path.basename(path.join(__dirname, node.frontmatter.image)),
      })),
    [data]
  );

  return <S.Wrapper>{children(news)}</S.Wrapper>;
};

export { NewsList };
