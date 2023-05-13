import {Button, ButtonGroup, ButtonToolbar, Dropdown, DropdownButton, ProgressBar} from 'react-bootstrap';

export function Header() {
  const levelStatus = 60;
  const name = 'mstfygci';
  const level = 13;
  return (
    <div className="position-absolute d-flex row top-0 end-0 mt-3 me-3 justify-content-end">
      <ButtonToolbar className="justify-content-end pe-0" aria-label="Toolbar with button groups">
        <ButtonGroup className="me-3">
          <Button variant="light"><i className="bi bi-coin"></i> 312</Button>
          <Button variant="light"><i className="bi bi-currency-bitcoin"></i> 13</Button>
        </ButtonGroup>
        <DropdownButton className="me-3"
                        as={ButtonGroup}
                        title={<i className="bi bi-person-hearts"></i>}
                        variant="light"
                        id="bg-nested-dropdown"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
        <Button variant="light"><i className="bi bi-gear-fill"></i></Button>
      </ButtonToolbar>
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
    </div>
  )
}
