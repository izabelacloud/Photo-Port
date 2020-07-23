import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);


describe('ContactForm component', () => {
    //renders About test

    //First test 
    it('renders', () => {    // 'test' can be used instead of 'it'
        render(<ContactForm />);
    })

    //Second test
    it('matches snapshot DOM node structure', () => {
        //render About 
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    })


})