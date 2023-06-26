import { menuItems } from './data';

export const Menu = () => {
    return (
        <ul className="menu">
            {
                menuItems.map(item => <li>{item.icon}{item.title}</li>)
            }
        </ul>
    );
};