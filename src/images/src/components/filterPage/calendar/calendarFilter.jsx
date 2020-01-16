import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { enGB, eo, ru } from 'date-fns/esm/locale'


import "react-datepicker/dist/react-datepicker.css";
registerLocale('ru', ru)

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const CalenderFilter = () => {
    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <div>
            <div>Даты заселения</div>            
            <DatePicker
                minDate={new Date()}
                selected={startDate}
                onChange={date => setStartDate(date)}
                inline
                locale="ru"
            />

        </div>

    );
};

export default CalenderFilter