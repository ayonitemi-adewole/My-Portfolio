import { useEffect, useState } from 'react';

const TECH_KEYWORDS = {
  react: 'React',
  typescript: 'TypeScript',
  firebase: 'Firebase',
  shadcn: 'ShadCN UI',
  framer: 'Framer Motion',
  paystack: 'Paystack',
  flutterwave: 'Flutterwave',
  coingecko: 'CoinGecko',
};

// Project ids are 1-based positions in projects.json (used in /project-details/:id).
const withMeta = (project, index) => {
  const text = project.description.toLowerCase();
  const tech = Object.entries(TECH_KEYWORDS)
    .filter(([key]) => text.includes(key))
    .map(([, label]) => label);
  return { ...project, id: index + 1, tech: tech.length ? tech : ['React'] };
};

let cache = null;
let pending = null;

const loadProjects = () => {
  if (cache) return Promise.resolve(cache);
  if (!pending) {
    pending = fetch('/data/projects.json')
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load projects (${res.status})`);
        return res.json();
      })
      .then((data) => {
        cache = data.map(withMeta);
        return cache;
      })
      .catch((err) => {
        pending = null;
        throw err;
      });
  }
  return pending;
};

export const useProjects = () => {
  const [state, setState] = useState(() => ({
    projects: cache ?? [],
    loading: !cache,
    error: null,
  }));

  useEffect(() => {
    if (cache) return;
    let active = true;
    loadProjects()
      .then((projects) => active && setState({ projects, loading: false, error: null }))
      .catch((error) => active && setState({ projects: [], loading: false, error }));
    return () => {
      active = false;
    };
  }, []);

  return state;
};
