import { useQuery } from 'customHooks/query';
import { useNotification } from 'context/notification';
import Tooltip from 'components/Tooltip';
import Modal from 'components/Modal';
import useModal from 'customHooks/useModal';

const Main = () => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const handleOpenModal = (data: any) => {
    openModal();
  };
  const handleCloseModal = () => {
    closeModal();
  };


  const notification = useNotification();
  const { data: test, isSuccess }:any = useQuery(
    ['query-data-test'],
    `v1/test/`
  );

  return (
    <>
    <h1>Main View</h1>
    <Tooltip title="asdasmdasd asdasdasda  sd asd as d">
      <p>Modelo Tooptip {isSuccess && test.key}</p>
    </Tooltip>
    <p onClick={() => notification.error('asd')}>Modelo Snackbar</p>
    <p onClick={handleOpenModal}>Modal test</p>
    <Modal
      // actionButton={<Button onClick={handleCloseModal}>Fechar</Button>}
      showModal={isModalOpen}
      isFullscreen
      title={`Título do modal de teste`}
      handleClose={handleCloseModal}
    >
      <p>Teste de exibição de modal</p>
    </Modal>
    </>
  );
};

export default Main;
