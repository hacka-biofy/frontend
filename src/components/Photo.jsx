import React, { useState } from 'react';
import { FaCamera, FaTimes } from 'react-icons/fa';
import Loader from './Loader';

const Photo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [photoSelected, setPhotoSelected] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => {
    if (modalVisible) {
      setPhotoSelected(false);
    }
    setModalVisible(!modalVisible);
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setPhotoSelected(true);
    } else {
      setPhotoSelected(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulando um atraso de 5 segundos para o envio da foto
    setTimeout(() => {
      setLoading(false);
      setPhotoSelected(false);
      setModalVisible(false);
    }, 5000);
  };

  return (
    <div>
      <button onClick={toggleModal}>
        <FaCamera className='h-10 w-10' />
      </button>

      {modalVisible && (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50'>
          <div className='fixed bg-[#2A6041] bottom-0 p-4 rounded-lg w-[95%] max-w-md'>
            <div className='flex justify-end items-center mb-4'>
            {!loading && (
              <button onClick={toggleModal}>
                <FaTimes className='h-6 w-6' />
              </button>
            )}
            </div>
            <div className='flex justify-center items-center gap-2'>
              <form action='/upload' method='POST' encType='multipart/form-data' onSubmit={handleSubmit} className='flex items-center justify-center'>
                {!photoSelected && (
                  <label htmlFor="file-upload" className="text-white bg-[#2CEAA3] px-4 py-2 rounded-lg cursor-pointer">
                    Selecionar Foto
                    <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                  </label>
                )}
                {photoSelected && (
                  <button type="submit" className={`flex items-center justify-center ${loading ? '' : 'bg-green-500 text-white'} px-4 py-2 rounded-lg`}>
                    {loading ? <Loader /> : "Enviar Foto"}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;
