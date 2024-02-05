type ButtonProps = {
  buttonName: string;
  buttonStyle: string;
  click?: () => void;
  change?: () => void;
};

export const Button = ({
  buttonName,
  buttonStyle,
  click,
  change,
}: ButtonProps) => (
  <button className={`btn ${buttonStyle}`} onClick={click} onChange={change}>
    {buttonName}
  </button>
);
