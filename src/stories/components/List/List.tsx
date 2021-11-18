import {ListItem} from '../ListItem/ListItem'
import './List.scss'



type Item = {
  src?: string,
  title?: string
  onClick?: () => void;
}

interface ListProps {
  backgroundColor?: string;
  color?: string;
  items: Item []
  darkMode?: boolean;
}

export const List = ({
  darkMode = false,
  backgroundColor,
  items,
  ...props
}: ListProps) => {
  const mode = darkMode ? 'light-mode' : 'dark-mode';
  return (
    <div className={['list-items', mode].join(' ')}>
     {
        items.map((item) => {
         const {src, title, onClick} = item;
         return <ListItem src={src} title={title} onClick={onClick} />;
       })
     }
    </div>
  );
};
