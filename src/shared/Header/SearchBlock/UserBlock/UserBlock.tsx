import React from 'react';
import styles from './userblock.css';
import { IconAnon } from '../../../Icons';
import { Text } from '../../../Text/Text';
import { EColor } from '../../../Text';
import { EIcon, Icon } from '../../../Icon';

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
    <a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
    className={styles.userBox}>
      <div className="styles.avatarBox">
        {avatarSrc 
          ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage}/> 
          : <Icon name={EIcon.Anon} width={50} height={50} />}
      </div>
      <div className="styles.username">
        <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
