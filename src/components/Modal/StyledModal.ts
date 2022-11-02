import styled from 'styled-components';
import Variables from '../../styles/variables';

type StyledModalProps = {
  type: 'regular' | 'minified';
};

type OpenModalType = {
  isOpen: boolean;
};

export const StyledModalShadow = styled.div<OpenModalType>`
  position: fixed;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const StyledModal = styled.div<StyledModalProps & OpenModalType>`
  position: fixed;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  min-height: 224px;
  min-width: 320px;
  width: ${(props) => (props.type === 'regular' ? 560 : 320)}px;
  max-height: 90vh;
  overflow-y: scroll;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #c6c6c6;
  box-shadow: 0 0 10px 0 rgba(34, 60, 80, 0.2);
  padding: 30px 10px 10px 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .close-button {
    position: absolute;
    right: 0;
    top: 0;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
  ${(props) => props.type === 'regular'
    && `
  @media screen and (max-width: ${Variables.bp.l}px) {
    width: 460px;
  }
  @media screen and (max-width: ${Variables.bp.m}px) {
    width: 320px;
  }`}
`;
