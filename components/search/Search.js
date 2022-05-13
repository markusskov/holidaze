import styles from './Search.module.css';

import { useState, useEffect } from 'react';
import { DateRangePicker } from '@mantine/dates';
import { Calendar, Search } from 'tabler-icons-react';
import { Select } from '@mantine/core';
import { NumberInput } from '@mantine/core';
import Cookies from 'js-cookie';

const HotelSearch = ({ hotels }) => {
  const [value, setValue] = useState([Date | null][Date | null]);
  const [people, setPeople] = useState('');
  new Date(2022, 11, 1), new Date(2022, 11, 5);
  // Saving dates in LocalStorage to save it as an array
  useEffect(() => {
    localStorage.setItem('date', JSON.stringify(value));
    Cookies.set('people', people);
    console.log(value);
  }, [people, value]);
  return (
    <div className={styles.container}>
      <Select
        label="Country"
        icon={<Search size={16} />}
        placeholder="Norway"
        searchable
        nothingFound="No options"
        data={['Norway', 'Spain', 'France', 'Italy']}
      />
      <DateRangePicker
        label="Date"
        icon={<Calendar size={16} />}
        placeholder="To - From"
        value={value}
        onChange={setValue}
      />
      <NumberInput
        label="People"
        placeholder="2 people"
        max={5}
        min={0}
        value={people}
        onChange={setPeople}
      />
    </div>
  );
};

export default HotelSearch;
