import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { MenuDropdown } from './MenuDropdown/MenuDropdown';
import { MenuIcon } from '../../../Icons';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown 
    
        button={<button className={styles.menuButton}>
          <MenuIcon width={5} height={20}/>
        </button>}>
        <MenuDropdown/>
      </Dropdown>
      
    </div>
  );
}
