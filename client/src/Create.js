import React, { useState } from "react";

import axios from "axios";

const Create = () => {
    //state:
    const [state, setState] = useState({
        name: "",
        instructions: "",
        image: "",
        cooktime: 0,
        yields: 0,
        user: "",
    });
    //destructure values from the state
    const { name, instructions, image, cooktime, yields, user } = state;
    // onChange Event Handler:
    const handleChange = (val) => (event) => {
        console.log(`val: ${val} , event: ${event.target.value}`);
        setState({ ...state, [val]: event.target.value });
    };
    //onSubmit Event handler:
    const handleSubmit = (e) => {
        //e.preventdefault();
        axios
            .post(`${process.env.REACT_APP_API}/recipe`, {
                name: name,
                instructions: instructions,
                image: image,
                cooktime: image,
                yields: yields,
                user: user,
            })
            .then((response) => {
                alert(response);
                //empty the state
                setState({ ...state, name: "", instructions: "", image: "", cooktime: 0, yields: 0, user: "" });
                //show success alert
                alert(`Recipe named: ${response.data.name} is created`);
            })
            .catch((error) => {
                console.log(error.response);
                alert(error.response);
            });
    };

    return (
        <div className='conatiner p-5'>
            <h1>ADD RECIPE</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Recipe Name</label>
                    <input
                        onChange={handleChange("name")}
                        value={name}
                        type='text'
                        className='form-control'
                        placeholder='Recipe Name'
                        required
                    />
                    <small className='form-text text-muted'>Enter the name of the delicious recipe</small>
                </div>
                <div className='form-group'>
                    <label>Instructions</label>
                    <textarea
                        onChange={handleChange("instructions")}
                        value={instructions}
                        type='text'
                        className='form-control'
                        placeholder='Instructions'
                        required
                    />
                    <small className='form-text text-muted'>Write the steps to follow along with the ingredients</small>
                </div>
                <div className='form-group'>
                    <label>Image URL</label>
                    <input
                        onChange={handleChange("image")}
                        value={image}
                        type='text'
                        className='form-control'
                        placeholder='Image URL'
                    />
                    <small className='form-text text-muted'>Enter a valid URL for the image of the recipe</small>
                </div>
                <div className='form-group'>
                    <label>Cook Time</label>
                    <input
                        onChange={handleChange("cooktime")}
                        value={cooktime}
                        type='number'
                        className='form-control'
                        placeholder='Cook time in min.'
                        required
                    />
                    <small className='form-text text-muted'>
                        Tell us the time taken to prepare the recipe in minutes.
                    </small>
                </div>
                <div className='form-group'>
                    <label>Yields</label>
                    <input
                        onChange={handleChange("yields")}
                        value={yields}
                        type='number'
                        className='form-control'
                        placeholder='Yields'
                        required
                    />
                    <small className='form-text text-muted'>Tell us the number of servings the recipe yields.</small>
                </div>
                <div className='form-group'>
                    <label>User</label>
                    <input
                        onChange={handleChange("user")}
                        value={user}
                        type='text'
                        className='form-control'
                        placeholder='User'
                        required
                    />
                    <small className='form-text text-muted'>User</small>
                </div>
                <button className='btn btn-primary'>Add Recipe</button>
            </form>
        </div>
    );
};

export default Create;
