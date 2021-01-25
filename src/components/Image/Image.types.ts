import { FluidObject } from "gatsby-image"
import { ImgHTMLAttributes } from "react"

export interface ImageProps {
  alt: string
  className?: string
  src: string
}

export interface ImageQuery {
  images: {
    edges: [
      {
        node: {
          relativePath: string
          extension: string
          publicURL: string
          childImageSharp: {
            fluid: FluidObject
          }
        }
      }
    ]
  }
}
