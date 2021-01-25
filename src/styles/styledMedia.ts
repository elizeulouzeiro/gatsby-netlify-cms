import { generateMedia } from "styled-media-query"

const styledMedia = generateMedia({
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
})

export default styledMedia
