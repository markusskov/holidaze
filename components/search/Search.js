import styles from './Search.module.css';

import { useState } from 'react';
import { DateRangePicker } from '@mantine/dates';
import { Calendar, Search } from 'tabler-icons-react';
import { Select } from '@mantine/core';
import { NumberInput } from '@mantine/core';

const HotelSearch = ({ hotel }) => {
  const [value, setValue] = useState(Date | null, Date | null);
  new Date(2022, 11, 1), new Date(2022, 11, 5);

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
      <NumberInput label="People" placeholder="2 people" max={5} min={0} />
    </div>
  );
};

export default HotelSearch;
