import { StyledLoadingContainer } from "./StyledLoading";

import React from "react";
import { Icon } from "semantic-ui-react";

function Loading() {
  return (
    <StyledLoadingContainer>
      {/* <StyledLoading data-testid="loading" /> */}
      <Icon loading name="spinner" />
    </StyledLoadingContainer>
  );
}

export default Loading;
