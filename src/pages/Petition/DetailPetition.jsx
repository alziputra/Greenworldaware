import { useContext } from 'react';
import { PetitionContext } from '../../context/PetitionContext';
import { formatDate } from '../../utils/Utils';
import SignaturePetition from './SignaturePetition';
import { DetailPetitionSkeleton } from '../../layout/Skeleton';

const DetailPetition = () => {
  const { detailPetition, loading } = useContext(PetitionContext);
  return (
    <div className="lg:max-w-5xl md:max-w-3xl pt-32 pb-10 m-auto flex flex-col gap-6 px-2">
      {loading ? (
        <DetailPetitionSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col col-span-2">
            <div className="flex flex-col gap-4">
              <h1 className="text-center font-bold text-2xl lg:text-2xl md:text-2xl md:text-start">{detailPetition.title}</h1>
              <img className="rounded-lg shadow object-cover sticky" src={detailPetition.image} alt="image" />
              <p>
                <span className="text-neutral-400">Tanggal</span> {formatDate(detailPetition.createdAt)}
              </p>
              <div className="md:hidden">
                <SignaturePetition />
              </div>
            </div>
            <h1 className="font-bold mt-4">Mengapa petisi ini penting</h1>
            <h1>{detailPetition.description}</h1>
          </div>
          <div className="hidden lg:block md:block sm:hidden w-full">
            <SignaturePetition />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPetition;
