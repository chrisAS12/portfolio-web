import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Cumulative Layout Shift - how easy it is to engage with elements on my site
      getFID(onPerfEntry); // First Input Delay - how fast things load after activity
      getFCP(onPerfEntry); // Largest Contentful Paint - how fast big things load in page
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
