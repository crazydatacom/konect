import React from "react";

import Input from "../components/shared/FormElements/Input";
import Button from "../components/shared/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../util/validators";
import { useForm } from "../store/hooks/form-hook";
import "./PlaceForm.css";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false
      },
      description: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="name"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        placeholder="Supply Name"
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
        placeholder="Description"
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD SUPPLY
      </Button>
    </form>
  );
};

export default NewPlace;
