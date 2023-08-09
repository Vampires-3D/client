import {Button, ProgressBar} from 'react-bootstrap';

export function Info() {
  const percentage = 60;
  const name = 'mstfygci';
  const level = 13;

  return (
    <Button variant="light" className="mt-3 d-flex">
      <i className="bi bi-person-circle me-3 h2"></i>
      <div>
        <div className="me-3">
          {name}
          <ProgressBar variant="info" now={percentage} label={`${percentage}%`}/>
        </div>
      </div>
      <i className="bi bi-star-fill h2 text-warning">
        {level}
      </i>
    </Button>
  );
}
