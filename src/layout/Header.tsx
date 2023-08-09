import {Info} from '../components/Info.tsx';

export function Header() {

  return (
    <div className="position-absolute d-flex row top-0 end-0 mt-3 me-3 justify-content-end">
      <Info/>
    </div>
  )
}
