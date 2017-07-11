import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Image from '../js/components/image';
import Gallery from '../js/components/gallery';

describe('Image component', function() {
    it('Renders the image and description',  function() {
        const url = "http:\//www.example.com/image.png";
        const description = "Example description";

        const renderer = TestUtils.createRenderer();
        renderer.render(<Image url={url} description={description} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery-image');

        const img = result.props.children[0];
        console.log(img);
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);

        const p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);
    });
});

describe('Gallery component', function() {
    it('Renders one or more images, each with description',  function() {
        // const url = "http:\//www.example.com/example-for-gallery.png";
        // const description = "image used in a gallery description";

        // const sampleImages = [
        //     <Image url={"http:\//www.example.com/image1.png"} description={"description 1"} />,
        //     <Image url={"http:\//www.example.com/image2.png"} description={"description 2"} />
        // ]

        // const sampleHtmlImgs = [
        //     <img url="http:\//www.example.com/image1.png" alt={"alt 1"} />,
        //     <img url="http:\//www.example.com/image2.png" alt={"alt 2"} />,
        //     <img url="http:\//www.example.com/image23.png" alt={"alt 23"} />
        // ]

        const renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={[]} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');

        // const img = result.props.children[0].props;
        // console.log(img);
        // img.type.should.equal('img');
        // img.props.src.should.equal(url);
        // img.props.alt.should.equal(description);

        // const p = result.props.children[1];
        // p.type.should.equal('p');
        // p.props.children.should.equal(description);


    });
});