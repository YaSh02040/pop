import {useState} from 'react';
import Model from './Model';
import Backdrop from './Backdrop';
function Pop(){
    const[data,setData]=useState(false);
    function Yash(){
        setData(true);
    }
    function Yas(){
        setData(false)
    }
    return(
    <div>
        <button className='btn' onClick={Yash}>Click</button>
        {data && <Model onClick={Yas}/>}
        {data && <Backdrop onClick={Yas}/>}

    </div>
    )
}
export default Pop;