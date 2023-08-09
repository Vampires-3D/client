import {Button, ButtonToolbar} from 'react-bootstrap';

type ButtonType = {
  title: string,
  backgroundColor: string,
  color: string
}

export function Menu() {
  const buttons: ButtonType[] = [
    {
      title: 'PLAY',
      backgroundColor: 'gainsboro',
      color: 'black'
    },
    {
      title: 'INVENTORY',
      backgroundColor: 'gainsboro',
      color: 'black'
    },
    {
      title: 'ROLES',
      backgroundColor: 'gainsboro',
      color: 'black'
    }
  ]

  return (
    <ButtonToolbar
      className="position-absolute d-flex row start-50 top-50 translate-middle justify-content-center pe-0">
      {buttons.map((item, index) => {
        return (
          <div className={`row justify-content-center ${index != 0 && ' mt-2'}`} key={`menu_${index}`}>
            <Button className="w-auto" variant="outline-dark"
                    style={{backgroundColor: item.backgroundColor}}>{item.title}</Button>
          </div>
        )
      })}
    </ButtonToolbar>
  );
}
