import React, { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { CgLogOff } from 'react-icons/cg';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FiMoon, FiSun } from 'react-icons/fi';
import {
  VscAccount, VscGear, VscGraph, VscFoldUp,
} from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import IconSwitchTheme from './IconSwitchTheme';

const SideBarIcon = ({
  icon, tooltip, className = '', onClickHandler,
}:
{
  icon: React.ReactNode,
  tooltip?: string, className?: string,
  onClickHandler?: MouseEventHandler }) => (
    <div
      className={`sidebar-icon group ${className}`}
      onClick={onClickHandler}
      onKeyUp={() => {}}
      tabIndex={0}
      role="button"
    >
      {icon}
      {tooltip
    && (
    <span className="sidebar-tooltip group-hover:scale-100">
      {tooltip}
    </span>
    )}
    </div>
);

function NavItem({ to, icon, tooltip }:
  { to: string, icon: React.ReactNode, tooltip: string }) {
  return (
    <Link to={to}>
      <SideBarIcon icon={icon} tooltip={tooltip} />
    </Link>
  );
}

function NavBar() {
  const { t } = useTranslation();

  return (
    <nav>
      <NavItem to={`/${t('Link.dashboard.slug')}`} icon={<AiOutlineDashboard size="25" />} tooltip={t('Link.dashboard.tooltip')} />
      <NavItem to={`/${t('Link.statistics.slug')}`} icon={<VscGraph size="25" />} tooltip={t('Link.statistics.tooltip')} />
      <NavItem to={`/${t('Link.parameters.slug')}`} icon={<VscGear size="25" />} tooltip={t('Link.parameters.tooltip')} />
    </nav>
  );
}

const SideBar = ({ onLogout = () => {} }: { onLogout?: Function }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col justify-center justify-items-stretch bg-white dark:bg-gray-900 shadow-lg">

      <div className="flex-1">
        <SideBarIcon icon={<VscAccount size="30" />} />
      </div>

      <NavBar />

      <div className="flex-1">
        <div className="h-full flex flex-col justify-end">
          <IconSwitchTheme
            icon={<SideBarIcon icon={<FiSun size="15" />} tooltip={t('Action.toggle.darkMode')} />}
            iconDark={<SideBarIcon icon={<FiMoon size="15" />} tooltip={t('Action.toggle.lightMode')} />}
          />
          <div>
            <SideBarIcon
              className="rotate-90"
              icon={<VscFoldUp size="12" />}
            />
          </div>
          <div>
            <SideBarIcon
              icon={<CgLogOff size="28" />}
              tooltip={t('Action.logout')}
              onClickHandler={() => { onLogout(); }}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default SideBar;
