import ReactGA from 'react-ga4';

const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;
let isInitialized = false;

// Initialize Google Analytics if tracking ID is available
if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
  isInitialized = true;
}

// Safe wrapper functions for Google Analytics
export const sendPageview = (page, title) => {
  if (isInitialized) {
    ReactGA.send({ hitType: "pageview", page, title });
  }
};

export const sendEvent = (eventData) => {
  if (isInitialized) {
    ReactGA.event(eventData);
  }
};

export { ReactGA };
export default { sendPageview, sendEvent, ReactGA };