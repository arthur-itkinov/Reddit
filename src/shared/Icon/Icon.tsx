import React from 'react';

import { ComplainIcon, IconAnon, MenuIcon } from '../Icons';
import { CommentIcon } from '../Icons';
import { HideIcon } from '../Icons';
import { SaveIcon } from '../Icons';
import { ShareIcon } from '../Icons';
import classNames from 'classnames';

interface IIconProps {
   name: EIcon;
   width: number;
   height: number;
   classNames?: string;
}

export enum EIcon {
   Comments = 'Comment',
   Complain = 'Complain',
   Hide = 'Hide',
   Menu = 'Menu',
   Save = 'Save',
   Share = 'Share',
   Anon = 'Anon'
}

export function Icon({name, width, height, classNames}: IIconProps) {
   const icons = {
      [EIcon.Comments] : <CommentIcon width={width} height={height}/>,
      [EIcon.Complain] : <ComplainIcon width={width} height={height}/>,
      [EIcon.Hide] : <HideIcon width={width} height={height}/>,
      [EIcon.Save] : <SaveIcon width={width} height={height}/>,
      [EIcon.Share] : <ShareIcon width={width} height={height}/>,
      [EIcon.Anon] : <IconAnon width={width} height={height}/>,
      [EIcon.Menu] : <MenuIcon width={width} height={height}/>,
   }
   return (
      <>
         {icons[name]}
      </>
   )
   // switch (name) {
   //    case EIcon.Comments:
   //       return <CommentIcon width={width} height={height}/>;
   //    case EIcon.Complain:
   //       return <ComplainIcon width={width} height={height}/>;
   //    case EIcon.Hide:
   //       return <HideIcon  width={width} height={height}/>;
   //    case EIcon.Save:
   //       return <SaveIcon width={width} height={height}/>;
   //    case EIcon.Share:
   //       return <ShareIcon width={width} height={height}/>;
   //    case EIcon.Anon:
   //       return <IconAnon width={width} height={height}/>;
   //    case EIcon.Menu:
   //       return <MenuIcon width={width} height={height}/>;
   //    default:
   //       return <div />
   // }
}
