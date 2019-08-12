import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import EventList from '../components/event-list';
import ShadowBoi from '../components/shadowboi';

const EventsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allEvent(sort: { fields: startDate, order: ASC }) {
        nodes {
          id
          name
          startDate
          endDate
          location
          url
          slug
        }
      }
    }
  `);

  const events = data.allEvent.nodes;
  return (
    <Layout>
      <ShadowBoi isChocolateVisible={true}>Let me holla at ya</ShadowBoi>
      <EventList events={events} />
    </Layout>
  );
};

export default EventsTemplate;
