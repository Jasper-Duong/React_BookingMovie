import React from 'react';
import { Spin } from 'antd';

export default function LoadingContext(props) {
    const style = {
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        zIndex: "1",
        background: "#ffffff63",
    }

  return (
    <div>
        <Spin style={style}/>
        {props.children}
    </div>
     )
}

