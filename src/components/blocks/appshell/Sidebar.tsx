import { Link, useLocation } from 'react-router-dom';
import { IoCaretDown, IoChevronBack } from 'react-icons/io5';
import { SidebarItem, SNSIP, SidebarNavigationSectionProps } from "./types";
import { useState } from 'react';
import cx from 'classnames';
import getSidebarItems, { SidebarItemWithModules } from '../../../shared/getSidebarItems';
import { useUberConfig } from '../../core/uberProvider';
import getModuleInfoFromPath from '../../../shared/getModuleInfoFromPath';
import { SidebarItemType } from '../../../types';


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

function SidebarItem({ item }: { item: SidebarItemWithModules }) {

	if(!item) {
		return null;
	}

	let [isCollapse, setIsCollapse] = useState(false);
	let location = useLocation();

	if (item.type === SidebarItemType.group) {

		let collapseClass = "collapse";

		if (isCollapse) {
			collapseClass += ' active';
		}

		const onCollapseClick = () => {
			setIsCollapse(collapsed => !collapsed);
		};

		return (
			<div className="sidebar-item group">
				<div className="sidebar-group-label" onClick={onCollapseClick}>
					<div className={collapseClass}>
						<IoCaretDown color="#555" size={12} />
					</div>
					<div className="text">
						{item.text}
					</div>
				</div>
				{
					!isCollapse && (
						<div className="subitem-list-container">
							<ul className="subitem-list">
								{
									item.items
										.map((y) => {
											console.log(location.pathname.startsWith(y.url))
											let isActiveRoute = location.pathname.startsWith(y.url);
											let cls = cx({
												active: isActiveRoute,
												[y.className]: y.className
											});

											return (
												<li className="submenu-list-item">
													<div className="submenu-item">
														<div className="sidebar-label">
															{

																y.url && (
																	<Link className={cls} to={y.url}>
																		{y.text}
																	</Link>
																)

															}
															{
																!y.url && (
																	<div className={cls}>{y.text}
																	</div>
																)
															}
														</div>

													</div>
												</li>
											)
										})
								}
							</ul>
						</div>
					)
				}
			</div>
		)

	}
	else if (item.type === SidebarItemType.link) {

		return (
			<div className="sidebar-item">
				<div className="sidebar-label">
					{

						item.url && (
							<a className={item.className} href={item.url}>
								{item.text}
							</a>
						)

					}
					{
						!item.url && (
							<div className={item.className}>{item.text}
							</div>
						)
					}
				</div>
			</div>
		);
	}
	else {

		let isActiveRoute = location.pathname === item.url;

		let cls = cx({
			active: isActiveRoute,
			[item.className]: item.className
		});

		return (
			<div className="sidebar-item">
				<div className="sidebar-label">
					{

						item.url && (
							<Link className={cls} to={item.url}>
								{item.text}
							</Link>
						)

					}
					{
						!item.url && (
							<div className={cls}>{item.text}
							</div>
						)
					}
				</div>
			</div>
		);
	}





}

export function SidebarNavigationSectionInternal({ className = "sidebar-section", items }: SNSIP) {

	return (
		<div className={className} style={{ flex: 1, overflow: 'auto' }}>
			<ul className="sidebar-list">
				{
					items.map(x => {
						return <SidebarItem item={x}></SidebarItem>
					})
				}
			</ul>
		</div>
	)
}


export function SidebarNavigationSection({ className = "sidebar-section" }: SidebarNavigationSectionProps) {

	let path = useLocation().pathname;
	let moduleConfig = useUberConfig().moduleConfig;
	let moduleInfo = getModuleInfoFromPath(moduleConfig, path);

	if(!moduleInfo.module) { return null; }

	let sidebarItems = getSidebarItems(moduleInfo.module);

	return (
		<SidebarNavigationSectionInternal
			className={className}
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