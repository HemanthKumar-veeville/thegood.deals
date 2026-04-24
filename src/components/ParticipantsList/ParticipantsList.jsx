import { useMemo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Users22 } from "../../icons/Users22";
import { SizeXlCorner } from "../../components/SizeXlCorner";
import { Line } from "../../components/Line/Line";

const ParticipantsList = ({
  participants,
  selectedParticipantIds,
  setSelectedParticipantIds,
}) => {
  const { t } = useTranslation();

  const dealParticipantIds = useMemo(
    () => participants?.map((p) => p.participant_id) ?? [],
    [participants]
  );

  const selectAll =
    dealParticipantIds.length > 0 &&
    dealParticipantIds.every((id) => selectedParticipantIds.includes(id));

  if (!participants?.length) {
    return null;
  }

  const handleSelectAll = (checked) => {
    setSelectedParticipantIds((prev) => {
      const set = new Set(prev);
      dealParticipantIds.forEach((id) => {
        if (checked) set.add(id);
        else set.delete(id);
      });
      return Array.from(set);
    });
  };

  const handleParticipantSelect = (participantId) => {
    setSelectedParticipantIds((prev) =>
      prev.includes(participantId)
        ? prev.filter((id) => id !== participantId)
        : [...prev, participantId]
    );
  };

  return (
    <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full">
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
                  selectedParticipantIds.includes(participant.participant_id)
                    ? "bg-[#1b4f4a] border-[#1b4f4a]"
                    : "bg-white border-gray-300"
                }`}
              >
                {selectedParticipantIds.includes(
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
};

ParticipantsList.propTypes = {
  participants: PropTypes.arrayOf(
    PropTypes.shape({
      participant_id: PropTypes.string.isRequired,
      participant_name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedParticipantIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedParticipantIds: PropTypes.func.isRequired,
};

export default ParticipantsList;
