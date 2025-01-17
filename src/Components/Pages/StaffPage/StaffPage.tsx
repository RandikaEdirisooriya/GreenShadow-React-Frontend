import React from 'react'

import HeaderContainer from '../../HeadersContainer/HeaderContainer';
import BodyContainer from '../../BodyContainer/BodyContainer';
import TitleSection from '../../Components-Pages/TitleComponent/TitleSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Pages.css'
import GlassCard from '../../Components-Pages/GlassCard/GlassCard';
import Button from '../../Components-Pages/Button/Button';
import Table from '../../Components-Pages/Table/Table';
function StaffPage() {
  const rows: Record<string, string | number>[] = [
  
  ];

  const headers = ['ID', 'ROLE', 'Last Name', 'Designation', 'Gender','Joining Date' ,'Date of Birth','Address','Phone Number','Email','Actions'];
  return (
    <div>
    <HeaderContainer />
    <BodyContainer>
      <div className="glass-container my-4 p-4">
        <div className="content">
          <TitleSection title="Staff" />

          <div className="glass-cards mb-4">
            <GlassCard>
              <h1>Staff</h1>
            </GlassCard>
          </div>

          <div className="glass-cards">
            <GlassCard>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Button lable='Add New Staff' onClick={() => {}} modalTarget="#exampleModalLong" />
              </div>
              <Table rows={rows} headers={headers} />
            </GlassCard>
          </div>
        </div>
      </div>
    </BodyContainer>
  </div>
 
  )
}

export default StaffPage
