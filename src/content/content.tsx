import React, { useState, useRef, useEffect } from 'react'
import { Progress } from "rbx";

import "rbx/index.css";
import './content.scss';

export type ContentProps = {
    url: string;
}

const Content = (props: ContentProps) => {
  const [frameLoading, setFrameLoading] = useState(false);
  const contentRef = useRef<HTMLIFrameElement | null>(null)

    useEffect(() => {
      setFrameLoading(true);
      
    }, [props.url]);

    useEffect(() => {
      if(contentRef.current != null){
        contentRef.current.addEventListener("load", () =>{
          setFrameLoading(false);
        });
      }
    }, [contentRef]);

    return (
      <div>
        {frameLoading && <Progress size="small" color="primary"/>}
        <iframe src={props.url} className="content" ref={contentRef} />
      </div>
    );
};

export default Content;