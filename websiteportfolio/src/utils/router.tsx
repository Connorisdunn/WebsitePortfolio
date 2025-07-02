import React from 'react';

// GitHub Pages SPA router helper
export const useGitHubPagesRouter = () => {
  React.useEffect(() => {
    // Check if we need to handle GitHub Pages routing
    const search = window.location.search;
    if (search.includes('/?/')) {
      const query = search.slice(1);
      if (query.startsWith('/?/')) {
        const route = query.slice(3).replace(/&/g, '?').replace(/~and~/g, '&');
        window.history.replaceState(null, '', '/' + route);
      }
    }
  }, []);
};