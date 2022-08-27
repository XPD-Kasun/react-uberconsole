import { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";
import { SidebarItemType, SidebarItemWithModules } from "../../../types";

function SidebarItem({ item }: { item: SidebarItemWithModules}) {

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

export default SidebarItem;