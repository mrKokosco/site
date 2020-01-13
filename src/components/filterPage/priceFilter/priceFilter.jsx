import React,{useState} from 'react';
import { Slider, InputNumber } from 'antd';
import "antd/dist/antd.css";



const PriceFilter = () => {
    const [inputValue1, setInputValue1] = useState(20000);
    const [inputValue2, setInputValue2] = useState(40000);
    const onChangeValue1 =(value)=>{ 
        setInputValue1(value[0])
        setInputValue2(value[1])
    }

    const onChangeInput1 =(value)=>{     
        onChangeValue1([value, inputValue2])    

    }

    const onChangeInput2 =(value)=>{     
        onChangeValue1([inputValue1,value])      

    }
  

    return (
        <div>
            <div>Цена</div>
            <Slider range
                min={0}
                max={100000}
                defaultValue={[inputValue1, inputValue2]}
                value={[typeof inputValue1 === 'number' ? inputValue1 : 0, typeof inputValue2 === 'number' ? inputValue2 : 0]}
                onChange={onChangeValue1}
                step={2000}                                
                tooltipVisible
            />
            <div>от</div>
            <InputNumber
                min={0}
                max={100000}
                style={{ marginLeft: 16 }}
                value={inputValue1}
                onChange={onChangeInput1}
                step={2000}
            />
            <div>до</div>
            <InputNumber
                min={0}
                max={100000}
                style={{ marginLeft: 16 }}
                value={inputValue2}
                onChange={onChangeInput2}
                step={2000}
            />

        </div>

    )

}

export default PriceFilter

// import React,{useState} from 'react';
// import { Slider, InputNumber } from 'antd';
// import "antd/dist/antd.css";



// const PriceFilter = () => {
//     const [inputValue1, setinputValue1] = useState(20000);
//     const [inputValue2, setInputValue2] = useState(40000);
//     const onChange =(value)=>{
//         setinputValue1(value) 

//     }
    

//     return (
//         <div>
//            <Slider
           
//             min={0}
//             max={100000}
            
//             onChange={onChange}
//             value={typeof inputValue1 === 'number' ? inputValue1 : 0}
            
//           />
//           <Slider range defaultValue={[20, 50]} />
//           {/* <InputNumber
//             min={0}
//             max={1000000}
//             style={{ marginLeft: 16 }}
         
//             value={inputValue1}
//             onChange={onChange}
//             step={2000}
//           /> */}
           

//         </div>

//     )

// }

// export default PriceFilter