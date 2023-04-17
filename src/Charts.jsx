import React from 'react'
import Barr from './Barr';
import Col from './Col';
import Dough from './Dough';
import MostUsed from './MostUsed';
const Charts = ({ repo }) => {
  const languages = repo?.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});
  let mostUsed
  let fork
  let star
  let mostPopular
  if (languages) {
   mostUsed = Object.values(languages)?.sort((a, b) => {
        return b.value - a.value;
      })
      .slice(0, 5);
    // most stars per language
     mostPopular = Object.values(languages)?.sort((a, b) => {
        return b.stars - a.stars;
      })
      .map((item) => {
        return { ...item, value: item.stars };
      })
      .slice(0, 5);
    // stars, forks
    let { stars, forks } = repo?.reduce(
      (total, item) => {
        const { stargazers_count, name, forks } = item;
        total.stars[stargazers_count] = { label: name, value: stargazers_count };
        total.forks[forks] = { label: name, value: forks };
        return total;
      },
      {
        stars: {},
        forks: {},
      }
    );
    fork = Object.values(forks)?.slice(-5).reverse();
    star = Object.values(stars)?.slice(-5).reverse(); 
  }
  
  console.log(star)
  return (
    <div className='grid sm:grid-cols-2 gap-2 w-[90vw] place-items-center'>
      <Dough data={mostUsed} />
      <Barr Bardata={fork} />
      <Col coldata={mostPopular} />
      <MostUsed MostUsed={star} />
    </div>
  )
}

export default Charts