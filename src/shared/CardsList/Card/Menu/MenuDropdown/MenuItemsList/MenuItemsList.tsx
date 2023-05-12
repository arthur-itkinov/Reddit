import React from 'react';

import styles from './menuitemslist.css';
import { generateId } from '../../../../../../utils/react/generateRandomindex';
import { EIcon, Icon } from '../../../../../Icon';
import classNames from 'classnames';
import { EColor, Text } from '../../../../../Text';



interface IItem {
  id: string;
  element: React.ReactNode
  name: EIcon;
  width: number;
  height: number;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  screen?: boolean;
}   


interface IGenericListProp {
  list: IItem[]
}


export function MenuItemsList({list}: IGenericListProp) {
  return (
    <ul className={styles.menuItemsList}>
      {list.map(({As= 'li', element, onClick, className, name, id, href, screen, width, height}) => (
        <As onClick = {() => onClick(id)} className={screen ? styles.menuItemDisplay : styles.menuItem} key={id} href={href}>
          <Icon name={name} width={width} height={height}/>
          <Text size={14} color={EColor.grayF3}>{element}</Text>
        </As>        
      ))}
    </ul >
    
  );
}
