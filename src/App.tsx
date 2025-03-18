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
          <label htmlFor="ingredients" className="label">
            Ingredients:
          </label>
            <textarea id="ingredients" name="ingredients" className="form-control" />
          <button type="submit" className="btn btn-primary mt-3 mb-3 pt-3 pb-3">Submit</button>
          </form>
        <h1 className="h2"> My Cool Cookbook Recipes </h1>
        <label htmlFor="search" className="label"> Search </label>
        <input id="search" type="text" className="form-control mb-3"></input>
        <ul className="list-group">
          <li className="list-group-item">
            Recipe 1
            <button className="btn btn-success m-2" data-toggle="modal" data-target="#exampleModalCenter"> Info </button>
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
