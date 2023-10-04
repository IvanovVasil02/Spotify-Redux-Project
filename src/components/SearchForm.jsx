import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { handleSearch } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
    dispatch(handleSearch(searchQuery));
  };

  return (
    <Form className='d-flex' onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          className='rounded-end-0'
          id='searchField'
          placeholder='Search'
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </InputGroup>

      <Button variant='outline-secondary' type='submit' className='rounded-start-0' id='button-addon1'>
        GO
      </Button>
    </Form>
  );
};
export default SearchForm;
