import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { UserContext } from "./UserContext";
import { TOKEN } from "../constants/Key";
import toast from "react-hot-toast";

export const PetitionContext = createContext({
  petitions: [],
  detailPetition: null,
  loading: false,
  loadingButton: false,
  handleSignature: async () => {},
});

export const PetitionContextProvider = ({ children }) => {
  const [petitions, setPetitions] = useState([]);
  const [detailPetition, setDetailPetition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const { id } = useParams();
  const location = useLocation();
  const { userData } = useContext(UserContext);
  const token = localStorage.getItem(TOKEN);

  // Check if the current route is a petition route
  const isPetitionRoute = location.pathname.startsWith("/petisi");

  // Fetch all petitions if on the petition route
  const getPetitions = async () => {
    if (!isPetitionRoute) return;
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/petitions`);
      const petitionsData = response.data.data.map((petition) => ({
        ...petition,
        image: petition.image || "https://via.placeholder.com/300x200", // Placeholder if image is missing
      }));
      setPetitions(petitionsData);
    } catch (error) {
      console.error("Internal server error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPetitions();
  }, [isPetitionRoute]);

  // Fetch petition details by ID if on the detail route
  const getPetitionByID = async () => {
    if (!id || !isPetitionRoute) return;

    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/petitions/${id}`);
      setDetailPetition({
        ...response.data.data,
        image: response.data.data.image || "https://via.placeholder.com/650x400", // Placeholder if image is missing
      });
    } catch (error) {
      console.error("Internal server error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPetitionByID();
  }, [id, isPetitionRoute]);

  const handleSignature = async (petitionId) => {
    setLoadingButton(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/signatures`,
        { petitionId, userId: userData?.id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await getPetitionByID();
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

  return <PetitionContext.Provider value={{ petitions, detailPetition, loading, loadingButton, handleSignature }}>{children}</PetitionContext.Provider>;
};

PetitionContextProvider.propTypes = {
  children: PropTypes.node,
};
