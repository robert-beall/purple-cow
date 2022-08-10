import Button from 'react-bootstrap/Button';
import './PurpleCowButton.css';

function PurpleCowButton(props) {
  return (
    <>
      <Button onClick={props.onClick} variant="purple" size="xxl">
        {props.children}
      </Button>
    </>
  );
}

export default PurpleCowButton;
