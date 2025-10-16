import React from "react";

const SkillButton = ({ skill }: { skill: string }) => {
  return (
    <button className="p-2 border border-[#20aada] text-[#20aada] rounded-3xl text-xs">
      ◆ {skill}
    </button>
  );
};

export default SkillButton;
