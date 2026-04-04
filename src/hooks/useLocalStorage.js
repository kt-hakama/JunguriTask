import { useState, useEffect } from 'react';

const STORAGE_KEY = 'junguri-task-data';

const defaultData = {
  lists: [],
};

function normalizeData(parsed) {
  if (!parsed || typeof parsed !== 'object') return defaultData;
  if (!Array.isArray(parsed.lists)) return defaultData;
  return { lists: parsed.lists };
}

export function useLocalStorage() {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? normalizeData(JSON.parse(stored)) : defaultData;
    } catch {
      return defaultData;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }
  }, [data]);

  return [data, setData];
}

export function resetAllData(setData) {
  setData(defaultData);
}
