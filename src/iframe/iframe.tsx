import React, { useState, useRef, useEffect } from 'react'
import { Progress } from "rbx";
import './iframe.scss';

export type IFrameProps = {
    url: string;
}

const IFrame = (props: IFrameProps) => {
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
      <div className="iframe-window">
        {frameLoading && <Progress className="iframe-progress" size="small" color="primary"/>}
        <iframe src={props.url} className="iframe" ref={contentRef} />
      </div>
    );
};

export default IFrame;