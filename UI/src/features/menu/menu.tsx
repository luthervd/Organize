import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {menuItems, selectedMenuItem, selectMenuItem } from "./menuSlice";

export default function Menu(props: any)
{
    const menuItem = useAppSelector(selectedMenuItem);
    const dispatch = useAppDispatch();

    return(
        <aside className="menu">
            <p className="menu-label">
                Organize
            </p>
            <ul className="menu-list">
                <li><a className={menuItem === menuItems.tasks ? 'is-active' : ''} onClick={evt => dispatch(selectMenuItem(menuItems.tasks))}>Tasks</a></li>
                <li><a className={menuItem === menuItems.createItem ? 'is-active' : ''} onClick={evt => dispatch(selectMenuItem(menuItems.createItem))}>Create Item</a></li>
            </ul>
        </aside>
    )
}