import { StyledLoading, StyledLoadingContainer } from "./StyledLoading";

import React from "react";

function Loading() {
  return (
    <StyledLoadingContainer>
      <StyledLoading data-testid="loading" />
    </StyledLoadingContainer>
  );
}

export default Loading;
