import { connect } from 'react-redux';
import Header from '../components/Header';
import { todoActions } from '../reducers';

const mapDispatchToProps = { addTodo: todoActions.addTodo };
export default connect(
  null,
  mapDispatchToProps,
)(Header);
