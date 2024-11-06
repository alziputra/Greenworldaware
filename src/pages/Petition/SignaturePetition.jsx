import { Progress, Spinner } from 'flowbite-react';
import { useContext } from 'react';
import { PetitionContext } from '../../context/PetitionContext';

const SignaturePetition = () => {
  const { detailPetition, handleSignature, loadingButton } = useContext(PetitionContext);

  return (
    <div className="sticky top-4 border border-neutral-200 p-4 rounded-lg">
      <div className="flex flex-col gap-2">
        <Progress progress={detailPetition.Signatures?.length / 10} color="green" />
        <div className="flex justify-between font-bold">
          <div className="text-green-500">
            <h1>{detailPetition.Signatures?.length}</h1>
            <p className="text-base font-normal">Tanda tangan</p>
          </div>
          <div className="text-end">
            <h1>1000</h1>
            <p className="text-base font-normal">Tujuan</p>
          </div>
        </div>
        <button className="bg-green-500 px-3 py-1 w-full rounded-lg text-white hover:bg-green-400 active:bg-green-700" onClick={() => handleSignature(detailPetition.id)}>
          {loadingButton ? <Spinner /> : <>Berikan dukungan</>}
        </button>
      </div>
    </div>
  );
};

export default SignaturePetition;
