import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import { TOKEN } from "../constants/Key";
import toast from "react-hot-toast";

export const PetitionContext = createContext({
  petitions: [],
  detailPetition: [],
  loading: false,
  loadingButton: false,
  handleSignature: async () => {},
});

export const PetitionContextProvider = ({ children }) => {
  const [petitions, setPetitions] = useState([]);
  const [detailPetition, setDetailPetition] = useState(null); // Ubah default menjadi null untuk validasi
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const { id } = useParams();
  const { userData } = useContext(UserContext);
  const token = localStorage.getItem(TOKEN);

  // Fetch all petitions
  const getPetitions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/petitions`);
      setPetitions(response.data.data);
    } catch (error) {
      console.error("Internal server error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPetitions();
  }, []);

  // Fetch petition by ID if ID exists
  const getPetitionByID = async () => {
    if (!id) return; // Hanya lanjutkan jika `id` ada

    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/petitions/${id}`);
      setDetailPetition(response.data.data);
    } catch (error) {
      console.error("Internal server error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPetitionByID(); // Panggil hanya jika `id` ada
  }, [id]);

  // Add signature
  const handleSignature = async (petitionId) => {
    setLoadingButton(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/signatures`,
        {
          petitionId,
          userId: userData?.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await getPetitionByID(); // Refresh data petition setelah menambahkan signature
    } catch (error) {
      if (error.response?.status === 403) {
        toast.error("Kamu belum login");
      } else {
        toast.error(error.message || "Error occurred while adding signature");
      }
    } finally {
      setLoadingButton(false);
    }
  };

  return (
    <PetitionContext.Provider
      value={{
        petitions,
        detailPetition,
        loading,
        loadingButton,
        handleSignature,
      }}
    >
      {children}
    </PetitionContext.Provider>
  );
};

PetitionContextProvider.propTypes = {
  children: PropTypes.node,
};
