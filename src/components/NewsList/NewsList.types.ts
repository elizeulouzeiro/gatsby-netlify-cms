export type NewsListType = {
  id: string;
  image: string;
  resume: string;
  title: string;
};

export interface NewListProps {
  children: (news: NewsListType[]) => JSX.Element[] | JSX.Element;
}

export interface NewsListQuery {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: string;
          frontmatter: {
            image: string;
            resume: string;
            title: string;
          };
        };
      }
    ];
  };
}
