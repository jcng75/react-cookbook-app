import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';

export default function App() {
  const [showModal, setShowModal] = useState<number | null>(null);

  const handleShow = (index: number) => {
    setShowModal(index);
  };

  const handleClose = () => {
    setShowModal(null);
  };

  const recipes = ['Recipe 1', 'Recipe 2', 'Recipe 3'];

  return (
    <>
      <div className="bg-dark text-light p-4">
        <h1 className="h2"> Create a new Recipe </h1>
        <form className="form-group p-2">
          <label htmlFor="recipe" className="label">
            Recipe Name:
          </label>
            <input id="recipe" type="text" name="name" className="form-control" />
          <label htmlFor="ingredients" className="label me-2 mt-2">
            Ingredients:
          </label>
            <button id="ingredients" className="btn btn-primary mt-2">Add Ingredient</button> <br/>
            <ul className="list-group mt-2 mb-2">
              <li className="list-group-item">
                Ingredient 1
                <button className="btn btn-danger ms-2"> Delete </button>
                </li>
              <li className="list-group-item">
                Ingredient 2
                <button className="btn btn-danger ms-2"> Delete </button>
              </li>
            </ul>
          <label htmlFor="cookingdetails" className="label">
            Cooking Details:
          </label>
            <textarea id="cookingdetails" name="cookingdetails" className="form-control" />
          <button type="submit" className="btn btn-primary mt-3 mb-3 pt-3 pb-3">Submit</button>
          </form>
        <h1 className="h2"> My Cool Cookbook Recipes </h1>
        <label htmlFor="search" className="label"> Search </label>
        <input id="search" type="text" className="form-control mb-3"></input>
        <ul className="list-group">
          {recipes.map((recipe, index) => (
            <li key={index} className="list-group-item">
              {recipe}
              <div>
                <button
                  className="btn btn-success m-2"
                  onClick={() => handleShow(index)}
                >
                  Info
                </button>
                <button className="btn btn-danger">Delete</button>
              </div>
              <Modal show={showModal === index} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{recipe} Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Details about {recipe} go here.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
