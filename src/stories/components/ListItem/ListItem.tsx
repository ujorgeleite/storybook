import React from 'react';
import './ListItem.scss'

interface ListItemProps {

  backgroundColor?: string;
  color?: string;
  src?: string;
  title?: string;
  darkMode?: boolean;
  onClick?: () => void;
}

export const ListItem = ({
  darkMode = false,
  backgroundColor,
  src,
  title,
  onClick,
  ...props
}: ListItemProps) => {
  const mode = darkMode ? 'light-mode' : 'dark-mode';
  const onClickIsDefined = !!onClick && onClick.toString().indexOf('actionHandler') <= 0;

  const styles = onClickIsDefined ? 'list-item list-item_click' :'list-item';
  return (
    <div className={[styles, mode].join(' ')} onClick={onClick}>
      {(!!src && src.length > 0) &&
      <span>
        <img src={src} />
      </span>}
      {(!!title && title.length > 0) && <p>{title}</p>}
    </div>
  );
};
