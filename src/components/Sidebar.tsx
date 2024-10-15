import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Typography, Divider } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import Link from 'next/link';
import {
  Dashboard,
  PendingActions,
  Report,
  PersonAdd,
  ManageAccounts,
  Key,
  SupervisorAccount,
  Email,
  AttachMoney,
  MergeType,
  ApprovalSharp,
  ShowChart,
} from '@mui/icons-material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

interface SidebarProps {
  themeMode: 'light' | 'dark';
}

const Sidebar: React.FC<SidebarProps> = ({ themeMode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Approvals');

  // Define colors based on the theme
  const backgroundColor = themeMode === 'dark' ? '#1f2937' : '#f5f5f5';
  const textColor = themeMode === 'dark' ? '#fff' : '#333';
  const hoverColor = themeMode === 'dark' ? '#868dfb' : '#fa0505';
  const activeColor = themeMode === 'dark' ? '#e0e0e0' : '#e0e0e0';

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${backgroundColor} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: 'transparent !important',
        },
        "& .pro-inner-item": {
          padding: '10px 20px !important',
          color: `${textColor} !important`,
          fontSize: '14px',
        },
        "& .pro-inner-item:hover": {
          color: `${hoverColor} !important`,
        },
        "& .pro-menu-item.active": {
          backgroundColor: `${activeColor} !important`,
          borderRadius: '5px',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        {/* Logo and Collapse Button */}
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: '10px 0 20px 0', color: textColor }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h6" color={textColor}>
                  MESSAGEHUB
                </Typography>
                <MenuOutlinedIcon />
              </Box>
            )}
          </MenuItem>
          {/* Workflow Section */}
          <Box>
            <Typography variant="caption" style={{ paddingLeft: 16, color: textColor, textTransform: 'uppercase', fontWeight: 'bold' }}>
            {(isCollapsed)?'':'Dashboard'}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <MenuItem
              active={selected === 'Approvals'}
              onClick={() => setSelected('Approvals')}
              icon={<Dashboard />}
            >
              Control Dashboard
              <Link href="/control-dashboard" />
            </MenuItem>
          </Box>

          {/* Workflow Section */}
          <Box>
            <Typography variant="caption" style={{ paddingLeft: 16, color: textColor, textTransform: 'uppercase', fontWeight: 'bold' }}>
            {(isCollapsed)?'':'Workflow'}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <MenuItem
              active={selected === 'Approvals'}
              onClick={() => setSelected('Approvals')}
              icon={<ShowChart />}
            >
              Approvals
              <Link href="/approvals" />
            </MenuItem>
            <MenuItem
              active={selected === 'Alerts & Notifications'}
              onClick={() => setSelected('Alerts & Notifications')}
              icon={<ApprovalSharp />}
            >
              Alerts & Notifications
              <Link href="/alerts-notifications" />
            </MenuItem>
            <MenuItem
              active={selected === 'Pending Items'}
              onClick={() => setSelected('Pending Items')}
              icon={<PendingActions />}
            >
              Pending Items
              <Link href="/pending-items" />
            </MenuItem>
          </Box>

          {/* Reports Section */}
          <Box>
            <Typography variant="caption" style={{ paddingLeft: 16, color: textColor, textTransform: 'uppercase', fontWeight: 'bold' }}>
              {(isCollapsed)?'':'Reports'}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <MenuItem
              active={selected === 'Transaction Reports'}
              onClick={() => setSelected('Transaction Reports')}
              icon={<Report />}
            >
              Transaction Reports
              <Link href="/transaction-reports" />
            </MenuItem>
            <MenuItem
              active={selected === 'Reject Reports'}
              onClick={() => setSelected('Reject Reports')}
              icon={<Report />}
            >
              Reject Reports
              <Link href="/reject-reports" />
            </MenuItem>
          </Box>

          {/* User Management Section */}
          <Box>
            <Typography variant="caption" style={{ paddingLeft: 16, color: textColor, textTransform: 'uppercase', fontWeight: 'bold' }}>
              {(isCollapsed)?'':'User Management'}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <MenuItem
              active={selected === 'Create User'}
              onClick={() => setSelected('Create User')}
              icon={<PersonAdd />}
            >
              Create User
              <Link href="/create-user" />
            </MenuItem>
            <MenuItem
              active={selected === 'Manage Users'}
              onClick={() => setSelected('Manage Users')}
              icon={<ManageAccounts />}
            >
              Manage Users
              <Link href="/manage-users" />
            </MenuItem>
            <MenuItem
              active={selected === 'Authorize User'}
              onClick={() => setSelected('Authorize User')}
              icon={<Key />}
            >
              Authorize User
              <Link href="/authorize-user" />
            </MenuItem>
            <MenuItem
              active={selected === 'Role Management'}
              onClick={() => setSelected('Role Management')}
              icon={<SupervisorAccount />}
            >
              Role Management
              <Link href="/role-management" />
            </MenuItem>
          </Box>

          {/* System Management Section */}
          <Box>
            <Typography variant="caption" style={{ paddingLeft: 16, color: textColor, textTransform: 'uppercase', fontWeight: 'bold' }}>
            {(isCollapsed)?'':'System Management'}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <MenuItem
              active={selected === 'Email'}
              onClick={() => setSelected('Email')}
              icon={<Email />}
            >
              Email
              <Link href="/email" />
            </MenuItem>
            <MenuItem
              active={selected === 'Currency'}
              onClick={() => setSelected('Currency')}
              icon={<AttachMoney />}
            >
              Currency
              <Link href="/currency" />
            </MenuItem>
          </Box>

          {/* CB Mapping Section */}
          <Box>
            <Typography variant="caption" style={{ paddingLeft: 16, color: textColor, textTransform: 'uppercase', fontWeight: 'bold' }}>
            {(isCollapsed)?'':'CB Mapping'}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <MenuItem
              active={selected === 'Field Mapping'}
              onClick={() => setSelected('Field Mapping')}
              icon={<MergeType />}
            >
              Field Mapping
              <Link href="/field-mapping" />
            </MenuItem>
            <MenuItem
              active={selected === 'Product Mapping'}
              onClick={() => setSelected('Product Mapping')}
              icon={<MergeType />}
            >
              Product Mapping
              <Link href="/product-mapping" />
            </MenuItem>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
