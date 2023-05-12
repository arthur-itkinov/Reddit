import React from 'react';

interface IItem {
  id: string;
  // text: string;
  element: React.ReactNode;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];

}

const noop = () => { };

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'li', element, onClick = noop, className, id, href }) => (
        <As className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >{element}</As>
      ))}
    </>
  );
}

