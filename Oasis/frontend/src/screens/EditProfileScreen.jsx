import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { setCredentials } from "../slices/authSlice";
import {
  useUpdateUserMutation,
  useGetUserDetailsQuery,
} from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Load from "../components/micro_components/Load";

const EditProfileScreen = () => {
  // Get id to redirect to user profile
  const { id: userId } = useParams();

  // Mutation to update user profile
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  const {
    data: user,
    isLoading,
    refetch,
    error,
  } = useGetUserDetailsQuery(userId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State to manage form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  // Handler to submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateUser({
        userId,
        name,
        email,
        phone,
        image,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Perfil actualizado");
      refetch();
      navigate(`/profile/${userId}`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setImage(user.image);
    }
  }, [user]);

  return (
    <>
      {isUpdating && <Load />}
      {isLoading ? (
        <Load />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <Container
          fluid
          className="d-flex justify-content-start 
      align-items-start flex-column pt-5"
          style={{ minHeight: "81vh", minWidth: "100vw" }}
        >
          <h1 className="ms-5">Actualizar perfil</h1>
          <span className="ms-5 mb-5">
            Nota: Unicamente los datos ingresados seran modificados
          </span>
          <Form className="ms-5" onSubmit={handleSubmit}>
            <Form.Group controlId="firstName" className="mb-2">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="phone" className="mb-2">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="text"
                placeholder="Celular"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="my-3">
              Enviar
            </Button>
          </Form>
        </Container>
      )}
    </>
  );
};

export default EditProfileScreen;
