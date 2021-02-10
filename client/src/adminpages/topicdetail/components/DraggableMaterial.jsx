import React, { useEffect, useState } from "react";
import { array, func, string } from "prop-types";
import { ReactSortable } from "react-sortablejs";
import { AdminDangerButton } from "../../components";
import TeacherAPI from "../../../utils/TeacherAPI";
import { Button, Modal } from "react-bootstrap";

import styles from "./draggablematerial.module.scss";

export const DraggableMaterial = ({
  courseId,
  handleDeleteMaterialItem,
  material,
  topicId,
}) => {
  const [state, setState] = useState(material);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [materialToDelete, setMaterialToDelete] = useState(false);

  const handleShowDeleteConfirm = (m) => {
    console.log(m);
    setMaterialToDelete(m);
    setShowDeleteConfirm(true);
  };
  const handleCloseDeleteConfirm = () => setShowDeleteConfirm(false);

  useEffect(() => {
    const changes = state.reduce((acc, cv, idx) => {
      if (cv.id !== idx + 1)
        acc.push({ _id: cv._id, name: cv.name, lastId: cv.id, newId: idx + 1 });
      return acc;
    }, []);

    if (changes.length)
      TeacherAPI.t_updateMaterialOrder({ courseId, newList: changes, topicId })
        .then(() => {
          console.log("OK");
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            alert(err.response.data);
          } else {
            alert("Ocurrió un error en el servidor");
          }
        });
  }, [courseId, state, topicId]);

  return (
    <>
      <Modal show={showDeleteConfirm} onHide={handleCloseDeleteConfirm}>
        <Modal.Body>
          <span className="lead">
            {`¿Estás seguro que quieres borrar este ${materialToDelete && materialToDelete.type}?`}
          </span>
          <div className="d-flex flex-row justify-content-center mt-4">
            <Button
              variant="danger"
              onClick={() =>
                handleDeleteMaterialItem(
                  materialToDelete.type,
                  materialToDelete._id,
                  materialToDelete.link
                )
              }
            >
              Borrar
            </Button>
            <Button variant="dark" className="ml-2" onClick={handleCloseDeleteConfirm}>
              Cancelar
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {state.length ? (
        <ul className="mb-1">
          <ReactSortable list={state} setList={setState}>
            {state.map((m) => (
              <li key={m._id}>
                <strong className={styles.item}>
                  {m.type === "video" && <i className="fas fa-video mr-2" />}
                  {m.type === "pdf" && <i className="fas fa-file-pdf mr-2" />}
                  {m.name}
                  <AdminDangerButton
                    icon={<i className="fas fa-times" />}
                    onClick={() => handleShowDeleteConfirm(m)}
                  />
                </strong>
              </li>
            ))}
          </ReactSortable>
        </ul>
      ) : (
        <h5>-</h5>
      )}
    </>
  );
};

DraggableMaterial.propTypes = {
  courseId: string.isRequired,
  handleDeleteMaterialItem: func.isRequired,
  material: array,
  topicId: string.isRequired,
};