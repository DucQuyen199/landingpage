import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

import { ArrowUpIcon } from "../icons";
import "./Menu.css";
import { MENU } from "../../data";

export const Menu = () => {
  // #region Scroll To Top
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolling(scrollPosition > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTopButton = () => window.scrollTo({ top: 0 });
  // #endregion Scroll To Top

  return (
    <>
      <Navbar
        fixed='top'
        collapseOnSelect
        expand='lg'
        className={`${
          scrolling ? "bg-white shadow-sm" : "bg-transparent"
        } pb-4`}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand href='#hero'>
            <Image
              src={`${process.env.PUBLIC_URL}/images/logo.svg`}
              className='d-inline-block align-top'
              alt='China Travel'
              data-aos="fade-right"
              data-aos-delay="100"
            />
          </Navbar.Brand>
          {/* Navbar Toggler for Responsive */}
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='border-0'
          />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='justify-content-end font-open-sans mt-3'
          >
            <Nav className='gap-xl-5 gap-lg-4 gap-md-2'>
              {/* Navbar Elements */}
              {MENU &&
                MENU.map((menu, index) => (
                  <Nav.Link
                    href={menu.link}
                    key={index}
                    className='text-black fw-medium'
                    data-aos="fade-down"
                    data-aos-delay={100 * (index + 1)}
                  >
                    {menu.name}
                  </Nav.Link>
                ))}
              {/* Login and Sign up Buttons */}
              <Button
                variant='light'
                className='bg-transparent border-0 fw-medium'
                data-aos="fade-left"
                data-aos-delay="100"
              >
                登录
              </Button>
              <Button 
                variant='outline-dark fw-medium'
                data-aos="fade-left"
                data-aos-delay="200"
              >
                注册
              </Button>
              {/* Languages - Dropdown */}
              <NavDropdown
                title='中文'
                id='basic-nav-dropdown'
                className='fw-medium'
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <NavDropdown.Item href='#'>中文 - (Chinese)</NavDropdown.Item>
                <NavDropdown.Item href='#'>EN - (English)</NavDropdown.Item>
                <NavDropdown.Item href='#'>日本語 - (Japanese)</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Scroll To Top Button  */}
      {scrolling && (
        <Button
          variant='light'
          className='scroll-to-top position-fixed end-0 bottom-0 border-0 p-2 m-3 rounded-circle z-1 d-flex justify-content-center align-items-center'
          onClick={handleScrollToTopButton}
        >
          <ArrowUpIcon />
        </Button>
      )}
    </>
  );
};
