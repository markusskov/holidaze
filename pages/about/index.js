import SectionWithImage from '../../components/sections/sectionWithImage/SectionWithImage';
import style from './About.module.scss';
import styles from '../../styles/Home.module.css';
import { ThemeIcon, Accordion } from '@mantine/core';
import {
  Palette,
  AddressBook,
  BabyCarriage,
  Soup,
  Bus,
  Book,
  Discount2,
  DogBowl,
  Edit,
  BookOff,
} from 'tabler-icons-react';

const About = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <SectionWithImage
          title={'About us'}
          subtitle="Lorem ipsum solo dor limet"
          text={
            ' Sed bibendum eleifend lectus vel rhoncus. Duis vel venenatis felis. Aliquam ac ex quis diam tempor sodales ac ac sapien. Ut bibendum eros eget est aliquam, ut laoreet purus eleifend. Nullam iaculis, magna in feugiat tincidunt, arcu est vulputate ex, vitae malesuada nunc neque a ex. '
          }
          image={'images/howitworks.png'}
        />
        <h2>FAQ</h2>
        <Accordion disableIconRotation>
          <Accordion.Item
            label="About us "
            icon={
              <ThemeIcon color="orange" variant="light">
                <Palette size={14} />
              </ThemeIcon>
            }
          >
            Holidaze offer a variaty of hotels located in 12 different
            destinations. Dedicated to always offer the best service at the best
            price, our regular customers guarantee our family service and give
            us their confidence year after year . Make your reservation with us
            and start enjoying the exclusive advantages we offer you! Here you
            can see all the options for your next trip.
          </Accordion.Item>
          <Accordion.Item
            label="How can I confirm that you have received my reservation?"
            icon={
              <ThemeIcon color="orange" variant="light">
                <AddressBook size={14} />
              </ThemeIcon>
            }
          >
            If you have booked through our website, in the upper right part of
            the web you will find the section &quot;My reservations&quot; where,
            with your email and the booking number, you can confirm that
            everything is ready for your stay.
          </Accordion.Item>
          <Accordion.Item
            label="Up to what age are they considered children? "
            icon={
              <ThemeIcon color="orange" variant="light">
                <BabyCarriage size={14} />
              </ThemeIcon>
            }
          >
            Children under 2 years old are considered babies and do not pay as
            guests. From 2 years up to 12, they are considered children and pay
            as such. From 13 years old they count as an adult and pay the full
            price, except in Best Delta (Mallorca) where from 15 years old they
            count as an adult. Always remember to inform the age of the children
            when making your reservation. In no case may minors (up to 18 years
            old) stay without the guardianship of an adult.
          </Accordion.Item>
          <Accordion.Item
            label="What is the restaurant schedule? "
            icon={
              <ThemeIcon color="orange" variant="light">
                <Soup size={14} />
              </ThemeIcon>
            }
          >
            Each hotel has its own schedules. You can check the
            restaurant&apos;s schedule in the Services section of each hotel
            page, by clicking on the Restaurant line
          </Accordion.Item>
          <Accordion.Item
            label="How can I get to the hotel?"
            icon={
              <ThemeIcon color="orange" variant="light">
                <Bus size={14} />
              </ThemeIcon>
            }
          >
            On the website of each hotel you will find the address and a google
            maps icon. Click on the icon to open the map, and check your
            location to see the best route to the hotel.
          </Accordion.Item>
          <Accordion.Item
            label="How can I book?"
            icon={
              <ThemeIcon color="orange" variant="light">
                <Book size={14} />
              </ThemeIcon>
            }
          >
            We propose you to make your reservation through our official
            website, or by telephone by calling the hotel or the Best Hotels
            reservation center.
          </Accordion.Item>
          <Accordion.Item
            label="Do you have any discount code?"
            icon={
              <ThemeIcon color="orange" variant="light">
                <Discount2 size={14} />
              </ThemeIcon>
            }
          >
            Occasionally we make discounts that require the use of a promotional
            code in the booking process. We report these discounts to our
            registered customers. Register now and stay updated so you
            don&apos;t miss a thing!
          </Accordion.Item>
          <Accordion.Item
            label="Pets Allowed?"
            icon={
              <ThemeIcon color="orange" variant="light">
                <DogBowl size={14} />
              </ThemeIcon>
            }
          >
            We know that your best friend is very important to you but, due to
            hygiene and security reasons in our hotels and apartments, pets are
            not allowed. You can always resort to trusted nurseries in your
            locality, so that during your holidays, your pet stays in good
            hands.
          </Accordion.Item>
          <Accordion.Item
            label="Can I modify my reservation?"
            icon={
              <ThemeIcon color="orange" variant="light">
                <Edit size={14} />
              </ThemeIcon>
            }
          >
            To modify a reservation you have made on our website, see the page
            My Reservations here. If the reservation has been made through a
            travel agency or other web page, you must contact them in order to
            request any modification you may need.
          </Accordion.Item>
          <Accordion.Item
            label="Can I cancel my reservation? "
            icon={
              <ThemeIcon color="orange" variant="light">
                <BookOff size={14} />
              </ThemeIcon>
            }
          >
            If your reservation is not a non-refundable one, you have up to 48
            hours before the arrival to cancel without fees.
          </Accordion.Item>
        </Accordion>
      </div>
    </main>
  );
};

export default About;
