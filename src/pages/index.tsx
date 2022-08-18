import React from 'react';
import  { Redirect } from 'react-router-dom';

export default function Home() {
  console.log('baseUrl', baseUrl);
  return <Redirect to={`${baseUrl}/docs/toc`} />;
}
