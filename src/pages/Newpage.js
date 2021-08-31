import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const Newpage = ({ match }) => {
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList catergory={category} />
    </>
  );
};

export default Newpage;
