import { useContext } from 'react';
import { PetitionContext } from '../../context/PetitionContext';
import { PetitionSkeleton } from '../../layout/Skeleton';
import { Link } from 'react-router-dom';

const ListPetitions = () => {
  const { petitions, loading } = useContext(PetitionContext);
  return (
    <div className="grid grid-cols-1 gap-4">
      {loading ? (
        <PetitionSkeleton />
      ) : (
        petitions.map((item) => (
          <Link to={`/petisi/${item.id}`} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow w-full lg:h-40 md:h-full  md:flex-row md:w-full md:border hover:bg-gray-100 " key={item.id}>
            <img className="object-cover rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-s-lg" src={`${item.image ? item.image : 'https://source.unsplash.com/random/600×700/?computer'}`} alt="image" />
            <div className="flex flex-col p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{item.description}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default ListPetitions;
