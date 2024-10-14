import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Account,
  AccountAddress,
  Aptos,
  AptosConfig,
  Network,
} from "@aptos-labs/ts-sdk";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import React, { useEffect, useState } from "react";

const PriorityInboxModal: React.FC<ModalProps> = ({
}) => {
  const [price, setPrice] = useState("");
  const [aptosAddress, setAptosAddress] = useState("");
  const [aptosAddressErr, setAptosAddressErr] = useState<string | undefined>();

  const config = new AptosConfig({ network: Network.TESTNET });
  const aptos = new Aptos(config);
  aptos.getEvents({ options: {} });
  const wallet = useWallet();
  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open) {
      setAptosAddress(user.user?.paidInbox?.aptosAddress || "");
      setPrice(user.user?.paidInbox?.priceInUsd?.toString() || "");
    }
  };

  useEffect(() => {
    if (!aptosAddress) {
      setAptosAddressErr(undefined);
      return;
    }
    try {
      if (AccountAddress.isValid({ input: AccountAddress.from(aptosAddress) }))
        setAptosAddressErr(undefined);
      else setAptosAddressErr("Please set a valid aptos account address");
    } catch (e) {
      setAptosAddressErr("Please set a valid aptos account address");
    }
  }, [aptosAddress]);

  useEffect(() => {
    const paidInbox = user.user.paidInbox;
    if (paidInbox) {
      setAptosAddress(paidInbox.aptosAddress);
      setPrice(paidInbox?.priceInUsd?.toString());
    }
  }, [user]);
  const { mutate: setPriorityInbox } = useSetPriorityInbox();
  console.log(user.user.paidInbox);
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manage Priority Inbox</DialogTitle>
        </DialogHeader>
        <DialogClose />
        <div className="flex flex-col">
          <Label
            htmlFor="Event"
            className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4"
          >
            Add an Aptos Wallet Address
          </Label>
          {/* <WalletSelector /> */}

          <Input
            value={aptosAddress}
            onChange={(v) => setAptosAddress(v.target.value)}
          />
          <div className="text-red-500 h-3">{aptosAddressErr || ""}</div>
        </div>
        <div className="flex flex-col">
          <Label
            htmlFor="Event"
            className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4"
          >
            Set your price in USD
          </Label>
          <Input
            type="number"
            value={price}
            onChange={(v) => setPrice(v.target.value)}
          />
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <Button
            variant="default"
            disabled={!aptosAddress || Boolean(aptosAddressErr)}
            onClick={() => {
              // if (wallet.account.address)
              setPriorityInbox({
                aptosAddress: aptosAddress,
                priceInUsd: Number(price),
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

export default PriorityInboxModal;
