import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/text";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <Image
          src={"/assets/icons/dashboardSvg.svg"}
          alt="dashboard-icon"
          width={20}
          height={20}
          style={{ marginRight: "5px" }}
        />
        <Text fontWeight="bold">Dashboard</Text>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  width: 200px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 2px solid #f5f7f8;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  z-index: 1000; /* Ensure it sits above other content */
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #f5f7f8;
  border-radius: 6px;
`;
