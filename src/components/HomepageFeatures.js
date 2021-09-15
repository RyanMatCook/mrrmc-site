import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Software Engineer',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I'm a software engineer with {new Date().getFullYear() - 2015} year's of experience. My primary skillset includes C# and React, 
        with most of my time being spend on enterprise backend services.
      </>
    ),
  },
  {
    title: 'Paragliding Pilot',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        My free time is spent travelling and paragliding at the most beautiful locations I can find. 
        I have been paragliding for {new Date().getFullYear() - 2020} year and enjoy flying long distance and following the sport.
      </>
    ),
  },
  {
    title: 'About me',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I live in South Africa and have since my birth date. I am currently {new Date().getFullYear() - 1993} years old.
        I have been overseas on more than one occasion, but would love to do it many more times!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
