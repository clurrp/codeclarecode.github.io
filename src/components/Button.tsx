import PropTypes from 'prop-types';

// Primary button
interface ButtonPrimaryProps {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
}

const ButtonPrimary = ({ href, target = '_self', label, icon, classes }: ButtonPrimaryProps) => {
  if (href) {
    return (
      <a href={href} target={target} className={'btn btn-primary ' + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={'btn btn-primary ' + classes}>
        {' '}
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.proptypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

// Outline button
interface ButtonProps {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
}

const ButtonOutline = ({ href, target = '_self', label, icon, classes }: ButtonProps) => {
  if (href) {
    return (
      <a href={href} target={target} className={'btn btn-outline ' + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={'btn btn-outline ' + classes}>
        {' '}
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonOutline.proptypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export {
  ButtonPrimary,
  ButtonOutline
};
