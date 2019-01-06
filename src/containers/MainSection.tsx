import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import { getCompletedTodoCount } from '../selectors';
import { todoActions } from '../reducers';
import { IStore } from '..';
import { Dispatch } from '@redux-ts-starter-kit/core';
import { bindActionCreators } from '@redux-ts-starter-kit/core';

const mapStateToProps = (state: IStore) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainSection);
