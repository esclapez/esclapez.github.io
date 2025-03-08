import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, UIEventHandler, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {portfolio,SectionId} from '../../data/data';
import {Portfolio} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import Section from '../Layout/Section';

const Portfolios: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();

  const {imageSrc, portfolioItems} = portfolio;

  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  useEffect(() => {
    if (scrollContainer.current) {
      const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
      setActiveIndex(newIndex);
    }
  }, [itemWidth, scrollValue]);

  const setPortfolio = useCallback(
    (index: number) => () => {
      if (scrollContainer !== null && scrollContainer.current !== null) {
        scrollContainer.current.scrollLeft = itemWidth.current * index;
      }
    },
    [],
  );
  const next = useCallback(() => {
    if (activeIndex + 1 === portfolioItems.length) {
      setPortfolio(0)();
    } else {
      setPortfolio(activeIndex + 1)();
    }
  }, [activeIndex, setPortfolio, portfolioItems.length]);

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
    setScrollValue(event.currentTarget.scrollLeft);
  }, []);

  useInterval(next, 10000);

  // If no portfolio, don't render the section
  if (!portfolioItems.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Portfolio}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-20 md:py-20 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
        <div className="z-10 w-full max-w-screen-lg px-2 lg:px-0">
          <div className="flex flex-col items-center gap-y-10 rounded-xl bg-gray-800/60 p-6 shadow-lg">
            <div
              className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {portfolioItems.map((portfolio, index) => {
                const isActive = index === activeIndex;
                return (
                  <Portfolio isActive={isActive} key={`${portfolio.title}-${index}`} portfolio={portfolio} />
                );
              })}
            </div>
            <div className="flex gap-x-4">
              {[...Array(portfolioItems.length)].map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    className={classNames(
                      'h-3 w-3 rounded-full bg-gray-300 transition-all duration-100 sm:h-4 sm:w-4',
                      isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-50',
                    )}
                    disabled={isActive}
                    key={`select-button-${index}`}
                    onClick={setPortfolio(index)}></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

const Portfolio: FC<{portfolio: Portfolio; isActive: boolean}> = memo(
  ({portfolio: {title, text, image, link}, isActive}) => (
    <div
      className={classNames(
        'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
        isActive ? 'opacity-100' : 'opacity-0',
      )}>
      <div className="col-span-1 flex justify-center">
        {image && (
          <div className="relative h-60 w-60 overflow-hidden rounded-xl sm:h-50 sm:w-50">
            <Image alt="Image description" className="h-full w-full object-cover" src={image}/>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-y-6">
        <h2 className="text-sm italic font-bold text-white sm:text-sm md:text-xl lg:text-2xl">{title}</h2>
        <p className="prose prose-sm font-medium text-white sm:prose-base">{text}</p>
        <a 
          className={classNames('-m-2 flex justify-end italic p-0 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-0 focus:ring-orange-500',
                     {'hover:text-white': link},
                     )}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          >
          Learn more ...
        </a>
      </div>
    </div>
  ),
);

export default Portfolios;
