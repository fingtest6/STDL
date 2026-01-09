import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '奇点',
    Svg: require('@site/static/img/qd.svg').default,
    description: (
      <>
        奇点是一个神奇的东西,蕴含超越物理法则的能量,或许是科技进度的方法,或许是解决异常神奇的方法
      </>
    ),
  },
  {
    title: '关于我们',
    Svg: require('@site/static/img/yj.svg').default,
    description: (
      <>
        我们主要工作是研究奇点
      </>
    ),
  },
  {
    title: '武器制作',
    Svg: require('@site/static/img/wq.svg').default,
    description: (
      <>
          在科技的突破下我们可以,用奇点来制作一些武器或装备来解决异常
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
