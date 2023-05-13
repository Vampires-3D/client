import {Button, ProgressBar} from 'react-bootstrap';

export function Info() {
  const levelStatus = 60;
  const name = 'mstfygci';
  const level = 13;
  return (
    <Button variant="light" className="mt-3 d-flex" style={{width: 'auto'}}>
      <i className="bi bi-person-circle me-3" style={{fontSize: '2rem'}}></i>
      <div>
        <div className="me-3">
          {name}
          <ProgressBar variant="info" now={levelStatus} label={`${levelStatus}%`}/>
        </div>
      </div>
      <i className="bi bi-star-fill" style={{fontSize: '2rem', color: 'gold'}}>
        {level}
      </i>
    </Button>
  )
}
