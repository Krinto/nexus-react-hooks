import React, { useState, useRef, useEffect } from 'react'
import './content.scss';

export interface ContentProps {
    url: string;
}

const Content = (props: ContentProps) => {
  const[frameLoading, setFrameLoading] = useState(false);
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
        {frameLoading ? <h3>Loading</h3> : ""}
        <iframe src={props.url} className="content" ref={contentRef} />
      </div>
    );
};

export default Content;