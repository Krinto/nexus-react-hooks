import React, { useState } from 'react'
import './content.scss';

export interface ContentProps {
    url: string;
}

const Content = (props: ContentProps) => {
    return (
      <iframe src={props.url} className="content" />
    );
};

export default Content;