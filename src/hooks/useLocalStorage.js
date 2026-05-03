import { useState, useEffect } from 'react';
import { MAX_COMPLETION_LOG_ENTRIES } from '../utils/completionLog';

const STORAGE_KEY = 'junguri-task-data';

const defaultData = {
  lists: [],
};

function normalizeList(list) {
  if (!list || typeof list !== 'object') return null;
  const tasks = Array.isArray(list.tasks) ? list.tasks : [];
  let completionLog = [];
  if (Array.isArray(list.completionLog)) {
    completionLog = list.completionLog
      .filter(
        (e) =>
          e &&
          typeof e === 'object' &&
          e.taskName != null &&
          e.completedAt != null
      )
      .map((e) => ({
        taskName: String(e.taskName),
        completedAt: Number(e.completedAt),
      }))
      .filter((e) => Number.isFinite(e.completedAt))
      .slice(0, MAX_COMPLETION_LOG_ENTRIES);
  }
  return {
    ...list,
    tasks,
    completionLog,
  };
}

function normalizeData(parsed) {
  if (!parsed || typeof parsed !== 'object') return defaultData;
  if (!Array.isArray(parsed.lists)) return defaultData;
  const lists = parsed.lists.map(normalizeList).filter(Boolean);
  return { lists };
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
