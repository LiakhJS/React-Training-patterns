import React from "react";
import './index.css';
function PropsTemplate(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}
function Contacts() {
    return <div className="Contacts">helo</div> ;
  }
  
  function Chat() {
    return <div className="Chat">hi</div> ;
  }
function RenderOfChildren() {
    return (
        <PropsTemplate left={<Contacts />}
            right={<Chat />} />
    );
}

export default RenderOfChildren;