import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Visitor from './Visitor';

configure({adapter: new Adapter()})

describe('<Visitor />', () => {
    it('should render a complete list with all props', () => {
        const visitor = {
            name: 'alpha',
            countryName: 'Germany',
            countryCode: 'DE',
            birthDate: '1/1/1979'
        };
        const wrapper = shallow(<Visitor visitor={visitor} />);
        expect(wrapper.text()).toContain('alpha - Germany - 1/1/1979');
        expect(wrapper.find('img').hasClass('flag-de'));
    });

    it('should not contain flag if countryCode is mising', () => {
        const visitor = {
            name: 'alpha',
            countryName: 'Germany',
            birthDate: '1/1/1979'
        };
        const wrapper = shallow(<Visitor visitor={visitor} />);
        expect(wrapper.text()).toContain('alpha - Germany - 1/1/1979');
        expect(wrapper.find('img').exists).toBeNull;
    });

    it('should exclude name when missing', () => {
        const visitor = {
            countryName: 'Germany',
            countryCode: 'DE',
            birthDate: '1/1/1979'
        };
        const wrapper = shallow(<Visitor visitor={visitor} />);
        expect(wrapper.text()).toContain('Germany - 1/1/1979');
        expect(wrapper.find('img').hasClass('flag-de'));
    });

    it('should exclude country name when missing', () => {
        const visitor = {
            name: 'alpha',
            countryCode: 'DE',
            birthDate: '1/1/1979'
        };
        const wrapper = shallow(<Visitor visitor={visitor} />);
        expect(wrapper.text()).toContain('alpha - 1/1/1979');
        expect(wrapper.find('img').hasClass('flag-de'));
    });

    it('should exclude birthDate when missing', () => {
        const visitor = {
            name: 'alpha',
            countryName: 'Germany',
            countryCode: 'DE',
        };
        const wrapper = shallow(<Visitor visitor={visitor} />);
        expect(wrapper.text()).toContain('alpha - Germany');
        expect(wrapper.find('img').hasClass('flag-de'));
    });

});