import Avatar from "@/components/atoms/avatar";
import Text from "@/components/atoms/text";

const AgentInfo = ({
  agent,
}: {
  agent: {
    profilePictureUrl: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Avatar
      src={agent.profilePictureUrl}
      alt={`${agent.firstName} ${agent.lastName}`}
    />
    <div style={{ marginLeft: "8px" }}>
      <Text>
        {agent.firstName} {agent.lastName}
      </Text>
      <Text size="0.9rem">{agent.email}</Text>
    </div>
  </div>
);

export default AgentInfo;
