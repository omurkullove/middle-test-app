import 'dayjs/locale/ru';

import React, { useState } from 'react';

import Period from './Period';
import Point_a from './Point_a';
import Point_b from './Point_b';
import classes from './CustomWidget.module.css';
import dayjs from 'dayjs';

dayjs.locale('ru');

const CustomWidget = () => {
   const [value, setValue] = useState({
      point_a: '',
      point_b: '',
      start_date: null,
      end_date: null,
   });

   const [isEndDate, setIsEndDate] = useState(false);

   const handleChange = (name, value) => {
      if (Array.isArray(value)) {
         setValue((prev) => ({
            ...prev,
            start_date: value[0],
            end_date: value[1],
         }));
      } else {
         setValue((prev) => ({
            ...prev,
            [name]: value,
         }));
      }
   };

   const handleSubmit = () => {
      const formattedValues = {
         point_a: value.point_a,
         point_b: value.point_b,
         start_date: value?.start_date
            ? value?.start_date?.format('YYYY-MM-DD')
            : null,
         end_date: !isEndDate ? value.end_date?.format('YYYY-MM-DD') : null,
      };
      if (isObjectEmpty(formattedValues)) {
         alert('Идет поиск, ожидайте....');
         console.log(formattedValues);
      } else {
         alert('Заполните поля');
      }
   };

   const isObjectEmpty = (obj) => {
      for (let i in obj) {
         if (!obj[i] && !isEndDate) {
            return false;
         }
      }
      return true;
   };

   return (
      <main className={classes.parent}>
         <div className={classes.block}>
            <Point_a value={value} handleChange={handleChange} />
         </div>
         <div className={classes.block}>
            <Point_b value={value} handleChange={handleChange} />
         </div>
         <div className={classes.block}>
            <Period
               value={value}
               handleChange={handleChange}
               setIsEndDate={setIsEndDate}
               isEndDate={isEndDate}
            />
         </div>
         <div className={classes.block}>
            <button className={classes.find__button} onClick={handleSubmit}>
               Найти
            </button>
         </div>
      </main>
   );
};

export default CustomWidget;
