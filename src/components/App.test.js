import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import App from './App';

const setup = (setupProps = {}) => {
  const store = configureStore()({});
  const wrapper = shallow(<App store={store} />);

  return {
    store,
    wrapper
  };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
