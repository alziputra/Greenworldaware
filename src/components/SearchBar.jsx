// src/SearchBar.js
import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSortBy, setSelectedSortBy] = useState('');

  const handleSearch = () => {
    // Implement your search logic here using searchTerm, selectedCategory, and selectedSortBy
    console.log('Searching...', searchTerm, selectedCategory, selectedSortBy);
  };

  return (
    <div className="md:max-w-[1480px] m-auto grid md:grid-cols-12 gap-1 max-w-[600px] items-center pt-10 px-4 md:px-20">
      <input
        type="text"
        placeholder="Cari Berita"
        className="border focus:outline-none focus:border-[#11BB60] focus:ring-[#11BB60] focus:ring-1 p-2 w-[full] md:w-auto col-span-7 "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="bg-[#11BB60] text-white p-2 rounded w-10 h-full md:w-10 hover:text-[#11BB60] hover:bg-white col-span-1" onClick={handleSearch}>
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </button>
      <select className="border focus:outline-none focus:border-[#11BB60] focus:ring-[#11BB60] focus:ring-1 p-2 w-full md:w-auto col-span-2" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Kategori</option>
        <option value="kegiatan">Kegiatan</option>
        <option value="lingkungan">Lingkungan</option>
        <option value="indonesia">Indonesia</option>
        <option value="dunia">Dunia</option>
      </select>

      <select className="border focus:outline-none focus:border-[#11BB60] focus:ring-[#11BB60] focus:ring-1 p-2 w-full md:w-auto col-span-2" value={selectedSortBy} onChange={(e) => setSelectedSortBy(e.target.value)}>
        <option value="terbaru">Terbaru</option>
        <option value="terlama">Terlama</option>
        <option value="trending">Trending</option>
      </select>
    </div>
  );
};

export default SearchBar;
