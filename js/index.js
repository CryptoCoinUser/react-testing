require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import Image from './components/image';
import Gallery from './components/gallery';

const sampleImages = [
    <Image url={"http:\//www.example.com/image1.png"} description={"description 1"} />,
    <Image url={"http:\//www.example.com/image2.png"} description={"description 2"} />
]

const sampleHtmlImgs = [
    <img url="http:\//www.example.com/image1.png" alt={"alt 1"} />,
    <img url="http:\//www.example.com/image2.png" alt={"alt 2"} />,
    <img url="http:\//www.example.com/image23.png" alt={"alt 23"} />
]

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Gallery images={sampleHtmlImgs} />, document.getElementById('app'))
);

