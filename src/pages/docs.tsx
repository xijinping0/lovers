import React from 'react';
import  { Redirect } from 'react-router-dom';

const baseUrl = process.env.BASE_URL ?? '/lovers';

export default function Home() {
  return <Redirect to={`${baseUrl}/docs/toc`} />;
}
