import React from "react";
import Table from "react-bootstrap/Table";
import MainModal from "../modal/MainModal";

function MainTable(props) {
  const {
    headTableComponent,
    bodyTableComponent,
    isShowModalDelete,
    onCloseModalDelete,
    isShowModalUpdate,
    onCloseModalUpdate,
    deleteComponent,
    updateComponent,
  } = props;
  return (
    <>
      <Table bordered responsive>
        {headTableComponent}
        {bodyTableComponent}
      </Table>
      <MainModal
        size="md"
        isShow={isShowModalDelete}
        onClose={onCloseModalDelete}
        formComponent={deleteComponent}
      />
      <MainModal
        size="xl"
        isShow={isShowModalUpdate}
        onClose={onCloseModalUpdate}
        formComponent={updateComponent}
      />
    </>
  );
}

export default MainTable;
