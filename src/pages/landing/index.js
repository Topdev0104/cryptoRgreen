import React from "react";
import { useEthContext } from "../../context/EthereumContext";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import {
  ContentWrapper,
  ContentGrid,
  StyledCard,
} from "../../style/landing/styled";
import { toast } from "react-toastify";
import { data } from "./data";

const Landing = () => {
  const { provider, currentAcc } = useEthContext();
  const handleConnectWallet = async () => {
    if (provider) {
      if (Number(window.ethereum.chainId) !== 1) {
        toast.error("Please connect to Ethereum Mainnet", {
          theme: "dark",
        });
      } else {
        await provider.request({ method: `eth_requestAccounts` });
      }
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }
  };
  return (
    <ContentWrapper>
      <ContentGrid>
        {data.map((item, key) => {
          return (
            <StyledCard>
              <Card
                key={key + 1}
                src={item.src}
                id={item.id}
                description={item.description}
              />
              <Button
                onClick={() => {
                  handleConnectWallet();
                }}
              >
                {currentAcc ? "Mint" : "Connect Wallet"}
              </Button>
            </StyledCard>
          );
        })}
      </ContentGrid>
    </ContentWrapper>
  );
};
export default Landing;
