import React from 'react';
import styles from './menudropdown.css';
import { MenuItemsList } from './MenuItemsList';
import { generateId } from '../../../../../utils/react/generateRandomindex';
import { merge } from '../../../../../utils/js/merge';
import { EIcon } from '../../../../Icon';



const menuItemsArray = [
	{element: 'Комментарии', name: EIcon.Comments, screen:true, width:15, height:15},
	{element: 'Поделиться', name: EIcon.Complain,screen:true, width:16, height:14},
	{element: 'Скрыть', name: EIcon.Hide, screen:false, width:14, height:14},
	{element: 'Сохранить', name: EIcon.Save, screen:true, width:14, height:14}, 
	{element: 'Пожаловаться', name: EIcon.Share, screen:false, width:12, height:14},
  ].map(generateId)




export function MenuDropdown() {
	const [list, setList] = React.useState(menuItemsArray)
	const handleItemClick = (id:string) => {
		console.log(id)
	}
	return (
		<div className={styles.dropdown}>
			
			<MenuItemsList list={list.map(merge({onClick: handleItemClick}))}/>

			<button className={styles.closeButton}>
				Закрыть
			</button>
		</div>

	);
}
