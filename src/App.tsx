import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function App() {

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
          <li className="list-group-item">
            Recipe 1
            <div>
              <button className="btn btn-success m-2"> Info </button>
              <Modal>
                <Modal.Header closeButton>
                  <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Some Content here</p>
                </Modal.Body>
                <Modal.Footer>
                  // If you don't have anything fancy to do you can use
                  // the convenient `Dismiss` component, it will
                  // trigger `onHide` when clicked
                  {/* <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss> */}

                  // Or you can create your own dismiss buttons
                  <button className='btn btn-primary'>
                    Save
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
            <button className="btn btn-danger"> Delete </button>
            </li>
          <li className="list-group-item">
            Recipe 2
            <button className="btn btn-success m-2"> Info </button>
            <button className="btn btn-danger"> Delete </button>
            </li>
          <li className="list-group-item">
            Recipe 3
            <button className="btn btn-success m-2"> Info </button>
            <button className="btn btn-danger"> Delete </button>
            </li>
        </ul>
      </div>
    </>
  )
}
