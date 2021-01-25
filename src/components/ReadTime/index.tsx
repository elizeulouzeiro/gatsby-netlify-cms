import * as React from "react";
import { FaRegClock } from "react-icons/fa";

import * as S from "./ReadTime.styles";
import { ReadTimeProps } from "./ReadTime.types";

const ReadTime = ({ time }: ReadTimeProps) => (
  <S.Wrapper>
    <FaRegClock />
    <span title="Tempo de leitura">{time} min</span>
  </S.Wrapper>
);

export { ReadTime };
