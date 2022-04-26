import styles from './Search.module.css';

import { useState } from 'react';
import { DateRangePicker } from '@mantine/dates';
import { Calendar, Search } from 'tabler-icons-react';
import { Select } from '@mantine/core';
import { NumberInput } from '@mantine/core';

const HotelSearch = ({}) => {
  const [value, setValue] = useState(Date | null, Date | null);
  new Date(2022, 11, 1), new Date(2022, 11, 5);

  return (
    <div className={styles.container}>
      <Select
        label="City"
        icon={<Search size={16} />}
        placeholder="Oslo"
        searchable
        nothingFound="No options"
        data={['Oslo', 'Bergen', 'Stavanger', 'Molde']}
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
