import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import { ImageProps, ImageQuery } from "./Image.types"

const Image: React.FunctionComponent<ImageProps> = ({ src, alt, ...props }) => {
  const data: ImageQuery = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  )

  if (!match) return null

  const { node: { childImageSharp, publicURL, extension } = {} } = match

  if (extension === "svg" || !childImageSharp) {
    return <img src={publicURL} alt={alt} {...props} />
  }

  return <Img fluid={childImageSharp.fluid} alt={alt} {...props} />
}

export { Image }
