import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';

export const { bootstrap, mount, unmount, update } = singleSpaReact({
  React,
  ReactDOMClient,
  errorBoundary(err: any, _info: any, _props: any) {
    return <div>Error: {err}</div>;
  },
  loadRootComponent: async () => {
    const { default: App } = await import('./App');
    return App;
  },
});
