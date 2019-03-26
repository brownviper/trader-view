// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import NewTrader from './NewTrader';

const setup = (setupProps = {}) => {
    const store = configureStore()({ traders: [] });
    const wrapper = shallow(<NewTrader store={store} />);

    return {
        store,
        wrapper
    };
};

it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
});

it('onSubmit calls preventDefault to stop form submit', () => {
    let preventDefault = jest.fn();
    let { wrapper } = setup();
    let form = wrapper.shallow().shallow().find('form');
    form.simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
});

