import { LocationIcon } from '@pluralsight/icons';
import { getIconProps } from '@pluralsight/headless-styles';

export const menuItems = [
    {
        icon: <LocationIcon {...getIconProps({ size: 's'})} />,
        title: 'Menu item 1',
        url: '/',
    },
    {
        icon: <LocationIcon {...getIconProps({ size: 's'})} />,
        title: 'Menu item 1',
        url: '/services',
    },
    {
        icon: <LocationIcon {...getIconProps({ size: 's'})} />,
        title: 'Menu item 3',
        url: '/about',
    },
];