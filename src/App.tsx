export default function App() {

  return (
    <>
      <div>
        <h1> Create a new Recipe </h1>
        <form>
          <label htmlFor="recipe">
            Recipe Name:
          </label>
            <input id="recipe" type="text" name="name" />
          <label htmlFor="ingredients">
            Ingredients:
          </label>
            <textarea id="ingredients" name="ingredients" />
          <button type="submit">Submit</button>
          </form>
        <h1> My Cool Cookbook Recipes </h1>
        <label htmlFor="search"> Search </label>
        <input id="search" type="text"></input>
        <ul>
          <li>
            Recipe 1
            <button> Info </button>
            <button> Delete </button>
            </li>
          <li>
            Recipe 2
            <button> Info </button>
            <button> Delete </button>
            </li>
          <li>
            Recipe 3
            <button> Info </button>
            <button> Delete </button>
            </li>
        </ul>
      </div>
    </>
  )
}
