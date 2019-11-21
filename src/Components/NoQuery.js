import React from 'react';

const NoQuery = props => {

  let queries = [
    'news',
    'sports',
    'facebook',
    'youtube',
    'amazon',
    'instagram',
    'weather',
    'finance',
    'entertainment',
    'economy',
    'netflix',
    'f1',
    'space',
    'politics'
  ]

  let query = queries[Math.floor(Math.random() * queries.length)];
  let url = "/?q=" + query + "&page=1"

  return (
    <div>
      <h5>Search entries or whatever you want to search (news, sports, economy). For developers <a target="_BLANK" rel="noopener noreferrer" href="https://github.com/davidesantangelo/feedi">API</a>.</h5>
      <p><br></br><a href={url}><button type="button" className="btn btn-primary">choose for me <i className="fas fa-random"></i></button></a> <a href="/?q=blackfriday"><button type="button" className="btn btn-warning">black friday rss<i className="fas fa-shopping-cart"></i></button></a></p> 
      <p></p> 
    </div>
  );
  
}

export default NoQuery;