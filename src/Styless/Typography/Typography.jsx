import React from 'react';
import './Typography.css';

function Typography() {
  return (
    <div>
      <h1 className="typography-title">Typography</h1>
      
      <div className="typography-headlines">
        <div className="typography-headlines-title">
          Headlines
        </div>
        <div className="typography-headlines-content">
          <div className="typography-header">Header</div>
          <div className="headline1">Headline 1</div>
          <div className="typography-desc">Semi Bold, 64/76</div>
          <div className="headline2">Headline 2</div>
          <div className="typography-desc">Semi Bold, 36/44</div>
          <div className="headline3">Headline 3</div>
          <div className="typography-desc">Semi Bold, 28/36</div>
          <div className="headline4">Headline 4</div>
          <div className="typography-desc">Semi Bold, 20/28</div>
        </div>
      </div>
    </div>
  );
}

export default Typography;