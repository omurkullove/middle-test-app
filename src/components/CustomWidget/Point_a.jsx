import React from 'react';
import { Select } from 'antd';
import classes from './CustomWidget.module.css';
import markerSVG from '../../../public/Vector.svg';
import { options } from '../../mockData';

const Point_a = (props) => {
   const { value, handleChange } = props;

   return (
      <>
         <p className={classes.label}>Откуда</p>
         <img src={markerSVG} alt='marker' className={classes.icon} />
         <Select
            size={'large'}
            placeholder='Точка А'
            value={value.point_a}
            onChange={(value) => handleChange('point_a', value)}
            style={{
               width: 202,
               textAlign: 'center',
            }}
            options={options}
         />
      </>
   );
};

export default Point_a;
