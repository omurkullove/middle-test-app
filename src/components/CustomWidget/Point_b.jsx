import React from 'react';
import { Select } from 'antd';
import classes from './CustomWidget.module.css';
import markerSVG from '../../../public/Vector.svg';
import { options } from '../../mockData';

const Point_b = (props) => {
   const { value, handleChange } = props;

   return (
      <>
         <p className={classes.label}>Куда</p>
         <img src={markerSVG} alt='marker' className={classes.icon} />
         <Select
            placeholder='Точка Б'
            value={value.point_b}
            size={'large'}
            onChange={(value) => handleChange('point_b', value)}
            style={{
               width: 202,
               textAlign: 'center',
            }}
            options={options}
         />
      </>
   );
};

export default Point_b;
