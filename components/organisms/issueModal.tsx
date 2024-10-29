import AgentInfo from "@/components/molecules/agentInfo";
import Text from "@/components/atoms/text";
import styled from "styled-components";
import Image from "next/image";

const IssueModal = ({
  issue,
  onClose,
}: {
  issue: any;
  onClose: () => void;
}) => {
  if (!issue) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <Image
            src={"/assets/icons/exitSvg.svg"}
            alt="exit icon"
            width={24}
            height={24}
          />
        </CloseButton>
        <Text fontWeight="bold">{issue.title}</Text>
        <AgentInfo agent={issue.assignedAgent} />

        <DetailsContainer>
          {issue.details?.map((detail: any) => (
            <DetailRow key={detail.id}>
              <Text>{detail.type}:</Text>
              <Text>{detail.comment}</Text>
            </DetailRow>
          ))}
        </DetailsContainer>

        {issue.supplier && (
          <SupplierContainer>
            <SupplierLogo
              src={issue.supplier.logoUrl}
              alt={issue.supplier.name}
              width={64}
              height={32}
            />
            <Text>{issue.supplier.name}</Text>
          </SupplierContainer>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default IssueModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SupplierContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const SupplierLogo = styled.img`
  border-radius: 4px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #333;
  }
`;
