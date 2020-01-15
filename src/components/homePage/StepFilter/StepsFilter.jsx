import React,{useState} from 'react'
import { Steps, Button, message } from 'antd';
import PriceFilter from '../../filterPage/priceFilter/priceFilter';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: '',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

let FilterSteps = () => {
  

  let [currentStep,setCurrentStep] = useState(0)

  let next =()=> {
    const current = currentStep + 1;
    setCurrentStep( current );
  }

  let prev=()=> {
    const current = currentStep - 1;
    setCurrentStep( current );
  }

  
    // const { current } = this.state;
    return (
      <div>
        <Steps current={currentStep}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[currentStep].content}</div>
        <div className="steps-action">
          {currentStep < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Дальше
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Готово
            </Button>
          )}
          {currentStep > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
              Вернуться
            </Button>
          )}
        </div>
      </div>
    );
  
}

export default FilterSteps