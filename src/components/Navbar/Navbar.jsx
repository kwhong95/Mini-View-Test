import React from 'react'
import { PageHeader, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons'
import logo from '../../asserts/ingkle_logo.webp';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <PageHeader 
        title="Ingkle's Mini_View"
        avatar={{src:logo}}
        extra = {[
          <Button size="large" type="primary" icon={<SettingOutlined />}/>
        ]}
      />
    </div>
  )
}

export default Navbar;
