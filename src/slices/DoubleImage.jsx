import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const DoubleImage = ({ input }) => {
  // if (input.primary.caption.text && input.primary.caption_two.text) {
  //   return (
  //     <div className='two-img__wrap -observe'>
  //       <div className='slice__img'>
  //         <figure>
  //           <Img className='slice__img--img -observe' fluid={input.primary.image.localFile.childImageSharp.fluid} />
  //           <span className='slice__img--caption'>{input.primary.caption.text}</span>
  //         </figure>
  //       </div>
  //       <div className='slice__img'>
  //         <figure>
  //           <Img className='slice__img--img -observe' fluid={input.primary.image_two.localFile.childImageSharp.fluid} />
  //           <span className='slice__img--caption'>{input.primary.caption_two.text}</span>
  //         </figure>
  //       </div>
  //     </div>
  //   );
  // } else if (input.primary.caption.text) {
  //   return (
  //     <div className='two-img__wrap -observe'>
  //       <div className='slice__img'>
  //         <figure>
  //           <Img className='slice__img--img -observe' fluid={input.primary.image.localFile.childImageSharp.fluid} />
  //           <span className='slice__img--caption'>{input.primary.caption.text}</span>
  //         </figure>
  //       </div>
  //       <div className='slice__img'>
  //         <Img className='slice__img--img -observe' fluid={input.primary.image.localFile.childImageSharp.fluid} />
  //       </div>
  //     </div>
  //   );
  // } else if (input.primary.caption_two.text) {
  //   return (
  //     <div className='two-img__wrap -observe'>
  //       <div className='slice__img'>
  //         <Img className='slice__img--img -observe' fluid={input.primary.image.localFile.childImageSharp.fluid} />
  //       </div>
  //       <div className='slice__img'>
  //         <figure>
  //           <Img className='slice__img--img -observe' fluid={input.primary.image_two.localFile.childImageSharp.fluid} />
  //           <span className='slice__img--caption'>{input.primary.caption_two.text}</span>
  //         </figure>
  //       </div>
  //     </div>
  //   );
  // } else {
  return (
    <div className="two-img__wrap -observe">
      <div className="slice__img">
        <Img
          className="slice__img--img -observe"
          fluid={input.primary.image.localFile.childImageSharp.fluid}
        />
      </div>
      <div className="slice__img">
        <Img
          className="slice__img--img -observe"
          fluid={input.primary.image_two.localFile.childImageSharp.fluid}
        />
      </div>
    </div>
  );
  //}
};

export default DoubleImage;

DoubleImage.propTypes = {
  input: PropTypes.object.isRequired
};
