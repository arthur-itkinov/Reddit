import React, { useEffect } from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store';






export function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.__token__){
      dispatch(setToken(window.__token__))
    }
  }, []);

  return (
    <header className={styles.header}>
      
      <ThreadTitle/>
      <SortBlock/>
      <SearchBlock />
    </header>
  );
}
