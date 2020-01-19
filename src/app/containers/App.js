import { connect } from 'react-redux';
import { count } from '../selectors';
import { increaseCount, decreaseCount } from '../actions';
import { App } from '../components/App';

const mapStateToProps = state => ({
  count: count(state),
});

const mapDispatchToProps = {
  increaseCount,
  decreaseCount,
};
console.log(mapDispatchToProps)
const container = connect(mapStateToProps, mapDispatchToProps)(App);

export { container as App };
