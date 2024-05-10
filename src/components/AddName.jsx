function AddName(){
    return(
        <form action=''>

        <div className="flex flex-col w-full lg:flex-row">

          <div className="grid flex-grow place-items-center">

            <label className="input input-bordered flex items-center w-10/12">Name :

              <input id='addname' name='addname' type='text'></input>

            </label>

          </div>

          <div className="grid flex m-4 justify-items-center">

            <button className="btn btn-success" type="submit">Add</button>

          </div>

        </div>

      </form>
    )
}
export default AddName