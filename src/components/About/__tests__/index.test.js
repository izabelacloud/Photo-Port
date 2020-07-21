import React from 'react';
import { render, cleanup }  from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test

    //First test 
    it('renders', () => {    // 'test' can be used instead of 'it'
        render(<About />);
    })

    //Second test
    it('matches snapshot DOM node structure', () => {
        //render About 
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })


})



