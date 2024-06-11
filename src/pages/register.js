// src/pages/register.js
import React from 'react';
import Link from 'next/link';
import LoginLayout from '../components/LoginLayout';
import { Carousel } from 'react-bootstrap';

const Register = () => {
  return (
    <LoginLayout>
      <div className="row p-5 height-100vh bg-white overflow-hidden">
        <div className="col-md-3 p-0">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block h-100"
                src="/images/slider1.png"
                alt="First slide"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block h-100"
                src="/images/slider2.png"
                alt="Second slide"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-9 bg-white">
          <div className="d-flex justify-content-between mb-4 px-4">
            <Link href="/" className="text-secondary">
              Return to home
            </Link>
            <div className="text-dark">Already have an account? <Link href="/login" className="text-primary">Log in</Link></div>
          </div>
          <div className="d-grid justify-content-center align-items-center">
            <div className="mb-4">
              <img src="/images/logo.png" alt="Logo" className="mb-4" />
              <h1 className="h4 text-black">Select your type</h1>
              <p className="text-muted">Select the user type that you would like to login as.</p>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-black">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-black">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-black">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="btn bg-warning text-white w-100"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Register;
