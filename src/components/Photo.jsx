import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const Photo = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div>
      <button onClick={toggleModal}>
        <FaCamera className='h-10 w-10' />
      </button>

      {modalVisible && (
        <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50'>
          <div className='flex flex-col justify-center items-center bg-purple-500 w-[95%] p-4 fixed bottom-40'>
            <button onClick={toggleModal}>Fechar</button>
            <button>Tirar Foto</button>
            <input type="file" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;
