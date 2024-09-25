import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


const Navbar = ( navOpen : any ) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>();
  const activeBox: any = useRef();
  const initActiveBox = () => {
    console.log(lastActiveLink.current);
    console.log(activeBox.current);
    if (lastActiveLink.current && lastActiveLink.current.offsetTop) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  };
  interface NavItem {
    label: string;
    link: string;
    className: string;
    ref?: any;
  }

  useEffect(() => {
    initActiveBox();
  }, []);
  window.addEventListener('resize', initActiveBox);

  const activeCurrentLink = (event: any) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

      activeBox.current.style.top = event.target.offsetTop + 'px';
      activeBox.current.style.left = event.target.offsetLeft + 'px';
      activeBox.current.style.width = event.target.offsetWidth + 'px';
      activeBox.current.style.height =event.target.offsetHeight + 'px';
  }

  const navItems: NavItem[] = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink,
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link',
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link',
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link',
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden',
    },
  ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
export default Navbar;
