import React from 'react';

// Components
import Map from '../../components/Map';
import Sidebar from '../../components/Sidebar';
import Toast from '../../components/Toast';
import Modal from '../../components/Modal';

// Styles
import { Container } from './styles';

const Main = () => (
  <Container>
    <Toast />
    <Map />
    <Sidebar />
    <Modal />
  </Container>
);

export default Main;
