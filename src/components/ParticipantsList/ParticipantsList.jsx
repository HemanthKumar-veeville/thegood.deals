import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Users22 } from "../../icons/Users22";
import { SizeXlCorner } from "../../components/SizeXlCorner";
import { Line } from "../../components/Line/Line";

function ParticipantsList({
  participants,
  setSelectedParticipants,
  selectedParticipants,
}) {
  const { t } = useTranslation();
  const [localSelectedParticipants, setLocalSelectedParticipants] = useState(
    participants?.map((p) => p.participant_id) || []
  );
  const [selectAll, setSelectAll] = useState(true);
  console.log({ selectedParticipants });
  // Update parent component when selections change
  useEffect(() => {
    setSelectedParticipants(localSelectedParticipants);
  }, [localSelectedParticipants, setSelectedParticipants]);

  // Update selectAll state based on all participants being selected
  useEffect(() => {
    const allSelected =
      participants?.length === localSelectedParticipants.length;
    setSelectAll(allSelected);
  }, [localSelectedParticipants, participants]);

  if (!participants?.length) {
    return null;
  }

  const handleSelectAll = (checked) => {
    setSelectAll(checked);
    if (checked) {
      // Select all participant IDs
      setLocalSelectedParticipants(participants.map((p) => p.participant_id));
    } else {
      // Deselect all
      setLocalSelectedParticipants([]);
    }
  };

  const handleParticipantSelect = (participantId) => {
    setLocalSelectedParticipants((prev) => {
      if (prev.includes(participantId)) {
        return prev.filter((id) => id !== participantId);
      } else {
        return [...prev, participantId];
      }
    });
  };

  return (
    <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
      {/* Header */}
      <div className="flex flex-col gap-3 relative self-stretch w-full">
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5">
            <Users22 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px]">
              {t("active_deal.participants_label")}
            </div>
          </div>

          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleSelectAll(!selectAll)}
          >
            <div
              className={`w-5 h-5 border-2 rounded-md flex items-center justify-center ${
                selectAll
                  ? "bg-[#1b4f4a] border-[#1b4f4a]"
                  : "bg-white border-gray-300"
              }`}
            >
              {selectAll && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      <Line />

      {/* Participants List */}
      <div className="flex flex-col gap-4 w-full">
        {participants.map((participant) => (
          <div
            key={participant.participant_id}
            className="flex items-center justify-between gap-[15px] relative w-full"
          >
            <div className="flex items-center gap-[15px]">
              <SizeXlCorner
                className="!h-[50px] !w-[50px]"
                divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-[9px] !leading-10 !top-1"
                text={participant.participant_name
                  .split(" ")
                  .map((n) => n[0])
                  .join(".")}
              />
              <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                <div
                  onClick={() =>
                    handleParticipantSelect(participant.participant_id)
                  }
                  className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap cursor-pointer"
                >
                  {participant.participant_name}
                </div>
              </div>
            </div>

            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                handleParticipantSelect(participant.participant_id)
              }
            >
              <div
                className={`w-5 h-5 border-2 rounded-md flex items-center justify-center ${
                  localSelectedParticipants.includes(participant.participant_id)
                    ? "bg-[#1b4f4a] border-[#1b4f4a]"
                    : "bg-white border-gray-300"
                }`}
              >
                {localSelectedParticipants.includes(
                  participant.participant_id
                ) && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParticipantsList;
