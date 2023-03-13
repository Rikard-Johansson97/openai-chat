import React, { FC } from "react";
import NewChat from "./NewChat";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className='flex flex-col h-screen p-2'>
      <div>
        <div className='flex-1 '>
          <NewChat />
          <div>{/* model selection */}</div>

          {/* map through chats */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
