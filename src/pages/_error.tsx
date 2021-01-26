import { NextPage, NextPageContext } from 'next';
import React from 'react';

interface ErrorProps {
  statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => (
  <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
);

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
