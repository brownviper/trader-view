// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import NewTrade from './NewTrade';

const setup = (setupProps = {}) => {
    const store = configureStore()({ traders: [] });
    const wrapper = shallow(<NewTrade store={store} />);

    return {
        store,
        wrapper
    };
};

xit('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
});

xit('onSubmit calls preventDefault to stop form submit', () => {
    let preventDefault = jest.fn();
    let { wrapper } = setup();
    let form = wrapper.shallow().shallow().find('form');
    form.simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
});

xit('onSubmit dispatches action if input.value is set', () => {
    const { store, wrapper } = setup();
    let preventDefault = jest.fn();
    const deeperWrapper = wrapper.shallow();

    deeperWrapper
        .find('input')
        .simulate('change', { currentTarget: { value: 'new trader' } });

    deeperWrapper.find('form').simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalled();
    expect(store.getActions()).toEqual([
        { id: 0, type: 'ADD_TRADE', timeStamp: jest.any}
    ]);
});

