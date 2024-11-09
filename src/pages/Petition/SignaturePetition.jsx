import { Progress, Spinner } from "flowbite-react";
import { useContext } from "react";
import { PetitionContext } from "../../context/PetitionContext";

const SignaturePetition = () => {
  const { detailPetition, handleSignature, loadingButton } = useContext(PetitionContext);

  // Calculate the percentage of signatures for the progress bar
  const targetSignatures = 1000;
  const currentSignatures = detailPetition.Signatures?.length || 0;
  const progressPercentage = Math.min((currentSignatures / targetSignatures) * 100, 100);

  return (
    <div className="sticky top-4 border border-neutral-200 p-4 rounded-lg">
      <div className="flex flex-col gap-2">
        <Progress progress={progressPercentage} color="green" />
        <div className="flex justify-between font-bold">
          <div className="text-green-500">
            <h1>{currentSignatures}</h1>
            <p className="text-base font-normal">Tanda tangan</p>
          </div>
          <div className="text-end">
            <h1>{targetSignatures}</h1>
            <p className="text-base font-normal">Tujuan</p>
          </div>
        </div>
        <button className="bg-green-500 px-3 py-1 w-full rounded-lg text-white hover:bg-green-400 active:bg-green-700" onClick={() => handleSignature(detailPetition.id)} disabled={loadingButton}>
          {loadingButton ? <Spinner /> : <>Berikan dukungan</>}
        </button>
      </div>
    </div>
  );
};

export default SignaturePetition;
