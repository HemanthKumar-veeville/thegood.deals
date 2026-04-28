import { useMemo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Users22 } from "../../icons/Users22";
import { MapMarker1 } from "../../icons/MapMarker1";
import { SizeXlCorner } from "../SizeXlCorner";
import { Line } from "../Line/Line";

const CITY_CAPTION_ICON_COLOR = "#637381";

/**
 * Same layout and copy as ParticipantsList; accepts organiser API shape { id, name, ... }.
 */
const OrganiserOtherDealsParticipantsList = ({
  participants,
  selectedParticipantIds,
  setSelectedParticipantIds,
}) => {
  const { t } = useTranslation();

  const sectionIds = useMemo(
    () => participants.map((p) => p.id),
    [participants]
  );

  const selectAll =
    sectionIds.length > 0 &&
    sectionIds.every((id) => selectedParticipantIds.includes(id));

  if (!participants?.length) {
    return null;
  }

  const handleSelectAll = (checked) => {
    setSelectedParticipantIds((prev) => {
      const set = new Set(prev);
      sectionIds.forEach((id) => {
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
              {t("active_deal.participants_other_deals_label")}
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
        {participants.map((participant) => {
          const displayName = participant.name || "";
          const initials = displayName
            .split(" ")
            .map((n) => n[0])
            .filter(Boolean)
            .join(".");
          return (
            <div
              key={participant.id}
              className="flex items-center justify-between gap-[15px] relative w-full"
            >
              <div className="flex items-center gap-[15px]">
                <SizeXlCorner
                  className="!h-[50px] !w-[50px]"
                  divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-[9px] !leading-10 !top-1"
                  text={initials || "?"}
                />
                <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto] min-w-0">
                  <div
                    onClick={() => handleParticipantSelect(participant.id)}
                    className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap cursor-pointer"
                  >
                    {displayName}
                  </div>
                  {(participant.city ?? participant.participant_city) && (
                    <div
                      className="flex items-center gap-1.5 max-w-[min(100%,240px)] min-w-0 [font-family:'Inter',Helvetica] font-normal text-[rgb(99_115_129)] text-sm tracking-[0] leading-[22px]"
                      aria-label={
                        participant.city ?? participant.participant_city
                      }
                    >
                      <span
                        className="inline-flex shrink-0"
                        aria-hidden="true"
                      >
                        <MapMarker1
                          className="!relative !block !w-3.5 !h-3.5"
                          color={CITY_CAPTION_ICON_COLOR}
                        />
                      </span>
                      <span className="min-w-0 break-words">
                        {participant.city ?? participant.participant_city}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleParticipantSelect(participant.id)}
              >
                <div
                  className={`w-5 h-5 border-2 rounded-md flex items-center justify-center ${
                    selectedParticipantIds.includes(participant.id)
                      ? "bg-[#1b4f4a] border-[#1b4f4a]"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {selectedParticipantIds.includes(participant.id) && (
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
          );
        })}
      </div>
    </div>
  );
};

OrganiserOtherDealsParticipantsList.propTypes = {
  participants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      city: PropTypes.string,
      participant_city: PropTypes.string,
    })
  ).isRequired,
  selectedParticipantIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedParticipantIds: PropTypes.func.isRequired,
};

export default OrganiserOtherDealsParticipantsList;
