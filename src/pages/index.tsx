import React from "react";

import { Layout } from "src/components/Layout";
import { NewsCard } from "src/components/NewsCard";
import { NewsList } from "src/components/NewsList";

export default () => (
  <Layout>
    <NewsList>
      {(news) =>
        news?.map((item) => (
          <NewsCard
            description={item.resume}
            image={{ alt: item.title, source: item.image }}
            key={item.id}
            readTime={item.readTime}
            tags={item.tags}
            title={item.title}
          />
        ))
      }
    </NewsList>
  </Layout>
);
