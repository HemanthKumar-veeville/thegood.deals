import React from "react";

export const LegalNotices = () => {
  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background">
      <div className="flex flex-col items-start gap-4 self-stretch w-full relative">
        <div className="flex flex-col items-start gap-2.5 pt-0 pb-6 w-full">
          <p className="font-heading-6 font-semibold text-primary-color text-xl tracking-normal leading-tight text-left mt-6">
            Legal Notices
          </p>
        </div>

        <div className="flex flex-col items-start gap-2.5 pt-0 pb-6 w-full">
          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            Contact Information
          </span>
          <p className="text-[#637381] text-base leading-6">
            The provision of services through this website is carried out under
            the name of thegood.deals by thegood.deals, a French company
            domiciled at 679 Avenue de la République (Lille) 59800 Lille under
            the SIRET number 93148811800015.
          </p>
          <p className="text-[#637381] text-base leading-6">
            The company can be contacted via the following channels. The
            founders and directors of thegood.deals are Anthony Brabant and
            Abraham THOMAS.
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            Copyright
          </span>
          <p className="text-[#637381] text-base leading-6">
            All content hosted or made available on the website
            www.thegood.deals, such as texts, graphics, logos, button icons,
            images, digital downloads, and data collections are the property of
            thegood.deals or its suppliers and are protected by international
            legislation on intellectual property, copyright rights, and
            databases. All content hosted or made available through this website
            is the exclusive property of thegood.deals, and is protected by
            Spanish and international laws on intellectual property rights and
            database rights.
          </p>
          <p className="text-[#637381] text-base leading-6">
            No systematic extraction or reuse of any part of the content of
            thegood.deals is permitted without our express written consent. In
            particular, the use of search and data mining tools or robots for
            the extraction (on one or more occasions) of substantial portions of
            thegood.deals services is prohibited without our express written
            consent. You are also not permitted to create or publish your own
            databases when they contain substantial portions of thegood.deals
            (e.g. our product lists and price lists) without our express written
            consent.
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            Trademarks
          </span>
          <p className="text-[#637381] text-base leading-6">
            thegood.deals® is a registered trademark of thegood.deals. In
            addition, the graphics, logos, page headers, button icons, scripts,
            and service names that are included in or available through the
            thegood.deals website are trademarks or trade dress of
            thegood.deals.
          </p>
          <p className="text-[#637381] text-base leading-6">
            The trademarks and trade dress of thegood.deals may not be used to
            represent any product or service that is not thegood.deals’s, or in
            any manner that is likely to cause confusion among users or
            disparage or discredit thegood.deals. All other trademarks not owned
            by thegood.deals and that are included in or available through the
            thegood.deals website are the property of their respective owners,
            who may or may not be affiliated with, connected in any way to, or
            sponsored by thegood.deals.
          </p>
        </div>
      </div>
    </div>
  );
};
