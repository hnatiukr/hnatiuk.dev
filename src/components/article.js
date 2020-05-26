import React from 'react';

const Article = ({
  content: {
    myName,
    mainHeader,
    mainPhoto: {
      file: { url },
    },
    mainContent,
    mainFooter,
  },
}) => {
  return (
    <div>
      <h1>{myName}</h1>
      <h2>{mainHeader}</h2>
      <img src={url} alt={myName} />
      <p>{mainContent.mainContent}</p>
      <p>{mainFooter.mainFooter}</p>
    </div>
  );
};

export default Article;
