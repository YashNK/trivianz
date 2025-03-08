import { Member } from "../../model/member.model";
import NoAvailableImage from "../../assets/images/no-image.jpg";
import "./member-card.scss";

type MemberCardProps = {
  member: Member;
};

export const MemberCard: React.FunctionComponent<MemberCardProps> = ({
  member,
}) => {
  return (
    <>
      <div className="member_card mb-3">
        <div className="member_image_container flex_1_1_10 ellipsis">
          {member.image ? (
            member.image
          ) : (
            <img className="member_image" src={NoAvailableImage} />
          )}
        </div>
        <div className="flex_1_1_10 ellipsis pr-2">
          <div className="font_18 ellipsis font_weight_medium">
            {member.storeName}
          </div>
          <div className="ellipsis">{member.name}</div>
        </div>
        <div className="flex_1_1_10 ellipsis font_weight_medium pr-2">
          {member.phoneNumber}
        </div>
        <div className="flex_1_1_10 ellipsis font_weight_medium pr-2">
          {member.profession}
        </div>
        <div className="flex_1_1_10 ellipsis font_weight_medium pr-2">
          {member.group}
        </div>
        <button className="primary_btn">View Profile</button>
        {/* Mobile Section */}
      </div>
      <div className="mobile_card_container">
        <div className="flex_1_1_10 d-flex">
          <div className="member_image_container flex_1_1_10 ellipsis">
            {member.image ? (
              member.image
            ) : (
              <img className="member_image" src={NoAvailableImage} />
            )}
          </div>
          <div className="flex_1_1_10 ellipsis min_width_150">
            <div className="font_18 ellipsis font_weight_medium">
              {member.storeName}
            </div>
            <div className="ellipsis">{member.name}</div>
            <div className="flex_1_1_10 ellipsis pt-2">Profession:</div>
            <div className="ellipsis font_weight_medium">
              {member.profession}
            </div>
            <div className="flex_1_1_10 ellipsis pt-2">
              <div className="ellipsis">Phone Number:</div>
              <div className="ellipsis font_weight_medium">
                {member.phoneNumber}
              </div>
            </div>
            <div className="flex_1_1_10 ellipsis pt-2">
              <div>Group:</div>
              <div className="ellipsis font_weight_medium">{member.group}</div>
            </div>
          </div>
        </div>
        <button className="primary_btn w-100">View Profile</button>
      </div>
    </>
  );
};
