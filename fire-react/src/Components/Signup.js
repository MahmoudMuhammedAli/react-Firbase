import React, { useRef, useState } from "react";
import { Form, Button, Card , Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);



  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("passwords don't match");
    }
    try {
      setError("");
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("failed to create a new account");
    }
    setLoading(false)
  }
  return (
    <>
      <Card className="mt-5">
        <Card.Body>
          <h2 className="text-center mb-4">sign Up</h2>
          {error&& <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>password confirm</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button  disabled={loading} className="w-100 mt-4" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Login
      </div>
    </>
  );
}
