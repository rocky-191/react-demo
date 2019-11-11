import React, { useEffect,useState }from 'react';
import {Button} from 'antd';

function Hook(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`hook实例，点击了${count}次`
    })
    return (
        <div>
            <p>你点击了{count}次</p>
            <Button onClick={()=>setCount(count+1)}>click</Button>
        </div>
    )
}

export default Hook;