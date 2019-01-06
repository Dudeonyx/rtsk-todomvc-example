import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../selectors';
import { IStore } from '..';
import { todoActions } from '../reducers';
import { Dispatch } from '@redux-ts-starter-kit/core';
import { bindActionCreators } from '@redux-ts-starter-kit/core';

const mapStateToProps = (state: IStore) => ({
  filteredTodos: getVisibleTodos(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
