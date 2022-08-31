import { useLocation } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { SNSIP, SidebarNavigationSectionProps } from "./types";
import cx from 'classnames';
import { useUberConfig } from '../../core/uberProvider';
import getModuleInfoFromPath from '../../../shared/getModuleInfoFromPath';
import SidebarItem from './SidebarItem';
import getSidebarItems from '../../../shared/getSidebarItems';


function Sidebar({ className = "sidebar", isCollapsed, children, maxHeight, onCollapseClick }) {

	if (isCollapsed) {
		className += ' collapsed';
	}

	const _onCollapseClick = (evt) => {
		onCollapseClick && onCollapseClick(evt);
	};

	return (
		<aside className={className} style={{ maxHeight: maxHeight }}>
			<div className="close-btn" onClick={_onCollapseClick}>
				<IoChevronBack></IoChevronBack>
			</div>
			<div className="sidebar-wrapper">
				<div className="sidebar-container">
					{children}
				</div>
			</div>
		</aside>
	)

}

export function SidebarNavigationSectionInternal({ className = "sidebar-section", items }: SNSIP) {

	return (
		<div className={className} style={{ flex: 1, overflow: 'auto' }}>
			<ul className="sidebar-list">
				{
					items.map((x, i) => {
						return <SidebarItem item={x} key={i}></SidebarItem>
					})
				}
			</ul>
		</div>
	)
}


export function SidebarNavigationSection({ className }: SidebarNavigationSectionProps) {

	let path = useLocation().pathname;
	let moduleConfig = useUberConfig().moduleConfig;
	let moduleInfo = getModuleInfoFromPath(moduleConfig, path);

	if(!moduleInfo.module) { return null; }

	let sidebarItems = getSidebarItems(moduleInfo.module);

	let cls = cx({
		"sidebar-section": true,
		[className]: className
	});

	return (
		<SidebarNavigationSectionInternal
			className={cls}
			items={sidebarItems}></SidebarNavigationSectionInternal>
	)
}


export function CustomSidebarSection({ className, style, children }) {

	let cls = cx({
		"sidebar-section": true,
		[className]: className
	});

	return (
		<div className={cls} style={style}>
			{
				children
			}

		</div>
	)

}

export default Sidebar;