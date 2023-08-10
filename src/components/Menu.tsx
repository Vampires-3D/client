import {Button, ButtonToolbar} from 'react-bootstrap';

type ButtonType = {
  key: string,
  title: string,
  backgroundColor: string,
  color: string
};

export function Menu() {
  const buttons: ButtonType[] = [
    {
      key: 'play',
      title: 'PLAY',
      backgroundColor: 'gainsboro',
      color: 'black'
    },
    {
      key: 'inventory',
      title: 'INVENTORY',
      backgroundColor: 'gainsboro',
      color: 'black'
    },
    {
      key: 'roles',
      title: 'ROLES',
      backgroundColor: 'gainsboro',
      color: 'black'
    }
  ];

  return (
    <ButtonToolbar
      className="position-absolute d-flex row start-50 top-50 translate-middle justify-content-center pe-0">
      {buttons.map((item, index) => {
        return (
          <div className={`row justify-content-center ${index != 0 && ' mt-2'}`}
               key={`menu_${item.key}`}>
            <Button className="w-auto" variant="outline-dark"
                    style={{backgroundColor: item.backgroundColor}}>{item.title}</Button>
          </div>
        );
      })}
    </ButtonToolbar>
  );
}

