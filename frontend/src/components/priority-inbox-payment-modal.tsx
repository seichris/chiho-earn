import * as crypt from "crypto";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  InputTransactionData,
  useWallet,
} from "@aptos-labs/wallet-adapter-react";
import { toast } from "./use-toast";

const payForPriorityTx = (
) => {
  const amountInApt = Math.floor(
    (amountInUsd * 100_000_000) / Number(aptUsdRate)
  );
  const proofString = payeeTgUsername + payerTgUsername;
  const proofHash = crypt
    .createHash("sha256")
    .update(proofString, "utf8")
    .digest("hex");
  const contractAddress =
    "0xa472489fcd4d7be156d6a2870ea3276446e030708e403be7031f0cfd7bf085c8";
  const tx: InputTransactionData = {
    sender: fromAddress,
    data: {
      function: `${contractAddress}::chiho_priority_inbox::pay_for_priority`,
      functionArguments: [toAddress, amountInApt, proofHash],
    },
  };
  return tx;
};

const getAptUsdRate = async () => {
  const res = await axios.get(
    "https://data-api.binance.vision/api/v3/ticker/price?symbol=APTUSDT"
  );
  return Number(res.data.price);
};

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  payeeAptosAddress: string;
  payeeTgUsername: string;
  payeeUid: string;
  amountInUsd: number;
}

const PriorityInboxPaymentModal: React.FC<ModalProps> = ({
}) => {
  const wallet = useWallet();
  const handleOpenChange = (open) => {
    setIsOpen(open);
  };

  useEffect(() => {
    getAptUsdRate().then((v) => setAptUsdRate(v));
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Priority Inbox Payment for @{payeeTgUsername}
          </DialogTitle>
        </DialogHeader>
        <DialogClose />
        <div className="flex flex-col">
          <Label
            htmlFor="Event"
            className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4"
          >
            Enter your telegram username
          </Label>
          <Input
            value={tgUsername}
            onChange={(v) => setTgUsername(v.target.value)}
          />
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <Button
            variant="default"
            disabled={!Boolean(tgUsername) || !wallet.connected}
            onClick={async () => {
              const tgUserNameFormatted = tgUsername?.startsWith("@")
                ? tgUsername.slice(1)
                : tgUsername;

              try {
                await checkTgUsernameExists(tgUserNameFormatted, payeeUid);
              } catch (e) {
                toast({
                  title: "Username " + tgUserNameFormatted + " does not exist ",
                });
                return;
              }
              const tx = payForPriorityTx(
                wallet.account.address,
                payeeAptosAddress,
                tgUserNameFormatted,
                payeeTgUsername,
                amountInUsd,
                aptUsdRate
              );
              setIsOpen(false);
              wallet.signAndSubmitTransaction(tx).then((res) => {
                toast({
                  title: "Your payment was successful",
                });
                handlePriorityPayment({
                  payerTgUsername: tgUserNameFormatted,
                  payeeTgUsername,
                  payeeUid,
                  txHash: res.hash,
                });
              });
            }}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PriorityInboxPaymentModal;
