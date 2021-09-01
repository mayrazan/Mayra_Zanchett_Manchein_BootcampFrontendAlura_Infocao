import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const Status = ({ status }) => <S.Status>{status}</S.Status>;

export default Status;

Status.propTypes = {
  status: PropTypes.string.isRequired,
};
