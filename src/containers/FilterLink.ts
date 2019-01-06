import { connect } from 'react-redux';
import Link from '../components/Link';
import { IStore } from '..';
import { Dispatch } from '@redux-ts-starter-kit/core';
import { setVisibilityFilter } from '../reducers';

const mapStateToProps = (state: IStore, ownProps: { filter: string }) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: { filter: string },
) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);
