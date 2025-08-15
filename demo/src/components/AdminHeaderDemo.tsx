import React, { useState } from 'react';
import { AdminHeader, HeaderComponent, ButtonComponent } from '@asafarim/shared';
import './AdminHeaderDemo.css';

const AdminHeaderDemo: React.FC = () => {
  const [currentPage] = useState(1);
  const [totalPages] = useState(5);
  const [totalUsers] = useState(1247);
  const [totalProducts] = useState(89);

  return (
    <div className="admin-header-demo">
      <div className="demo-header">
        <h1>Admin Header Components</h1>
        <p>Specialized header components for admin interfaces and dashboards</p>
      </div>

      <div className="demo-section">
        <h2>AdminHeader Component</h2>
        <p>A dedicated admin header with stats, pagination, and action buttons</p>
        
        <div className="example-container">
          <AdminHeader
            title="User Management"
            subtitle="Manage all user accounts and permissions"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
              </svg>
            }
            totalCount={totalUsers}
            itemName="Users"
            currentPage={currentPage}
            totalPages={totalPages}
            showPagination={true}
            actions={
              <div style={{ display: 'flex', gap: '8px' }}>
                <ButtonComponent size="sm" variant="primary">Add User</ButtonComponent>
                <ButtonComponent size="sm" variant="outline">Export</ButtonComponent>
                <ButtonComponent size="sm" variant="ghost">Settings</ButtonComponent>
              </div>
            }
          />
        </div>

        <div className="example-container">
          <AdminHeader
            title="Product Catalog"
            subtitle="Manage your product inventory"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
              </svg>
            }
            totalCount={totalProducts}
            itemName="Products"
            actions={
              <div style={{ display: 'flex', gap: '8px' }}>
                <ButtonComponent size="sm" variant="success">Add Product</ButtonComponent>
                <ButtonComponent size="sm" variant="outline">Import</ButtonComponent>
              </div>
            }
          />
        </div>
      </div>

      <div className="demo-section">
        <h2>Enhanced HeaderComponent with Admin Mode</h2>
        <p>Use the base HeaderComponent with admin-specific props</p>
        
        <div className="example-container">
          <HeaderComponent
            adminMode={true}
            title="Analytics Dashboard"
            subtitle="Real-time insights and metrics"
            logoText="A"
            totalCount={totalUsers}
            itemName="Active Users"
            currentPage={currentPage}
            totalPages={totalPages}
            showPagination={true}
            actions={
              <div style={{ display: 'flex', gap: '8px' }}>
                <ButtonComponent size="sm" variant="primary">Refresh</ButtonComponent>
                <ButtonComponent size="sm" variant="outline">Download</ButtonComponent>
              </div>
            }
            leftContent={
              <div style={{ display: 'flex', gap: '8px' }}>
                <ButtonComponent size="sm" variant="ghost">Overview</ButtonComponent>
                <ButtonComponent size="sm" variant="ghost">Reports</ButtonComponent>
              </div>
            }
          />
        </div>
      </div>

      <div className="demo-section">
        <h2>Props & Features</h2>
        <div className="props-grid">
          <div className="prop-group">
            <h3>AdminHeader Props</h3>
            <ul>
              <li><code>title</code> - Main header title</li>
              <li><code>subtitle</code> - Optional subtitle</li>
              <li><code>icon</code> - Custom icon component</li>
              <li><code>totalCount</code> - Total number of items</li>
              <li><code>itemName</code> - Name of the item type</li>
              <li><code>currentPage</code> - Current page number</li>
              <li><code>totalPages</code> - Total number of pages</li>
              <li><code>showPagination</code> - Show pagination info</li>
              <li><code>actions</code> - Action buttons</li>
            </ul>
          </div>

          <div className="prop-group">
            <h3>HeaderComponent Admin Props</h3>
            <ul>
              <li><code>adminMode</code> - Enable admin functionality</li>
              <li><code>totalCount</code> - Total number of items</li>
              <li><code>itemName</code> - Name of the item type</li>
              <li><code>currentPage</code> - Current page number</li>
              <li><code>totalPages</code> - Total number of pages</li>
              <li><code>showPagination</code> - Show pagination info</li>
              <li><code>actions</code> - Action buttons</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Usage Examples</h2>
        
        <div className="code-examples">
          <div className="code-example">
            <h3>AdminHeader Component</h3>
            <pre>
              <code>{`import { AdminHeader, ButtonComponent } from '@asafarim/shared';

<AdminHeader
  title="User Management"
  subtitle="Manage all user accounts and permissions"
  totalCount={1247}
  itemName="Users"
  currentPage={1}
  totalPages={5}
  showPagination={true}
  actions={
    <div style={{ display: 'flex', gap: '8px' }}>
      <ButtonComponent size="sm" variant="primary">Add User</ButtonComponent>
      <ButtonComponent size="sm" variant="outline">Export</ButtonComponent>
    </div>
  }
/>`}</code>
            </pre>
          </div>

          <div className="code-example">
            <h3>HeaderComponent with Admin Mode</h3>
            <pre>
              <code>{`import { HeaderComponent, ButtonComponent } from '@asafarim/shared';

<HeaderComponent
  adminMode={true}
  title="Analytics Dashboard"
  subtitle="Real-time insights and metrics"
  totalCount={1247}
  itemName="Active Users"
  currentPage={1}
  totalPages={5}
  showPagination={true}
  actions={
    <ButtonComponent size="sm" variant="primary">Refresh</ButtonComponent>
  }
  leftContent={
    <div style={{ display: 'flex', gap: '8px' }}>
      <ButtonComponent size="sm" variant="ghost">Overview</ButtonComponent>
      <ButtonComponent size="sm" variant="ghost">Reports</ButtonComponent>
    </div>
  }
/>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeaderDemo; 