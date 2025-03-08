import { useState } from "react";
import { Select } from "antd";
import "./members-directory.scss";
import { MemberCard } from "../../components/member-card";
import { Members } from "./members";
import { FilterOptions } from "../../model/member.model";
import {
  ClusterGroup,
  ClusterGroupOptions,
  ProfessionOptions,
} from "../../constants";

const { Option } = Select;

export const MemberDirectory: React.FunctionComponent = () => {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    search: "",
    group: null,
    profession: null,
  });
  console.log(filterOptions);
  return (
    <div className="members_directory_container d-flex flex-column flex_1_1_10">
      <div className="members_directory_filters pt-3 pb-4 w-100">
        <div className="main_form_container pb-2">
          <input
            onChange={(e) =>
              setFilterOptions((prev) => ({ ...prev, search: e.target.value }))
            }
            placeholder="Search Member"
            className="w-100 max_width_80_p"
          />
        </div>
        <div className="main_form_container d-flex align-items-center justify-content-center text-start py-2">
          <Select
            allowClear
            placeholder="Filter by group"
            className="flex_1_1_10 max_width_200 mx-2"
            value={filterOptions.group}
            onChange={(value) =>
              setFilterOptions((prev) => ({ ...prev, group: value || null }))
            }
            options={ClusterGroupOptions}
          />
          <Select
            allowClear
            className="flex_1_1_10 max_width_200 mx-2"
            placeholder="Filter by profession"
            value={filterOptions.profession}
            onChange={(value) =>
              setFilterOptions((prev) => ({
                ...prev,
                profession: value || null,
              }))
            }
            options={ProfessionOptions}
          ></Select>
        </div>
      </div>
      <div className="flex_1_1_10 member_card_container overflow-auto ">
        {Members.filter((m) => {
          const matchesSearch =
            filterOptions.search === "" ||
            m.name
              .toLowerCase()
              .includes(filterOptions.search.toLowerCase().trim());
          const matchesGroup =
            filterOptions.group === null || m.group === filterOptions.group;
          const matchesProfession =
            filterOptions.profession === null ||
            m.profession === filterOptions.profession;

          return matchesSearch && matchesGroup && matchesProfession;
        }).map((member) => (
          <div key={`MEMBER_CARD_ID_${member.id}`}>
            <MemberCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};
