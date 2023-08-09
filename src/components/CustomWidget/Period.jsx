import 'dayjs/locale/ru';

import { ConfigProvider, DatePicker } from 'antd';
import React, { useState } from 'react';

import classes from './CustomWidget.module.css';
import dayjs from 'dayjs';
import ru_RU from 'antd/es/locale/ru_RU';

const Period = (props) => {
   const { value, handleChange, setIsEndDate, isEndDate } = props;

   const [calendarOpen, setCalendarOpen] = useState(false);

   const disabledEndDate = (current) => {
      if (!isEndDate) {
         return current && current < dayjs().startOf('day');
      }
      return true;
   };

   const handleCloseCalendar = () => {
      setCalendarOpen(false);
   };

   return (
      <>
         <p className={classes.label}>Даты</p>
         <ConfigProvider locale={ru_RU}>
            <DatePicker.RangePicker
               style={{
                  width: 386,
                  padding: 8,
               }}
               open={calendarOpen}
               onClick={() => setCalendarOpen(true)}
               format={'YYYY-MM-DD'}
               disabledDate={disabledEndDate}
               onCalendarChange={(value) => handleChange('', value)}
               value={[value.start_date, !isEndDate ? value.end_date : null]}
               renderExtraFooter={() => (
                  <div className={classes.date__footer}>
                     <div className={classes.date__block}>
                        <input
                           type='checkbox'
                           onChange={(e) => setIsEndDate(e.target.checked)}
                        />
                        <p>Без конечной даты</p>
                     </div>

                     <button
                        className={classes.date__button}
                        onClick={handleCloseCalendar}
                     >
                        Готово
                     </button>
                  </div>
               )}
            />
         </ConfigProvider>
      </>
   );
};

export default Period;
