// src/pages/login.js
import React from 'react';
import Link from 'next/link';
import LoginLayout from '../components/LoginLayout';
import { Carousel } from 'react-bootstrap';

const Login = () => {
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
            <div className="text-dark">Don’t have an account? <Link href="/register" className="text-primary">Sign up </Link></div>
          </div>
          <div className="d-grid justify-content-center align-items-center">
            <div className="mb-4">
              <img src="/images/logo.png" alt="Logo" className="mb-4" />
              <h1 className="h4 text-black">Login to your account</h1>
              <p className="text-muted">Welcome back! Please enter your email and password to login.</p>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-black">Phone Number / Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label htmlFor="password" className="form-label text-black">Password</label>
                  <Link href="/forgot-password" className="text-primary">
                    Forgot Password?
                  </Link>
                </div>
                
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
                Login
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-muted">OR LOGIN USING</p>
              <div className="d-flex justify-content-center gap-3">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                >
                  <img src="/google-icon.png" alt="Google" className="me-2" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                >
                  <img src="/facebook-icon.png" alt="Facebook" className="me-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Login;
