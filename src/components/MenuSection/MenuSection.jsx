import BtnMenu from "../BtnMenu/BtnMenu"
import './MenuSection.css'



function MenuSection() {
  return (
    <div className='menu-section py-5 text-light shadow'>
    <div className='container d-flex flex-column align-items-center'>
        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
        <div className='row mb-5 w-100'>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                  <h3 className='fs-2 mb-5'>Food</h3>
                  <ul className='px-0'>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>English Breakfast</p>
                          <p className='fs-3 mx-2 text-success fw-bold'>$12</p>
                        </li>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>Spicy Beef</p>
                          <p className='fs-3 mx-2 text-success fw-bold'>$15</p>
                        </li>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>Spaghetti Bolognese</p>
                          <p className='fs-3 mx-2 text-success fw-bold'>$10</p>
                        </li>
                  </ul>
            </div>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                  <h3 className='fs-2 mb-5'>Drinks</h3>
                  <ul className='px-0'>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>Coffe</p>
                          <p className='fs-3 mx-2 text-success fw-bold'>$2</p>
                        </li>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>juice</p>
                          <p className='fs-3 mx-2 text-success fw-bold'>$1</p>
                        </li>
                        <li className='d-flex justify-content-between'>
                          <p className='fs-3 mx-2'>Beer</p>
                          <p className='fs-3 mx-2 text-success fw-bold'>$5</p>
                        </li>
                  </ul>
            </div>
        </div>
        <BtnMenu/>
     </div>
  </div>  
  )
}

export default MenuSection