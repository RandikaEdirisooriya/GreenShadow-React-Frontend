import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  linktext: string;
  url: string;
  className: string;
  children?: React.ReactNode; // Allow children to be passed for additional elements (like icons)
};

function MenuItems(props: Props) {
  return (
    <Link to={props.url} className={props.className}>
      {props.children} {/* Render children (icons, etc.) */}
      {props.linktext} {/* Render the linktext */}
    </Link>
  );
}

export default MenuItems;
